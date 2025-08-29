import {useState, useRef, useCallback} from 'react';
import {motion, AnimatePresence, PanInfo} from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  PlayIcon,
  PauseIcon,
  ArrowsPointingOutIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';
import {Image} from '@shopify/hydrogen';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {cn, scaleIn, slideUp} from '~/lib/design-system';
import type {ProductFragment} from 'storefrontapi.generated';

interface AdvancedProductGalleryProps {
  product: ProductFragment;
  className?: string;
}

interface MediaItem {
  id: string;
  type: 'image' | 'video' | '360' | 'external';
  url: string;
  altText?: string;
  preview?: string;
}

export function AdvancedProductGallery({product, className}: AdvancedProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({x: 0, y: 0});
  const [isPlaying, setIsPlaying] = useState(false);
  const [is360Mode, setIs360Mode] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Build media list from product.media and product.images
  const media: MediaItem[] = (() => {
    const collected: MediaItem[] = [];

    // Primary variant image first for LCP
    if (product.selectedOrFirstAvailableVariant?.image?.url) {
      const vImg = product.selectedOrFirstAvailableVariant.image;
      collected.push({
        id: vImg.id || 'variant-image',
        type: 'image',
        url: vImg.url,
        altText: vImg.altText || product.title,
        preview: vImg.url,
      });
    } else if ((product as any).featuredImage?.url) {
      const fImg = (product as any).featuredImage;
      collected.push({
        id: fImg.id || 'featured-image',
        type: 'image',
        url: fImg.url,
        altText: fImg.altText || product.title,
        preview: fImg.url,
      });
    }

    // Product gallery images
    const images = (product as any).images?.nodes || [];
    for (const img of images) {
      if (!img?.url) continue;
      if (collected.find((m) => m.url === img.url)) continue;
      collected.push({
        id: img.id || img.url,
        type: 'image',
        url: img.url,
        altText: img.altText || product.title,
        preview: img.url,
      });
    }

    // Product media (video, external video, 3D models)
    const mediaNodes = (product as any).media?.nodes || [];
    for (const node of mediaNodes) {
      const type = node?.mediaContentType as string | undefined;
      if (!type) continue;
      if (type === 'VIDEO' && node?.sources?.[0]?.url) {
        collected.push({
          id: node.id || node.sources[0].url,
          type: 'video',
          url: node.sources[0].url,
          altText: `${product.title} - Video`,
          preview: node?.previewImage?.url || collected[0]?.preview,
        });
      } else if (type === 'EXTERNAL_VIDEO' && node?.embeddedUrl) {
        collected.push({
          id: node.id || node.embeddedUrl,
          type: 'external',
          url: node.embeddedUrl,
          altText: `${product.title} - Video`,
          preview: node?.previewImage?.url || collected[0]?.preview,
        });
      } else if (type === 'MODEL_3D') {
        const preview = node?.previewImage?.url || collected[0]?.preview;
        if (preview) {
          collected.push({
            id: node.id || preview,
            type: '360',
            url: preview,
            altText: `${product.title} - 360° View`,
            preview,
          });
        }
      } else if (type === 'IMAGE' && node?.image?.url) {
        if (!collected.find((m) => m.url === node.image.url)) {
          collected.push({
            id: node.image.id || node.image.url,
            type: 'image',
            url: node.image.url,
            altText: node.image.altText || product.title,
            preview: node.image.url,
          });
        }
      }
    }

    return collected;
  })();

  const currentMedia = media[currentIndex];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsZoomed(false);
  }, [media.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsZoomed(false);
  }, [media.length]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isZoomed || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({x, y});
  }, [isZoomed]);

  const handleDrag = useCallback((event: any, info: PanInfo) => {
    if (currentMedia.type === '360') {
      const newRotation = rotation + (info.delta.x * 0.5);
      setRotation(newRotation);
    }
  }, [currentMedia.type, rotation]);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const openLightbox = () => {
    setShowLightbox(true);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Main Gallery */}
      <div className="relative">
        {/* Main Image/Video Container */}
        <motion.div 
          ref={galleryRef}
          className="relative aspect-square bg-secondary-100 rounded-2xl overflow-hidden group cursor-zoom-in"
          whileHover={{ scale: isZoomed ? 1 : 1.02 }}
          transition={{ duration: 0.3 }}
          onClick={toggleZoom}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomed(false)}
        >
          {currentMedia.type === 'image' && (
            <motion.div
              className="relative w-full h-full"
              animate={{
                scale: isZoomed ? 2 : 1,
                x: isZoomed ? `${-zoomPosition.x + 50}%` : '0%',
                y: isZoomed ? `${-zoomPosition.y + 50}%` : '0%',
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                ref={imageRef}
                src={currentMedia.url}
                alt={currentMedia.altText}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          )}

          {currentMedia.type === 'video' && (
            <div className="relative w-full h-full">
              <video
                src={currentMedia.url}
                className="w-full h-full object-cover"
                autoPlay={isPlaying}
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="lg"
                  icon={isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  className="bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                />
              </div>
            </div>
          )}

          {currentMedia.type === '360' && (
            <motion.div
              className="relative w-full h-full cursor-grab active:cursor-grabbing"
              drag="x"
              onDrag={handleDrag}
              whileDrag={{ cursor: 'grabbing' }}
            >
              <motion.img
                src={currentMedia.url}
                alt={currentMedia.altText}
                className="w-full h-full object-cover"
                style={{
                  transform: `rotateY(${rotation}deg)`,
                }}
              />
              <div className="absolute top-4 left-4">
                <Badge variant="primary" icon={<CameraIcon className="w-4 h-4" />}>
                  360° View - Drag to rotate
                </Badge>
              </div>
            </motion.div>
          )}

          {currentMedia.type === 'external' && (
            <div className="relative w-full h-full">
              <iframe
                src={currentMedia.url}
                title={currentMedia.altText || `${product.title} - Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {/* Media Type Badges */}
          <div className="absolute top-4 right-4 flex gap-2">
            {currentMedia.type === 'video' && (
              <Badge variant="secondary" className="bg-black/70 text-white">
                Video
              </Badge>
            )}
            {currentMedia.type === '360' && (
              <Badge variant="primary">
                360°
              </Badge>
            )}
          </div>

          {/* Gallery Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              icon={<ChevronLeftIcon className="w-5 h-5" />}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="ml-4 bg-white/80 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              icon={<ChevronRightIcon className="w-5 h-5" />}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="mr-4 bg-white/80 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Zoom & Fullscreen Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              icon={<MagnifyingGlassIcon className="w-4 h-4" />}
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom();
              }}
              className="bg-white/80 backdrop-blur-sm shadow-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              icon={<ArrowsPointingOutIcon className="w-4 h-4" />}
              onClick={(e) => {
                e.stopPropagation();
                openLightbox();
              }}
              className="bg-white/80 backdrop-blur-sm shadow-lg"
            />
          </div>

          {/* Media Counter */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Badge variant="secondary" className="bg-black/70 text-white">
              {currentIndex + 1} / {media.length}
            </Badge>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div 
          className="flex gap-3 mt-4 overflow-x-auto pb-2"
          variants={slideUp}
        >
          {media.map((item, index) => (
            <motion.button
              key={item.id}
              className={cn(
                'relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                currentIndex === index 
                  ? 'border-primary-600 ring-2 ring-primary-200' 
                  : 'border-secondary-300 hover:border-primary-400'
              )}
              onClick={() => setCurrentIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setCurrentIndex(index);
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  setCurrentIndex((prev) => (prev + 1) % media.length);
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
                }
              }}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={item.altText || `${product.title} media ${index + 1}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.preview}
                alt={item.altText}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Media Type Indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                {item.type === 'video' && (
                  <PlayIcon className="w-6 h-6 text-white drop-shadow-lg" />
                )}
                {item.type === '360' && (
                  <div className="text-white text-xs font-bold drop-shadow-lg">360°</div>
                )}
                {item.type === 'external' && (
                  <PlayIcon className="w-6 h-6 text-white drop-shadow-lg" />
                )}
              </div>

              {/* Active Indicator */}
              {currentIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-primary-600/20"
                  layoutId="activeThumb"
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLightbox(false)}
          >
            <div className="relative max-w-7xl max-h-full p-4">
              <motion.img
                src={currentMedia.url}
                alt={currentMedia.altText}
                className="max-w-full max-h-full object-contain"
                variants={scaleIn}
                initial="initial"
                animate="animate"
                exit="exit"
              />

              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                icon={<XMarkIcon className="w-6 h-6" />}
                onClick={() => setShowLightbox(false)}
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
              />

              {/* Navigation */}
              <Button
                variant="ghost"
                size="sm"
                icon={<ChevronLeftIcon className="w-6 h-6" />}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              />

              <Button
                variant="ghost"
                size="sm"
                icon={<ChevronRightIcon className="w-6 h-6" />}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
