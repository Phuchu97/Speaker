import {useOptimisticCart} from '@shopify/hydrogen';
import {Link} from 'react-router';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ShoppingBagIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
  StarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {CartLineItem} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {cn, staggerContainer, staggerItem, fadeIn} from '~/lib/design-system';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

// Mock cross-sell products - in real app, this would come from API
const CROSS_SELL_PRODUCTS = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: '$89.99',
    image: '/placeholder-product.jpg',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    price: '$149.99',
    image: '/placeholder-product.jpg',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '3',
    title: 'Portable Bluetooth Speaker',
    price: '$59.99',
    image: '/placeholder-product.jpg',
    rating: 4.7,
    reviews: 156,
  },
];

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({layout, cart: originalCart}: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const cartHasItems = cart?.totalQuantity ? cart.totalQuantity > 0 : false;

  return (
    <motion.div 
      className="h-full flex flex-col bg-white"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Cart Header */}
      <motion.div 
        className="px-6 py-4 border-b border-secondary-200 bg-secondary-25"
        variants={staggerItem}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <ShoppingBagIcon className="w-5 h-5 text-primary-600" />
            </div>
            <h2 className="text-lg font-semibold text-secondary-900">
              Shopping Cart
            </h2>
          </div>
          {cartHasItems && (
            <Badge variant="primary" size="sm">
              {cart?.totalQuantity || 0} {cart?.totalQuantity === 1 ? 'item' : 'items'}
            </Badge>
          )}
        </div>
      </motion.div>

      {/* Cart Content */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {!linesCount ? (
            <motion.div
              key="empty"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CartEmpty layout={layout} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              className="px-6 py-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="space-y-4" variants={staggerContainer}>
                {(cart?.lines?.nodes ?? []).map((line, index) => (
                  <motion.div
                    key={line.id}
                    variants={staggerItem}
                    custom={index}
                  >
                    <CartLineItem line={line} layout={layout} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Cross-sell Section */}
              <motion.div 
                className="mt-8 pt-6 border-t border-secondary-200"
                variants={staggerItem}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    You might also like
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Customers who bought these items also purchased:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CROSS_SELL_PRODUCTS.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="group cursor-pointer"
                      variants={staggerItem}
                      custom={index}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-secondary-50 rounded-lg p-4 border border-secondary-200 hover:border-primary-300 transition-colors">
                        <div className="aspect-square bg-secondary-200 rounded-lg mb-3 group-hover:bg-secondary-300 transition-colors"></div>
                        <h4 className="font-medium text-secondary-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                          {product.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary-600">
                            {product.price}
                          </span>
                          <div className="flex items-center space-x-1">
                            <StarIcon className="w-4 h-4 text-warning-400 fill-current" />
                            <span className="text-xs text-secondary-600">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 group-hover:bg-primary-600 group-hover:text-white transition-colors"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Signals */}
              <motion.div 
                className="mt-6 pt-6 border-t border-secondary-200"
                variants={staggerItem}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-success-25 rounded-lg">
                    <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                      <TruckIcon className="w-4 h-4 text-success-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-success-800">Free Shipping</div>
                      <div className="text-xs text-success-600">On orders $50+</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-primary-25 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-800">Secure Checkout</div>
                      <div className="text-xs text-primary-600">SSL encrypted</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-warning-25 rounded-lg">
                    <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-warning-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-warning-800">30-Day Returns</div>
                      <div className="text-xs text-warning-600">No questions asked</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cart Summary */}
      <AnimatePresence>
        {cartHasItems && (
          <motion.div 
            className="border-t border-secondary-200 bg-secondary-25"
            variants={staggerItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <CartSummary cart={cart} layout={layout} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CartEmpty({
  layout,
}: {
  layout?: CartMainProps['layout'];
}) {
  const {close} = useAside();
  
  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
      variants={staggerContainer}
    >
      {/* Empty Cart Icon */}
      <motion.div 
        className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mb-6 relative overflow-hidden"
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
      >
        <ShoppingBagIcon className="w-12 h-12 text-secondary-400" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-purple-400/20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
      
      {/* Empty Cart Message */}
      <motion.h3 
        className="text-xl font-semibold text-secondary-900 mb-2"
        variants={staggerItem}
      >
        Your cart is empty
      </motion.h3>
      <motion.p 
        className="text-secondary-600 mb-8 max-w-sm leading-relaxed"
        variants={staggerItem}
      >
        Looks like you haven't added anything yet. Let's get you started with some amazing products!
      </motion.p>
      
      {/* Continue Shopping Button */}
      <motion.div variants={staggerItem}>
        <Button
          variant="primary"
          size="lg"
          icon={<ArrowRightIcon className="w-5 h-5" />}
          iconPosition="right"
          onClick={close}
          className="shadow-lg"
        >
          <Link to="/collections" prefetch="viewport">
            Continue Shopping
          </Link>
        </Button>
      </motion.div>

      {/* Popular Categories */}
      <motion.div 
        className="mt-12 w-full max-w-md"
        variants={staggerItem}
      >
        <h4 className="text-sm font-medium text-secondary-900 mb-4">
          Popular Categories
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Electronics', icon: SparklesIcon, color: 'primary' },
            { name: 'Fashion', icon: HeartIcon, color: 'error' },
            { name: 'Home & Garden', icon: CheckIcon, color: 'success' },
            { name: 'Sports', icon: StarIcon, color: 'warning' },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              className="flex items-center space-x-2 p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors cursor-pointer"
              variants={staggerItem}
              custom={index}
              whileHover={{ scale: 1.02 }}
            >
              <category.icon className={`w-4 h-4 text-${category.color}-600`} />
              <span className="text-sm font-medium text-secondary-700">
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Additional Benefits */}
      <motion.div 
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md w-full"
        variants={staggerContainer}
      >
        <motion.div 
          className="flex items-center gap-3 p-3 bg-success-25 rounded-lg"
          variants={staggerItem}
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
            <CheckIcon className="w-5 h-5 text-success-600" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-success-800">Free Shipping</div>
            <div className="text-xs text-success-600">On orders over $50</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-3 p-3 bg-primary-25 rounded-lg"
          variants={staggerItem}
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 text-primary-600" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-primary-800">Easy Returns</div>
            <div className="text-xs text-primary-600">30-day guarantee</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
