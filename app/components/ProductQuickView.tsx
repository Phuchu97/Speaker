import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  XMarkIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {cn, fadeIn} from '~/lib/design-system';
import type {ProductFragment} from 'storefrontapi.generated';

interface ProductQuickViewProps {
  product: ProductFragment;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductQuickView({product, isOpen, onClose}: ProductQuickViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = product.selectedOrFirstAvailableVariant?.image ? [product.selectedOrFirstAvailableVariant.image] : [];
  const selectedVariant = product.selectedOrFirstAvailableVariant;
  const price = selectedVariant?.price;
  const compareAtPrice = selectedVariant?.compareAtPrice;
  const isOnSale = compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(price?.amount || '0');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{scale: 0.9, opacity: 0, y: 20}}
              animate={{scale: 1, opacity: 1, y: 0}}
              exit={{scale: 0.9, opacity: 0, y: 20}}
              transition={{type: "spring", duration: 0.3}}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-secondary-200">
                <div className="flex items-center gap-2">
                  <EyeIcon className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm font-medium text-secondary-900">Quick View</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<XMarkIcon className="w-5 h-5" />}
                  onClick={onClose}
                />
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[calc(90vh-60px)] overflow-y-auto">
                {/* Images */}
                <div className="p-6 bg-secondary-25">
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm">
                      {images.length > 0 ? (
                        <Image
                          data={images[selectedImageIndex]}
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary-200 flex items-center justify-center">
                          <span className="text-secondary-500">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Images */}
                    {images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {images.map((image, index) => (
                          <button
                            key={image.id}
                            className={cn(
                              'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all',
                              index === selectedImageIndex
                                ? 'border-primary-600 ring-2 ring-primary-200'
                                : 'border-secondary-200 hover:border-primary-400'
                            )}
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <Image
                              data={image}
                              sizes="64px"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-6">
                  {/* Title & Rating */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {product.vendor && (
                        <Badge variant="outline" size="sm">
                          {product.vendor}
                        </Badge>
                      )}
                      {isOnSale && (
                        <Badge variant="error" size="sm">Sale</Badge>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-secondary-900 mb-3 line-clamp-2">
                      {product.title}
                    </h2>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={cn(
                              'w-4 h-4',
                              i < 4 ? 'text-warning-400 fill-current' : 'text-secondary-300'
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-secondary-600">(4.0) • 128 reviews</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {price && (
                        <span className="text-2xl font-bold text-secondary-900">
                          <Money data={price} />
                        </span>
                      )}
                      {isOnSale && compareAtPrice && (
                        <span className="text-lg text-secondary-500 line-through">
                          <Money data={compareAtPrice} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {product.description && (
                    <div>
                      <p className="text-secondary-700 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  )}

                  {/* Key Features */}
                  <Card padding="md" className="bg-primary-25">
                    <h4 className="font-semibold text-secondary-900 mb-2">Key Features</h4>
                    <ul className="text-sm text-secondary-700 space-y-1">
                      <li>• Premium materials and construction</li>
                      <li>• Easy to use and maintain</li>
                      <li>• Perfect for daily use</li>
                      <li>• Comes with warranty</li>
                    </ul>
                  </Card>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link
                      to={`/products/${product.handle}`}
                      onClick={onClose}
                    >
                      <Button variant="primary" size="lg" fullWidth>
                        View Full Details
                      </Button>
                    </Link>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="lg"
                        icon={<HeartIcon className="w-5 h-5" />}
                        className="flex-1"
                      >
                        Add to Wishlist
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        icon={<ShareIcon className="w-5 h-5" />}
                        className="flex-1"
                      >
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Trust Elements */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-secondary-200">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-success-700">✓ Free Shipping</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-primary-700">✓ 30-Day Returns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-warning-700">✓ 24/7 Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Quick View Button Component
interface QuickViewButtonProps {
  product: ProductFragment;
  className?: string;
}

export function QuickViewButton({product, className}: QuickViewButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        icon={<EyeIcon className="w-4 h-4" />}
        onClick={() => setIsOpen(true)}
        className={className}
      >
        Quick View
      </Button>
      
      <ProductQuickView
        product={product}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
