import {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence, PanInfo, useMotionValue, useTransform} from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import {Link, useLocation} from 'react-router';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {SearchBar} from './SearchBar';
import {cn, slideUp, staggerContainer, staggerItem} from '~/lib/design-system';

// Mobile Navigation Bottom Bar
export function MobileBottomNav() {
  const location = useLocation();
  const [cartCount] = useState(3); // Mock cart count

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: HomeIcon,
      href: '/',
      badge: null,
    },
    {
      id: 'search',
      label: 'Search',
      icon: MagnifyingGlassIcon,
      href: '/search',
      badge: null,
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: HeartIcon,
      href: '/account/wishlist',
      badge: null,
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: ShoppingBagIcon,
      href: '/cart',
      badge: cartCount > 0 ? cartCount : null,
    },
    {
      id: 'account',
      label: 'Account',
      icon: UserIcon,
      href: '/account',
      badge: null,
    },
  ];

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-secondary-200 z-40 lg:hidden"
      initial={{y: 100}}
      animate={{y: 0}}
      transition={{type: 'spring', damping: 25, stiffness: 300}}
    >
      <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors relative',
                isActive 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
              )}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                {item.badge && (
                  <Badge
                    variant="error"
                    size="sm"
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

// Swipeable Product Gallery for Mobile
interface SwipeableGalleryProps {
  images: Array<{
    id: string;
    url: string;
    altText?: string;
  }>;
  className?: string;
}

export function SwipeableGallery({images, className}: SwipeableGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -threshold && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={cn('relative overflow-hidden rounded-2xl', className)}>
      {/* Main Image */}
      <motion.div
        ref={containerRef}
        className="relative aspect-square bg-secondary-100"
        style={{x, opacity}}
        drag="x"
        dragConstraints={{left: 0, right: 0}}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        whileDrag={{cursor: 'grabbing'}}
      >
        <img
          src={images[currentIndex]?.url}
          alt={images[currentIndex]?.altText}
          className="w-full h-full object-cover"
        />
        
        {/* Drag Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1 bg-black/50 rounded-full px-3 py-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full opacity-50"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 bg-black/50 rounded-full px-3 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              )}
            />
          ))}
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4">
        <Badge variant="secondary" className="bg-black/50 text-white border-none">
          {currentIndex + 1} / {images.length}
        </Badge>
      </div>
    </div>
  );
}

// Pull-to-Refresh Component
interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export function PullToRefresh({onRefresh, children, className}: PullToRefreshProps) {
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const y = useMotionValue(0);
  const pullDistance = useTransform(y, [0, 100], [0, 50]);
  const pullOpacity = useTransform(y, [0, 100], [0, 1]);

  const handleDrag = (event: any, info: PanInfo) => {
    if (info.offset.y > 0 && window.scrollY === 0) {
      setIsPulling(true);
    }
  };

  const handleDragEnd = async (event: any, info: PanInfo) => {
    if (info.offset.y > 100 && window.scrollY === 0) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setIsPulling(false);
      }
    } else {
      setIsPulling(false);
    }
  };

  return (
    <motion.div
      className={cn('relative', className)}
      style={{y}}
      drag="y"
      dragConstraints={{top: 0, bottom: 0}}
      dragElastic={{top: 0.2, bottom: 0}}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      {/* Pull Indicator */}
      <AnimatePresence>
        {(isPulling || isRefreshing) && (
          <motion.div
            className="absolute top-0 left-0 right-0 flex items-center justify-center py-4 bg-primary-50 z-10"
            style={{y: pullDistance, opacity: pullOpacity}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            {isRefreshing ? (
              <div className="flex items-center gap-2 text-primary-600">
                <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-medium">Refreshing...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-primary-600">
                <ChevronDownIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Pull to refresh</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </motion.div>
  );
}

// Mobile Sticky Add to Cart
interface StickyAddToCartProps {
  product: {
    title: string;
    price: string;
    availableForSale: boolean;
  };
  onAddToCart: () => void;
  className?: string;
}

export function StickyAddToCart({product, onAddToCart, className}: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show when scrolled past 50% of viewport
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'fixed bottom-0 left-0 right-0 bg-white border-t border-secondary-200 p-4 z-30 lg:hidden',
            className
          )}
          initial={{y: 100}}
          animate={{y: 0}}
          exit={{y: 100}}
          transition={{type: 'spring', damping: 25, stiffness: 300}}
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="font-semibold text-secondary-900 line-clamp-1">
                {product.title}
              </div>
              <div className="text-lg font-bold text-primary-600">
                {product.price}
              </div>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              onClick={onAddToCart}
              disabled={!product.availableForSale}
              className="flex-shrink-0"
            >
              {product.availableForSale ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Mobile Filter Drawer
interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: React.ReactNode;
}

export function MobileFilterDrawer({isOpen, onClose, filters}: MobileFilterDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 max-h-[80vh] lg:hidden"
            initial={{y: '100%'}}
            animate={{y: 0}}
            exit={{y: '100%'}}
            transition={{type: 'spring', damping: 25, stiffness: 300}}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-secondary-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-200">
              <h2 className="text-lg font-semibold text-secondary-900">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                icon={<XMarkIcon className="w-5 h-5" />}
                onClick={onClose}
              />
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[60vh] p-6">
              {filters}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-secondary-200 bg-secondary-50">
              <div className="flex gap-3">
                <Button variant="outline" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button variant="primary" onClick={onClose} className="flex-1">
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Mobile Search Overlay
interface MobileSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSearchOverlay({isOpen, onClose}: MobileSearchOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 lg:hidden"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <div className="safe-area-top">
            {/* Header */}
            <div className="flex items-center gap-4 p-4 border-b border-secondary-200">
              <Button
                variant="ghost"
                size="sm"
                icon={<XMarkIcon className="w-5 h-5" />}
                onClick={onClose}
              />
              <div className="flex-1">
                <SearchBar 
                  variant="page" 
                  placeholder="Search products..." 
                  autoFocus 
                />
              </div>
            </div>

            {/* Search Results/Suggestions */}
            <div className="p-4">
              {/* This would contain search results or suggestions */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Headphones', 'Laptops', 'Smartphones', 'Cameras'].map((term) => (
                      <button
                        key={term}
                        className="px-3 py-2 bg-secondary-100 text-secondary-700 rounded-lg text-sm hover:bg-secondary-200 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Touch-friendly Button Grid
interface TouchButtonGridProps {
  items: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
    value: any;
    selected?: boolean;
  }>;
  onSelect: (value: any) => void;
  className?: string;
}

export function TouchButtonGrid({items, onSelect, className}: TouchButtonGridProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-3', className)}>
      {items.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => onSelect(item.value)}
          className={cn(
            'flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all text-center min-h-[60px]',
            item.selected
              ? 'border-primary-500 bg-primary-50 text-primary-700'
              : 'border-secondary-200 bg-white text-secondary-700 hover:border-primary-300'
          )}
          whileTap={{scale: 0.95}}
          transition={{duration: 0.1}}
        >
          {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
          <span className="font-medium text-sm">{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

// Safe Area Components for iOS
export function SafeAreaTop({children, className}: {children?: React.ReactNode; className?: string}) {
  return (
    <div className={cn('safe-area-top', className)}>
      {children}
    </div>
  );
}

export function SafeAreaBottom({children, className}: {children?: React.ReactNode; className?: string}) {
  return (
    <div className={cn('safe-area-bottom', className)}>
      {children}
    </div>
  );
}
