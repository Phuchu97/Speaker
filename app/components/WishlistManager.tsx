import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  HeartIcon,
  ShoppingCartIcon,
  ShareIcon,
  EyeIcon,
  XMarkIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  GiftIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid';
import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {cn, staggerContainer, staggerItem, scaleIn, fadeIn} from '~/lib/design-system';
import type {ProductFragment} from 'storefrontapi.generated';

interface WishlistItem {
  id: string;
  product: ProductFragment;
  dateAdded: string;
  notifyOnSale: boolean;
  notes?: string;
}

interface WishlistManagerProps {
  className?: string;
}

export function WishlistManager({className}: WishlistManagerProps) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filter, setFilter] = useState('all');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Mock wishlist data
  useEffect(() => {
    const mockWishlist: WishlistItem[] = [
      {
        id: '1',
        product: {
          id: 'prod-1',
          title: 'Premium Wireless Headphones',
          handle: 'premium-headphones',
          vendor: 'AudioTech',
          featuredImage: {
            id: 'img-1',
            url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            altText: 'Premium Wireless Headphones',
            width: 400,
            height: 400,
          },
          priceRange: {
            minVariantPrice: {
              amount: '299.99',
              currencyCode: 'USD',
            },
          },
          compareAtPriceRange: {
            minVariantPrice: {
              amount: '399.99',
              currencyCode: 'USD',
            },
          },
          availableForSale: true,
          description: 'High-quality wireless headphones with noise cancellation',
        } as unknown as ProductFragment,
        dateAdded: '2024-01-15',
        notifyOnSale: true,
        notes: 'Waiting for sale',
      },
      {
        id: '2',
        product: {
          id: 'prod-2',
          title: 'Smart Fitness Tracker',
          handle: 'fitness-tracker',
          vendor: 'FitTech',
          featuredImage: {
            id: 'img-2',
            url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
            altText: 'Smart Fitness Tracker',
            width: 400,
            height: 400,
          },
          priceRange: {
            minVariantPrice: {
              amount: '199.99',
              currencyCode: 'USD',
            },
          },
          availableForSale: false,
          description: 'Advanced fitness tracking with heart rate monitoring',
        } as unknown as ProductFragment,
        dateAdded: '2024-01-10',
        notifyOnSale: false,
        notes: 'For birthday gift',
      },
      {
        id: '3',
        product: {
          id: 'prod-3',
          title: 'Minimalist Desk Lamp',
          handle: 'desk-lamp',
          vendor: 'DesignCo',
          featuredImage: {
            id: 'img-3',
            url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
            altText: 'Minimalist Desk Lamp',
            width: 400,
            height: 400,
          },
          priceRange: {
            minVariantPrice: {
              amount: '89.99',
              currencyCode: 'USD',
            },
          },
          availableForSale: true,
          description: 'Sleek LED desk lamp with adjustable brightness',
        } as unknown as ProductFragment,
        dateAdded: '2024-01-05',
        notifyOnSale: true,
      },
    ];
    setWishlistItems(mockWishlist);
  }, []);

  const filteredAndSortedItems = wishlistItems
    .filter(item => {
      switch (filter) {
        case 'available':
          return 'availableForSale' in item.product && item.product.availableForSale;
        case 'unavailable':
          return 'availableForSale' in item.product && !item.product.availableForSale;
        case 'sale':
          return 'compareAtPriceRange' in item.product && (item.product as any).compareAtPriceRange?.minVariantPrice;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return 'priceRange' in a.product && 'priceRange' in b.product ? 
            parseFloat((a.product as any).priceRange.minVariantPrice.amount) - 
            parseFloat((b.product as any).priceRange.minVariantPrice.amount) : 0;
        case 'price-high':
          return 'priceRange' in a.product && 'priceRange' in b.product ?
            parseFloat((b.product as any).priceRange.minVariantPrice.amount) - 
            parseFloat((a.product as any).priceRange.minVariantPrice.amount) : 0;
        case 'name':
          return a.product.title.localeCompare(b.product.title);
        case 'oldest':
          return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
        default:
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
    });

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
  };

  const toggleItemSelection = (itemId: string) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const removeSelectedItems = () => {
    setWishlistItems(prev => prev.filter(item => !selectedItems.has(item.id)));
    setSelectedItems(new Set());
  };

  const addAllToCart = () => {
    // Mock function - in real app would add to cart
    console.log('Adding all available items to cart');
  };

  const shareWishlist = () => {
    // Mock function - in real app would open share dialog
    console.log('Sharing wishlist');
  };

  const totalValue = filteredAndSortedItems.reduce(
    (sum, item) => sum + ('priceRange' in item.product ? parseFloat((item.product as any).priceRange.minVariantPrice.amount) : 0), 
    0
  );

  if (wishlistItems.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <motion.div
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8', className)}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div className="mb-8" variants={staggerItem}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900 flex items-center gap-3">
              <HeartIconSolid className="w-8 h-8 text-error-500" />
              My Wishlist
            </h1>
            <p className="text-secondary-600 mt-2">
              {filteredAndSortedItems.length} item(s) • Total value: ${totalValue.toFixed(2)}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<ShareIcon className="w-4 h-4" />}
              onClick={shareWishlist}
            >
              Share Wishlist
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<ShoppingCartIcon className="w-4 h-4" />}
              onClick={addAllToCart}
              disabled={filteredAndSortedItems.every(item => 'availableForSale' in item.product && !(item.product as any).availableForSale)}
            >
              Add All to Cart
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        variants={staggerContainer}
      >
        {[
          { 
            label: 'Total Items', 
            value: wishlistItems.length, 
            icon: <HeartIcon className="w-5 h-5" />,
            color: 'text-error-600 bg-error-50'
          },
          { 
            label: 'Available', 
            value: wishlistItems.filter(item => 'availableForSale' in item.product && (item.product as any).availableForSale).length,
            icon: <SparklesIcon className="w-5 h-5" />,
            color: 'text-success-600 bg-success-50'
          },
          { 
            label: 'On Sale', 
            value: wishlistItems.filter(item => 'compareAtPriceRange' in item.product && (item.product as any).compareAtPriceRange?.minVariantPrice).length,
            icon: <GiftIcon className="w-5 h-5" />,
            color: 'text-warning-600 bg-warning-50'
          },
          { 
            label: 'Total Value', 
            value: `$${totalValue.toFixed(2)}`,
            icon: <ShoppingCartIcon className="w-5 h-5" />,
            color: 'text-primary-600 bg-primary-50'
          },
        ].map((stat, index) => (
          <motion.div key={stat.label} variants={staggerItem} custom={index}>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className={cn('p-2 rounded-lg', stat.color)}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters & Controls */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
        variants={staggerItem}
      >
        <div className="flex items-center gap-4 flex-wrap">
          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="all">All Items ({wishlistItems.length})</option>
            <option value="available">Available ({wishlistItems.filter(item => 'availableForSale' in item.product && (item.product as any).availableForSale).length})</option>
            <option value="unavailable">Out of Stock ({wishlistItems.filter(item => 'availableForSale' in item.product && !(item.product as any).availableForSale).length})</option>
            <option value="sale">On Sale ({wishlistItems.filter(item => 'compareAtPriceRange' in item.product && (item.product as any).compareAtPriceRange?.minVariantPrice).length})</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="recent">Recently Added</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name A-Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {selectedItems.size > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={removeSelectedItems}
              className="text-error-600 border-error-300 hover:bg-error-50"
            >
              Remove Selected ({selectedItems.size})
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Layout Toggle */}
          <div className="flex items-center border border-secondary-300 rounded-lg p-1">
            <Button
              variant={layout === 'grid' ? 'primary' : 'ghost'}
              size="sm"
              icon={<Squares2X2Icon className="w-4 h-4" />}
              onClick={() => setLayout('grid')}
              className="h-8 px-3"
            >
              Grid
            </Button>
            <Button
              variant={layout === 'list' ? 'primary' : 'ghost'}
              size="sm"
              icon={<ListBulletIcon className="w-4 h-4" />}
              onClick={() => setLayout('list')}
              className="h-8 px-3"
            >
              List
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Wishlist Items */}
      <motion.div
        className={cn(
          'grid gap-6',
          layout === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        )}
        variants={staggerContainer}
      >
        <AnimatePresence>
          {filteredAndSortedItems.map((item, index) => (
            <WishlistItemCard
              key={item.id}
              item={item}
              layout={layout}
              isSelected={selectedItems.has(item.id)}
              onToggleSelection={() => toggleItemSelection(item.id)}
              onRemove={() => removeFromWishlist(item.id)}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredAndSortedItems.length === 0 && (
        <motion.div 
          className="text-center py-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <Card className="p-12 max-w-md mx-auto">
            <FunnelIcon className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              No items match your filter
            </h3>
            <p className="text-secondary-600 mb-6">
              Try adjusting your filter settings to see more items.
            </p>
            <Button
              variant="outline"
              onClick={() => setFilter('all')}
            >
              Show All Items
            </Button>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}

// Wishlist Item Card Component
interface WishlistItemCardProps {
  item: WishlistItem;
  layout: 'grid' | 'list';
  isSelected: boolean;
  onToggleSelection: () => void;
  onRemove: () => void;
  index: number;
}

function WishlistItemCard({
  item,
  layout,
  isSelected,
  onToggleSelection,
  onRemove,
  index,
}: WishlistItemCardProps) {
  const {product, dateAdded, notifyOnSale, notes} = item;
  const price = 'priceRange' in product ? (product as any).priceRange.minVariantPrice : null;
  const compareAtPrice = 'compareAtPriceRange' in product ? (product as any).compareAtPriceRange?.minVariantPrice : null;
  const isOnSale = compareAtPrice && price && parseFloat(compareAtPrice.amount) > parseFloat(price.amount);

  if (layout === 'list') {
    return (
      <motion.div
        variants={staggerItem}
        custom={index}
        layout
        className="group"
      >
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex gap-6">
            {/* Checkbox */}
            <div className="flex-shrink-0 pt-2">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={onToggleSelection}
                className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-secondary-100">
              {'featuredImage' in product && (product as any).featuredImage && (
                <Image
                  data={(product as any).featuredImage}
                  sizes="96px"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  {product.vendor && (
                    <Badge variant="outline" size="sm" className="mb-2">
                      {product.vendor}
                    </Badge>
                  )}
                  <Link to={`/products/${product.handle}`}>
                    <h3 className="text-lg font-semibold text-secondary-900 hover:text-primary-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                  </Link>
                  {notes && (
                    <p className="text-sm text-secondary-600 mt-1 italic">
                      Note: {notes}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<EyeIcon className="w-4 h-4" />}
                  >
                    <Link to={`/products/${product.handle}`}>
                      View
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<XMarkIcon className="w-4 h-4" />}
                    onClick={onRemove}
                    className="text-error-500 hover:text-error-600"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-secondary-900">
                      <Money data={price} />
                    </span>
                    {isOnSale && compareAtPrice && (
                      <span className="text-lg text-secondary-500 line-through">
                        <Money data={compareAtPrice} />
                      </span>
                    )}
                  </div>
                  
                  {isOnSale && (
                    <Badge variant="error" size="sm">
                      Sale
                    </Badge>
                  )}

                  {!('availableForSale' in product && (product as any).availableForSale) && (
                    <Badge variant="outline" size="sm" className="text-secondary-500">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-secondary-600">
                    Added {dateAdded}
                  </span>
                  
                  {('availableForSale' in product && (product as any).availableForSale) && (
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ShoppingCartIcon className="w-4 h-4" />}
                    >
                      Add to Cart
                    </Button>
                  )}
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
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary-100">
          {('featuredImage' in product && (product as any).featuredImage) && (
            <Image
              data={(product as any).featuredImage}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              icon={<EyeIcon className="w-4 h-4" />}
              className="bg-white/90 text-secondary-900 hover:bg-white"
            >
              <Link to={`/products/${product.handle}`}>
                View
              </Link>
            </Button>
            {('availableForSale' in product && (product as any).availableForSale) && (
              <Button
                variant="primary"
                size="sm"
                icon={<ShoppingCartIcon className="w-4 h-4" />}
                className="bg-primary-600/90 hover:bg-primary-700"
              >
                Add to Cart
              </Button>
            )}
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isOnSale && (
              <Badge variant="error" size="sm">
                Sale
              </Badge>
            )}
            {!('availableForSale' in product && (product as any).availableForSale) && (
              <Badge variant="outline" size="sm" className="bg-white/90">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Checkbox & Remove */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="bg-white/90 rounded p-1">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={onToggleSelection}
                className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              icon={<XMarkIcon className="w-4 h-4" />}
              onClick={onRemove}
              className="bg-white/90 text-error-500 hover:bg-white hover:text-error-600"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            {product.vendor && (
              <Badge variant="outline" size="sm" className="mb-2">
                {product.vendor}
              </Badge>
            )}
            <Link to={`/products/${product.handle}`}>
              <h3 className="font-semibold text-secondary-900 hover:text-primary-600 transition-colors line-clamp-2 group-hover:text-primary-600">
                {product.title}
              </h3>
            </Link>
            {notes && (
              <p className="text-sm text-secondary-600 mt-1 italic line-clamp-1">
                {notes}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg font-bold text-secondary-900">
              <Money data={price} />
            </span>
            {isOnSale && compareAtPrice && (
              <span className="text-sm text-secondary-500 line-through">
                <Money data={compareAtPrice} />
              </span>
            )}
          </div>

          {/* Date Added */}
          <div className="text-xs text-secondary-500">
            Added {dateAdded}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Empty Wishlist Component
function EmptyWishlist() {
  return (
    <motion.div 
      className="max-w-md mx-auto text-center py-16"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={staggerItem}>
        <HeartIcon className="w-24 h-24 text-secondary-300 mx-auto mb-6" />
      </motion.div>
      
      <motion.h2 
        className="text-2xl font-bold text-secondary-900 mb-4"
        variants={staggerItem}
      >
        Your wishlist is empty
      </motion.h2>
      
      <motion.p 
        className="text-secondary-600 mb-8"
        variants={staggerItem}
      >
        Save items you love to your wishlist and never lose track of them again.
      </motion.p>
      
      <motion.div variants={staggerItem}>
        <Button
          variant="primary"
          size="lg"
          icon={<SparklesIcon className="w-5 h-5" />}
        >
          <Link to="/collections">
            Start Shopping
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
