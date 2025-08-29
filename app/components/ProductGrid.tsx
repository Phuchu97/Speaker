import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  HeartIcon,
  EyeIcon,
  ShoppingBagIcon,
  ScaleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid';
import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
// import {QuickViewButton} from './ProductQuickView';
import {cn, staggerContainer, staggerItem, scaleIn} from '~/lib/design-system';
import type {ProductItemFragment, RecommendedProductFragment} from 'storefrontapi.generated';

interface ProductGridProps {
  products: Array<ProductItemFragment | RecommendedProductFragment>;
  title?: string;
  description?: string;
  showFilters?: boolean;
  layout?: 'grid' | 'list';
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function ProductGrid({
  products,
  title,
  description,
  showFilters = false,
  layout = 'grid',
  columns = 4,
  className,
}: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [currentLayout, setCurrentLayout] = useState(layout);
  const [sortBy, setSortBy] = useState('featured');

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount);
      case 'price-high':
        return parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount);
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const gridColumns = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  };

  return (
    <section className={cn('py-16', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || description) && (
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
          >
            {title && (
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4"
                variants={staggerItem}
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                className="text-lg text-secondary-600 max-w-2xl mx-auto"
                variants={staggerItem}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Filters & Controls */}
        {showFilters && (
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-secondary-600">
                Showing {sortedProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>

              {/* Layout Toggle */}
              <div className="flex items-center border border-secondary-300 rounded-lg p-1">
                <Button
                  variant={currentLayout === 'grid' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentLayout('grid')}
                  className="h-8 px-3"
                >
                  Grid
                </Button>
                <Button
                  variant={currentLayout === 'list' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentLayout('list')}
                  className="h-8 px-3"
                >
                  List
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        <motion.div
          className={cn(
            'grid gap-6',
            currentLayout === 'grid' ? gridColumns[columns] : 'grid-cols-1'
          )}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{once: true, margin: "-100px"}}
        >
          <AnimatePresence>
            {sortedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isHovered={hoveredProduct === product.id}
                onHover={setHoveredProduct}
                isInWishlist={wishlist.has(product.id)}
                onToggleWishlist={toggleWishlist}
                layout={currentLayout}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// Individual Product Card Component
interface ProductCardProps {
  product: ProductItemFragment | RecommendedProductFragment;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  isInWishlist: boolean;
  onToggleWishlist: (id: string) => void;
  layout: 'grid' | 'list';
}

function ProductCard({
  product,
  index,
  isHovered,
  onHover,
  isInWishlist,
  onToggleWishlist,
  layout,
}: ProductCardProps) {
  const price = product.priceRange.minVariantPrice;
  const isOnSale = false;
  const primaryImage = (product as any).featuredImage;
  const hoverImage = primaryImage;

  const discountPercentage = 0;

    console.log(product);

  if (layout === 'list') {
    return (
      <motion.div
        variants={staggerItem}
        custom={index}
        layout
        onMouseEnter={() => onHover(product.id)}
        onMouseLeave={() => onHover(null)}
        className="group"
      >
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="flex gap-6 p-6">
            {/* Image */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <Link to={`/products/${product.handle}`}>
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  {primaryImage && (
                    <Image
                      data={primaryImage}
                      sizes="192px"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
              </Link>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                {'vendor' in product && product.vendor && (
                  <Badge variant="outline" size="sm" className="mb-2">
                    {product.vendor}
                  </Badge>
                )}
                <Link to={`/products/${product.handle}`}>
                  <h3 className="text-xl font-semibold text-secondary-900 hover:text-primary-600 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                </Link>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
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
                <span className="text-sm text-secondary-600">(4.0)</span>
              </div>

              {/* Description */}
              {/* Description hidden for mixed fragments */}

              {/* Price & Actions */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-secondary-900">
                      <Money data={price} />
                    </span>
                    {/* On-sale block removed for union types */}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={isInWishlist ? <HeartIconSolid className="w-4 h-4" /> : <HeartIcon className="w-4 h-4" />}
                    onClick={() => onToggleWishlist(product.id)}
                    className={isInWishlist ? 'text-red-500' : 'text-secondary-500'}
                  />
                  {/* QuickView disabled for union types */}
                  <Button variant="primary" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      custom={index}
      layout
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
      className="group"
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary-100">
          <Link to={`/products/${product.handle}`}>
            <div className="relative w-full h-full">
              {/* Primary Image */}
              {primaryImage && (
                <Image
                  data={primaryImage}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500",
                    isHovered && hoverImage !== primaryImage ? "opacity-0" : "opacity-100"
                  )}
                />
              )}

              {/* Hover Image */}
              {hoverImage && hoverImage !== primaryImage && (
                <Image
                  data={hoverImage}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                />
              )}
            </div>
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {false && (
              <Badge variant="error" size="sm">
                Sale -{discountPercentage}%
              </Badge>
            )}
            {'vendor' in product && (product as RecommendedProductFragment).vendor && (
              <Badge variant="outline" size="sm" className="bg-white/90">
                {(product as RecommendedProductFragment).vendor}
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-3 right-3 flex flex-col gap-2"
                variants={scaleIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  icon={isInWishlist ? <HeartIconSolid className="w-4 h-4" /> : <HeartIcon className="w-4 h-4" />}
                  onClick={() => onToggleWishlist(product.id)}
                  className={cn(
                    'bg-white/90 backdrop-blur-sm shadow-lg',
                    isInWishlist ? 'text-red-500 hover:text-red-600' : 'text-secondary-600 hover:text-red-500'
                  )}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<ScaleIcon className="w-4 h-4" />}
                  className="bg-white/90 backdrop-blur-sm shadow-lg text-secondary-600 hover:text-primary-600"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Add to Cart */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-3 left-3 right-3"
                variants={scaleIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  icon={<ShoppingBagIcon className="w-4 h-4" />}
                  className="bg-primary-600/90 backdrop-blur-sm shadow-lg hover:bg-primary-700"
                >
                  Quick Add
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <Link to={`/products/${product.handle}`}>
              <h3 className="font-semibold text-secondary-900 hover:text-primary-600 transition-colors line-clamp-2 group-hover:text-primary-600">
                {product.title}
              </h3>
            </Link>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
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
            <span className="text-sm text-secondary-600">(4.0)</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg font-bold text-secondary-900">
                <Money data={price} />
              </span>
              {/* On-sale block removed for union types */}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
