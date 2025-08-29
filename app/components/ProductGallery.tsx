import {useState, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Image} from '@shopify/hydrogen';
import {XMarkIcon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {cn} from '~/lib/design-system';
import type {ProductFragment} from 'storefrontapi.generated';

interface ProductGalleryProps {
  product: ProductFragment;
  selectedVariant?: ProductFragment['selectedOrFirstAvailableVariant'];
}

export function ProductGallery({product, selectedVariant}: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Get all product images, with selected variant image first
  const images = [
    ...(selectedVariant?.image ? [selectedVariant.image] : []),
    ...(product.selectedOrFirstAvailableVariant?.image ? [product.selectedOrFirstAvailableVariant.image] : [])
  ].filter(Boolean);

  const currentImage = images[selectedImageIndex];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsZoomed(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        <motion.div 
          ref={imageRef}
          className="aspect-square bg-secondary-50 rounded-2xl overflow-hidden cursor-zoom-in"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onClick={openLightbox}
        >
          {currentImage ? (
            <Image
              data={currentImage}
              className="w-full h-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-secondary-400">
                <MagnifyingGlassIcon className="w-16 h-16 mx-auto mb-4" />
                <p>No image available</p>
              </div>
            </div>
          )}
          
          {/* Zoom Icon Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
            >
              <MagnifyingGlassIcon className="w-6 h-6 text-secondary-700" />
            </motion.div>
          </div>

          {/* Navigation Arrows for Main Image */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
              >
                <ChevronLeftIcon className="w-5 h-5 text-secondary-700" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
              >
                <ChevronRightIcon className="w-5 h-5 text-secondary-700" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.slice(0, 8).map((image, index: number) => (
            <motion.div
              key={image.id}
              className={cn(
                'aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200',
                selectedImageIndex === index 
                  ? 'border-primary-500 ring-2 ring-primary-200' 
                  : 'border-secondary-200 hover:border-secondary-300'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                data={image}
                className="w-full h-full object-cover"
                sizes="(min-width: 1024px) 12vw, 25vw"
              />
            </motion.div>
          ))}
          
          {/* Show More Indicator */}
          {images.length > 8 && (
            <motion.div
              className="aspect-square rounded-lg bg-secondary-100 flex items-center justify-center cursor-pointer border-2 border-secondary-200 hover:border-secondary-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={openLightbox}
            >
              <div className="text-center text-secondary-600">
                <span className="text-sm font-medium">+{images.length - 8}</span>
                <p className="text-xs">more</p>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isZoomed ? 1.5 : 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full cursor-zoom-in"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              {currentImage && (
                <Image
                  data={currentImage}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  sizes="80vw"
                />
              )}
            </motion.div>

            {/* Lightbox Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Lightbox Thumbnail Strip */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/50 rounded-lg p-2 backdrop-blur-sm">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    className={cn(
                      'w-12 h-12 rounded-md overflow-hidden border-2 transition-all',
                      selectedImageIndex === index 
                        ? 'border-white' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    )}
                  >
                    <Image
                      data={image}
                      className="w-full h-full object-cover"
                      sizes="48px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Zoom Instruction */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
              {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
