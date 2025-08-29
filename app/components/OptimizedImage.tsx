import {useState, useRef, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Image as ShopifyImage} from '@shopify/hydrogen';
import {cn, fadeIn, scaleIn, staggerItem} from '~/lib/design-system';

interface OptimizedImageProps {
  data?: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
  src?: string;
  alt?: string;
  className?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  aspectRatio?: 'square' | '16/9' | '4/3' | '3/2' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty' | 'shimmer';
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  enableZoom?: boolean;
  enableLazyLoad?: boolean;
  quality?: number;
}

export function OptimizedImage({
  data,
  src,
  alt,
  className,
  sizes = '(min-width: 768px) 50vw, 100vw',
  loading = 'lazy',
  priority = false,
  aspectRatio = 'auto',
  objectFit = 'cover',
  placeholder = 'shimmer',
  fallback,
  onLoad,
  onError,
  enableZoom = false,
  enableLazyLoad = true,
  quality = 80,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!enableLazyLoad || priority);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const imageUrl = data?.url || src;
  const imageAlt = data?.altText || alt || '';

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableLazyLoad || priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [enableLazyLoad, priority, isInView]);

  // Generate WebP and AVIF URLs for better compression
  const generateOptimizedUrl = (url: string, format: 'webp' | 'avif' | 'original' = 'original') => {
    if (!url) return '';
    
    // For Shopify CDN URLs, add format and quality parameters
    if (url.includes('cdn.shopify.com')) {
      const urlObj = new URL(url);
      if (format !== 'original') {
        urlObj.searchParams.set('format', format);
      }
      urlObj.searchParams.set('quality', quality.toString());
      return urlObj.toString();
    }
    
    return url;
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setIsError(true);
    onError?.();
  };

  const aspectRatioClasses = {
    square: 'aspect-square',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    auto: '',
  };

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  };

  if (!imageUrl) {
    return <ImagePlaceholder className={className} aspectRatio={aspectRatio} />;
  }

  return (
    <div
      ref={imageRef}
      className={cn(
        'relative overflow-hidden bg-secondary-100',
        aspectRatioClasses[aspectRatio],
        enableZoom && 'cursor-zoom-in',
        className
      )}
      onClick={() => enableZoom && setIsZoomed(!isZoomed)}
    >
      {/* Loading Placeholder */}
      <AnimatePresence>
        {!isLoaded && !isError && (
          <motion.div
            className="absolute inset-0"
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
          >
            {placeholder === 'shimmer' && <ShimmerPlaceholder />}
            {placeholder === 'blur' && <BlurPlaceholder />}
            {placeholder === 'empty' && <div className="w-full h-full bg-secondary-200" />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Fallback */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-100">
          {fallback ? (
            <img
              src={fallback}
              alt={imageAlt}
              className={cn('w-full h-full', objectFitClasses[objectFit])}
            />
          ) : (
            <div className="text-center text-secondary-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-secondary-300 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">Image unavailable</p>
            </div>
          )}
        </div>
      )}

      {/* Optimized Image */}
      {isInView && (
        <picture>
          {/* AVIF format for modern browsers */}
          <source
            srcSet={generateOptimizedUrl(imageUrl, 'avif')}
            type="image/avif"
          />
          {/* WebP format fallback */}
          <source
            srcSet={generateOptimizedUrl(imageUrl, 'webp')}
            type="image/webp"
          />
          {/* Original format fallback */}
          {data ? (
            <ShopifyImage
              data={data}
              sizes={sizes}
              loading={priority ? 'eager' : 'lazy'}
              className={cn(
                'w-full h-full transition-all duration-500',
                objectFitClasses[objectFit],
                isLoaded ? 'opacity-100' : 'opacity-0',
                isZoomed && 'scale-150 cursor-zoom-out'
              )}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <img
              src={generateOptimizedUrl(imageUrl)}
              alt={imageAlt}
              sizes={sizes}
              loading={priority ? 'eager' : 'lazy'}
              className={cn(
                'w-full h-full transition-all duration-500',
                objectFitClasses[objectFit],
                isLoaded ? 'opacity-100' : 'opacity-0',
                isZoomed && 'scale-150 cursor-zoom-out'
              )}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </picture>
      )}

      {/* Zoom Indicator */}
      {enableZoom && isLoaded && (
        <motion.div
          className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity"
          variants={fadeIn}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}

// Shimmer Loading Placeholder
function ShimmerPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-secondary-200 via-secondary-300 to-secondary-200 animate-shimmer bg-[length:200%_100%]" />
  );
}

// Blur Loading Placeholder
function BlurPlaceholder() {
  return (
    <div className="w-full h-full bg-secondary-200 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-200 opacity-50 blur-sm" />
    </div>
  );
}

// Image Placeholder for missing images
function ImagePlaceholder({
  className,
  aspectRatio = 'auto',
}: {
  className?: string;
  aspectRatio?: string;
}) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    auto: 'min-h-[200px]',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center bg-secondary-100 border-2 border-dashed border-secondary-300',
        aspectRatioClasses[aspectRatio as keyof typeof aspectRatioClasses],
        className
      )}
    >
      <div className="text-center text-secondary-500">
        <div className="w-16 h-16 mx-auto mb-2 bg-secondary-300 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-sm font-medium">No image</p>
      </div>
    </div>
  );
}

// Progressive Image Gallery Component
interface ProgressiveGalleryProps {
  images: Array<{
    id: string;
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  }>;
  className?: string;
}

export function ProgressiveGallery({images, className}: ProgressiveGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Main Image */}
      <div className="aspect-square">
        <OptimizedImage
          data={images[currentIndex]}
          priority={currentIndex === 0}
          enableZoom
          onLoad={() => handleImageLoad(images[currentIndex].id)}
          className="rounded-2xl"
        />
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
              currentIndex === index
                ? 'border-primary-500 ring-2 ring-primary-200'
                : 'border-secondary-300 hover:border-primary-400'
            )}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
          >
            <OptimizedImage
              data={image}
              sizes="80px"
              loading={index < 3 ? 'eager' : 'lazy'}
              className="w-full h-full"
              placeholder="shimmer"
              onLoad={() => handleImageLoad(image.id)}
            />
            
            {/* Loading Indicator */}
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary-200">
                <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Image Grid with Masonry Layout
interface ImageGridProps {
  images: Array<{
    id: string;
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  }>;
  columns?: number;
  gap?: number;
  className?: string;
}

export function ImageGrid({
  images,
  columns = 3,
  gap = 4,
  className,
}: ImageGridProps) {
  return (
    <div
      className={cn(
        'grid auto-rows-max',
        `grid-cols-${columns}`,
        `gap-${gap}`,
        className
      )}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={staggerItem}
          custom={index}
          initial="initial"
          animate="animate"
          className="break-inside-avoid"
        >
          <OptimizedImage
            data={image}
            loading={index < 6 ? 'eager' : 'lazy'}
            className="rounded-lg w-full"
            aspectRatio="auto"
            enableZoom
          />
        </motion.div>
      ))}
    </div>
  );
}
