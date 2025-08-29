import {motion} from 'framer-motion';
import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {
  HeartIcon,
  EyeIcon,
  ShoppingBagIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid';
import {Button} from '~/components/ui/Button';
import {Badge} from '~/components/ui/Badge';
import {Card} from '~/components/ui/Card';
import {cn, staggerContainer, staggerItem} from '~/lib/design-system';
import {useVariantUrl} from '~/lib/variants';
import type {
  ProductItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';

interface ProductRecommendationsProps {
  currentProductId?: string;
  title?: string;
  products?: Array<ProductItemFragment | RecommendedProductFragment>;
  loading?: boolean;
}

export function ProductRecommendations({
  currentProductId,
  title = "You may also like",
  products = [],
  loading = false,
}: ProductRecommendationsProps) {
  // Filter out current product and limit to 4 recommendations
  const recommendedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 4);

  if (loading) {
    return <RecommendationsLoading />;
  }

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={staggerItem}>
        <h2 className="text-2xl font-bold text-secondary-900 text-center">
          {title}
        </h2>
        <p className="text-secondary-600 text-center mt-2">
          Discover more products you might love
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
      >
        {recommendedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            variants={staggerItem}
            custom={index}
          >
            <ProductRecommendationCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

interface ProductRecommendationCardProps {
  product: ProductItemFragment | RecommendedProductFragment;
}

function ProductRecommendationCard({product}: ProductRecommendationCardProps) {
  const variantUrl = useVariantUrl(product.handle);
  const image = (product as any).featuredImage;
  const price = product.priceRange.minVariantPrice;
  const compareAtPrice = product.priceRange.maxVariantPrice;
  const isOnSale = compareAtPrice && compareAtPrice.amount > price.amount;
  
  // Mock data for enhanced features
  const rating = 4.2 + Math.random() * 0.8; // Random rating between 4.2-5.0
  const reviewCount = Math.floor(Math.random() * 200) + 10; // 10-210 reviews
  const discountPercentage = isOnSale 
    ? Math.round(((parseFloat(compareAtPrice.amount) - parseFloat(price.amount)) / parseFloat(compareAtPrice.amount)) * 100)
    : 0;

  return (
    <Card hover className="group overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <Link to={variantUrl} className="block">
          <div className="aspect-square bg-secondary-50 overflow-hidden">
            {image ? (
              <Image
                data={image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="w-full h-full bg-secondary-100 flex items-center justify-center">
                <ShoppingBagIcon className="w-12 h-12 text-secondary-400" />
              </div>
            )}
          </div>
        </Link>

        {/* Sale Badge */}
        {isOnSale && discountPercentage > 0 && (
          <div className="absolute top-3 left-3">
            <Badge variant="error" size="sm">
              -{discountPercentage}%
            </Badge>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            aria-label="Add to wishlist"
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-600 hover:text-error-600 hover:bg-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500/70"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeartIcon className="w-4 h-4" />
          </motion.button>
          <motion.button
            aria-label="Quick view"
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:bg-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500/70"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <EyeIcon className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            variant="primary"
            size="sm"
            fullWidth
            icon={<ShoppingBagIcon className="w-4 h-4" />}
            className="shadow-lg"
            aria-label="Quick add to cart"
          >
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand */}
        {'vendor' in product && product.vendor && (
          <Badge variant="outline" size="sm">
            {product.vendor}
          </Badge>
        )}

        {/* Product Title */}
        <Link to={variantUrl} className="block group-hover:text-primary-600 transition-colors">
          <h3 className="font-medium text-secondary-900 line-clamp-2 leading-snug">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < Math.floor(rating) ? 'text-warning-400 fill-current' : 'text-secondary-300'
                )}
              />
            ))}
          </div>
          <span className="text-sm text-secondary-600">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-secondary-900">
              <Money data={price} />
            </span>
            {isOnSale && compareAtPrice && (
              <span className="text-sm text-secondary-500 line-through">
                <Money data={compareAtPrice} />
              </span>
            )}
          </div>
          {isOnSale && (
            <p className="text-sm text-success-600 font-medium">
              Save {discountPercentage}%
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

function RecommendationsLoading() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="h-8 bg-secondary-200 rounded w-48 mx-auto animate-pulse mb-2" />
        <div className="h-5 bg-secondary-200 rounded w-64 mx-auto animate-pulse" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-square bg-secondary-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-secondary-200 rounded w-16 animate-pulse" />
              <div className="h-5 bg-secondary-200 rounded animate-pulse" />
              <div className="h-4 bg-secondary-200 rounded w-20 animate-pulse" />
              <div className="h-6 bg-secondary-200 rounded w-24 animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Enhanced version with carousel for mobile
export function ProductRecommendationsCarousel({
  currentProductId,
  title = "You may also like",
  products = [],
  loading = false,
}: ProductRecommendationsProps) {
  const recommendedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 8);

  if (loading) {
    return <RecommendationsLoading />;
  }

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={staggerItem}>
        <h2 className="text-2xl font-bold text-secondary-900 text-center">
          {title}
        </h2>
        <p className="text-secondary-600 text-center mt-2">
          Discover more products you might love
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <motion.div 
        className="hidden lg:grid lg:grid-cols-4 gap-6"
        variants={staggerContainer}
      >
        {recommendedProducts.slice(0, 4).map((product, index) => (
          <motion.div
            key={product.id}
            variants={staggerItem}
            custom={index}
          >
            <ProductRecommendationCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile/Tablet Carousel */}
      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 sm:w-72">
              <ProductRecommendationCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <motion.div 
        className="text-center"
        variants={staggerItem}
      >
        <Button 
          variant="outline" 
          size="lg"
          className="min-w-[200px]"
        >
          View All Products
        </Button>
      </motion.div>
    </motion.section>
  );
}
