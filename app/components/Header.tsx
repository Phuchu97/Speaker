import {Suspense, useState, useEffect} from 'react';
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
  PhoneIcon,
  TruckIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {Badge} from '~/components/ui/Badge';
import {Button} from '~/components/ui/Button';
import {cn, fadeIn, slideDown} from '~/lib/design-system';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smart sticky header behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      // Add scrolled class for styling
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Trust Signals Bar */}
      <motion.div 
        className="bg-primary-600 text-white text-sm"
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center space-x-6 text-xs">
            <div className="flex items-center space-x-1">
              <TruckIcon className="h-3 w-3" />
              <span>Free Shipping on Orders $50+</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <ShieldCheckIcon className="h-3 w-3" />
              <span>Secure Checkout</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <PhoneIcon className="h-3 w-3" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={cn(
          "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-200 shadow-sm transition-all duration-300",
          isScrolled && "bg-white/98 shadow-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
                    className="h-8 w-auto group-hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <div className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {shop.name}
                  </div>
                )}
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <HeaderMenu
                menu={menu}
                viewport="desktop"
                primaryDomainUrl={header.shop.primaryDomain?.url}
                publicStoreDomain={publicStoreDomain}
              />
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const {close} = useAside();

  if (viewport === 'mobile') {
    return (
      <nav className="flex flex-col space-y-2 p-6" role="navigation">
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          className="block px-4 py-3 text-base font-medium text-secondary-900 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors"
          to="/"
        >
          Home
        </NavLink>
        
        {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
          if (!item.url) return null;

          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            (primaryDomainUrl && item.url.includes(primaryDomainUrl))
              ? new URL(item.url).pathname
              : item.url;
              
          return (
            <NavLink
              className={({isActive}) => 
                cn(
                  'block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                  isActive 
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-25'
                )
              }
              end
              key={item.id}
              onClick={close}
              prefetch="intent"
              to={url}
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-1" role="navigation">
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          (primaryDomainUrl && item.url.includes(primaryDomainUrl))
            ? new URL(item.url).pathname
            : item.url;
            
        return (
          <motion.div key={item.id} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <NavLink
              className={({isActive}) => 
                cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group',
                  isActive 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-25'
                )
              }
              end
              prefetch="intent"
              to={url}
            >
              {item.title}
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </motion.div>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <div className="flex items-center space-x-1">
      {/* Search Toggle */}
      <SearchToggle />
      
      {/* Account Link */}
      <NavLink 
        prefetch="intent" 
        to="/account" 
        className="hidden sm:flex items-center space-x-2 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors group"
      >
        <UserIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden lg:inline">
          <Suspense fallback="Account">
            <Await resolve={isLoggedIn} errorElement="Account">
              {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
            </Await>
          </Suspense>
        </span>
      </NavLink>
      
      {/* Cart Toggle */}
      <CartToggle cart={cart} />
      
      {/* Mobile Menu Toggle */}
      <HeaderMenuMobileToggle />
    </div>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <motion.button
      className="lg:hidden p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-25 transition-colors"
      onClick={() => open('mobile')}
      aria-label="Open mobile menu"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Bars3Icon className="w-6 h-6" />
    </motion.button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <motion.button 
      className="p-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors"
      onClick={() => open('search')}
      aria-label="Open search"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MagnifyingGlassIcon className="w-5 h-5" />
    </motion.button>
  );
}

function CartBadge({count}: {count: number | null}) {
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
      className="relative p-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors group"
      aria-label="Open cart"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingBagIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
      
      {/* Cart Badge */}
      <AnimatePresence>
        {count !== null && count > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-1 -right-1"
          >
            <Badge 
              variant="error" 
              size="sm"
              className="h-5 w-5 p-0 text-xs font-bold flex items-center justify-center rounded-full animate-pulse"
            >
              {count > 99 ? '99+' : count}
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};
