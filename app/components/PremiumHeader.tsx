import {Suspense, useState} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {motion, AnimatePresence} from 'framer-motion';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {Badge} from '~/components/ui/Badge';
import {Button} from '~/components/ui/Button';
import {SearchBar, QuickSearchModal} from './SearchBar';
import {MegaMenu} from './MegaMenu';
import {TrustSignals} from './TrustSignals';
import {cn, fadeIn, slideDown} from '~/lib/design-system';

interface PremiumHeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

export function PremiumHeader({header, cart, isLoggedIn, publicStoreDomain}: PremiumHeaderProps) {
  const {shop, menu} = header;
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      {/* Top Bar - Announcements & Trust Signals */}
      <motion.div
        className="bg-primary-600 text-white py-2 relative overflow-hidden"
        initial={{y: -50}}
        animate={{y: 0}}
        transition={{duration: 0.3}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-4 h-4" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span>24/7 Support: (555) 123-4567</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                <span>Free delivery worldwide</span>
              </div>
              <Badge variant="secondary" size="sm" className="bg-white/20 text-white border-white/30">
                Sale: Up to 50% Off
              </Badge>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1 -right-1 w-20 h-20 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-secondary-200 shadow-sm"
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.3, delay: 0.1}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{scale: 1.05}}
              transition={{duration: 0.2}}
            >
              <NavLink
                prefetch="intent"
                to="/"
                className="flex items-center space-x-3 group"
              >
                {shop.brand?.logo?.image?.url ? (
                  <img
                    src={shop.brand.logo.image.url}
                    alt={shop.name}
                    className="h-8 lg:h-10 w-auto group-hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-purple-700 transition-all">
                    {shop.name}
                  </div>
                )}
              </NavLink>
            </motion.div>

            {/* Desktop Search - Center */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <SearchBar variant="header" placeholder="Search for products..." />
            </div>

            {/* Desktop Navigation & Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Wishlist */}
              <Button
                variant="ghost"
                size="sm"
                icon={<HeartIcon className="w-5 h-5" />}
                className="text-secondary-700 hover:text-primary-600"
              >
                <span className="hidden xl:inline">Wishlist</span>
              </Button>

              {/* Account */}
              <NavLink
                prefetch="intent"
                to="/account"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all"
              >
                <UserIcon className="w-5 h-5" />
                <span className="hidden xl:inline">
                  <Suspense fallback="Account">
                    <Await resolve={isLoggedIn} errorElement="Account">
                      {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
                    </Await>
                  </Suspense>
                </span>
              </NavLink>

              {/* Cart */}
              <CartToggle cart={cart} />
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                icon={<MagnifyingGlassIcon className="w-5 h-5" />}
                onClick={() => setShowMobileSearch(true)}
                className="text-secondary-700"
              />
              <CartToggle cart={cart} />
              <HeaderMenuMobileToggle />
            </div>
          </div>

          {/* Desktop Mega Menu */}
          <div className="hidden lg:block">
            <MegaMenu menu={menu} />
          </div>
        </div>
      </motion.header>

      {/* Mobile Search Modal */}
      <QuickSearchModal
        isOpen={showMobileSearch}
        onClose={() => setShowMobileSearch(false)}
      />
    </>
  );
}

// Cart Toggle Component
function CartToggle({cart}: {cart: Promise<CartApiQueryFragment | null>}) {
  const {open} = useAside();
  const {publish, shop, cart: analyticsCart, prevCart} = useAnalytics();

  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          const count = cart.totalQuantity || 0;
          return <CartBadge count={count} />;
        }}
      </Await>
    </Suspense>
  );
}

function CartBadge({count}: {count: number}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <motion.button
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
      className="relative p-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all"
      aria-label="Open cart"
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
    >
      <ShoppingBagIcon className="w-6 h-6" />

      {/* Cart Badge */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0, opacity: 0}}
            className="absolute -top-1 -right-1"
          >
            <Badge
              variant="error"
              size="sm"
              className="h-5 w-5 p-0 text-xs font-bold flex items-center justify-center rounded-full shadow-lg"
            >
              {count > 99 ? '99+' : count}
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <motion.button
      className="p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-25 transition-all"
      onClick={() => open('mobile')}
      aria-label="Open mobile menu"
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
    >
      <Bars3Icon className="w-6 h-6" />
    </motion.button>
  );
}
