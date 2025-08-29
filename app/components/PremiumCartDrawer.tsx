import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  XMarkIcon,
  ShoppingBagIcon,
  GiftIcon,
  TruckIcon,
  LockClosedIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import {
  CartForm,
  Image,
  Money,
  useOptimisticCart,
} from '@shopify/hydrogen';
import {Link} from 'react-router';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {Input} from './ui/Input';
import {cn, slideUp, staggerContainer, staggerItem, scaleIn} from '~/lib/design-system';
import type {CartApiQueryFragment} from 'storefrontapi.generated';

interface PremiumCartDrawerProps {
  cart: CartApiQueryFragment | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PremiumCartDrawer({cart, isOpen, onClose}: PremiumCartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [showUpsells, setShowUpsells] = useState(true);
  
  const optimisticCart = useOptimisticCart(cart);
  const lineItems = optimisticCart?.lines?.nodes || [];
  const totalQuantity = optimisticCart?.totalQuantity || 0;
  const subtotal = optimisticCart?.cost?.subtotalAmount;
  const total = optimisticCart?.cost?.totalAmount;
  const discountTotal = optimisticCart?.cost?.totalDutyAmount;

  // Calculate progress to free shipping
  const freeShippingThreshold = 75;
  const currentAmount = subtotal?.amount ? parseFloat(subtotal.amount) : 0;
  const freeShippingProgress = Math.min((currentAmount / freeShippingThreshold) * 100, 100);
  const amountToFreeShipping = Math.max(freeShippingThreshold - currentAmount, 0);

  // Mock upsell products
  const upsellProducts = [
    {
      id: 'upsell-1',
      title: 'Premium Gift Wrap',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop',
      description: 'Beautiful gift wrapping with ribbon',
    },
    {
      id: 'upsell-2',
      title: 'Extended Warranty',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop',
      description: '2 years additional protection',
    },
    {
      id: 'upsell-3',
      title: 'Express Shipping',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop',
      description: 'Get it tomorrow',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const applyPromoCode = () => {
    // Mock promo code application
    setIsPromoApplied(true);
    setPromoCode('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
          />

          {/* Cart Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{type: 'spring', damping: 25, stiffness: 300}}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary-200">
              <div className="flex items-center gap-3">
                <ShoppingBagIcon className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-semibold text-secondary-900">
                  Shopping Cart
                </h2>
                {totalQuantity > 0 && (
                  <Badge variant="primary" size="sm">
                    {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                  </Badge>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<XMarkIcon className="w-5 h-5" />}
                onClick={onClose}
              />
            </div>

            {/* Free Shipping Progress */}
            {currentAmount < freeShippingThreshold && (
              <motion.div 
                className="p-4 bg-primary-25 border-b border-primary-100"
                variants={slideUp}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TruckIcon className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-900">
                    ${amountToFreeShipping.toFixed(2)} away from FREE shipping!
                  </span>
                </div>
                <div className="w-full bg-primary-200 rounded-full h-2">
                  <motion.div
                    className="bg-primary-600 h-2 rounded-full"
                    initial={{width: 0}}
                    animate={{width: `${freeShippingProgress}%`}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                  />
                </div>
              </motion.div>
            )}

            {totalQuantity === 0 ? (
              <EmptyCart onClose={onClose} />
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto">
                  <motion.div 
                    className="p-4 space-y-4"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {lineItems.map((line, index) => (
                      <motion.div
                        key={line.id}
                        variants={staggerItem}
                        custom={index}
                      >
                        <CartLineItem line={line} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Upsells */}
                  {showUpsells && (
                    <motion.div 
                      className="p-4 border-t border-secondary-200"
                      variants={slideUp}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                          <SparklesIcon className="w-5 h-5 text-primary-600" />
                          Complete Your Order
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowUpsells(false)}
                          className="text-secondary-500"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {upsellProducts.slice(0, 2).map((product, index) => (
                          <motion.div
                            key={product.id}
                            variants={staggerItem}
                            custom={index}
                          >
                            <UpsellItem product={product} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Promo Code */}
                  <motion.div 
                    className="p-4 border-t border-secondary-200"
                    variants={slideUp}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <GiftIcon className="w-5 h-5 text-primary-600" />
                        <span className="font-medium text-secondary-900">Promo Code</span>
                      </div>
                      
                      {!isPromoApplied ? (
                        <div className="flex gap-2">
                          <Input
                            type="text"
                            placeholder="Enter code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            inputSize="sm"
                            className="flex-1"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={applyPromoCode}
                            disabled={!promoCode}
                          >
                            Apply
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-success-25 border border-success-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-4 h-4 text-success-600" />
                            <span className="text-sm font-medium text-success-900">
                              SAVE10 Applied
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-success-600">
                            -$5.00
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Footer */}
                <motion.div 
                  className="border-t border-secondary-200 p-4 space-y-4 bg-secondary-50"
                  variants={slideUp}
                >
                  {/* Order Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Subtotal</span>
                      <span className="font-medium">
                        {subtotal && <Money data={subtotal} />}
                      </span>
                    </div>
                    
                    {isPromoApplied && (
                      <div className="flex justify-between text-sm">
                        <span className="text-success-600">Discount (SAVE10)</span>
                        <span className="font-medium text-success-600">-$5.00</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Shipping</span>
                      <span className="font-medium">
                        {currentAmount >= freeShippingThreshold ? 'FREE' : 'Calculated at checkout'}
                      </span>
                    </div>
                    
                    <div className="border-t border-secondary-300 pt-2">
                      <div className="flex justify-between">
                        <span className="font-semibold text-secondary-900">Total</span>
                        <span className="font-bold text-lg text-secondary-900">
                          {total && <Money data={total} />}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 py-2">
                    <div className="flex items-center gap-1 text-xs text-secondary-600">
                      <LockClosedIcon className="w-3 h-3" />
                      <span>Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-secondary-600">
                      <TruckIcon className="w-3 h-3" />
                      <span>Free Returns</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <CartForm route="/cart" action={CartForm.ACTIONS.LinesUpdate}>
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 shadow-lg"
                    >
                      <Link to="/checkout" className="flex items-center justify-center gap-2">
                        <LockClosedIcon className="w-5 h-5" />
                        Secure Checkout
                      </Link>
                    </Button>
                  </CartForm>

                  <div className="text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="text-secondary-600"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Cart Line Item Component
function CartLineItem({line}: {line: any}) {
  const {merchandise, quantity} = line;
  const {product, selectedOptions} = merchandise;

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-secondary-100">
          {merchandise.image && (
            <Image
              data={merchandise.image}
              className="w-full h-full object-cover"
              sizes="80px"
            />
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-secondary-900 line-clamp-2">
                {product.title}
              </h4>
              {selectedOptions.map((option: any) => (
                <p key={option.name} className="text-sm text-secondary-600">
                  {option.name}: {option.value}
                </p>
              ))}
            </div>
            
            <CartForm
              route="/cart"
              action={CartForm.ACTIONS.LinesRemove}
              inputs={{lineIds: [line.id]}}
            >
              <Button
                variant="ghost"
                size="sm"
                icon={<TrashIcon className="w-4 h-4" />}
                className="text-error-500 hover:text-error-600 flex-shrink-0"
              />
            </CartForm>
          </div>

          {/* Quantity & Price */}
          <div className="flex items-center justify-between mt-3">
            <CartForm
              route="/cart"
              action={CartForm.ACTIONS.LinesUpdate}
              inputs={{
                lines: [
                  {
                    id: line.id,
                    quantity: quantity - 1,
                  },
                ],
              }}
            >
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<MinusIcon className="w-3 h-3" />}
                  disabled={quantity <= 1}
                  className="h-8 w-8 p-0"
                />
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesUpdate}
                  inputs={{
                    lines: [
                      {
                        id: line.id,
                        quantity: quantity + 1,
                      },
                    ],
                  }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<PlusIcon className="w-3 h-3" />}
                    className="h-8 w-8 p-0"
                  />
                </CartForm>
              </div>
            </CartForm>

            <div className="text-right">
              <div className="font-semibold text-secondary-900">
                <Money data={line.cost.totalAmount} />
              </div>
              {quantity > 1 && (
                <div className="text-xs text-secondary-600">
                  <Money data={line.cost.amountPerQuantity} /> each
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Upsell Item Component
function UpsellItem({product}: {product: any}) {
  return (
    <motion.div
      className="flex items-center gap-3 p-3 border border-secondary-200 rounded-lg hover:border-primary-300 transition-colors"
      whileHover={{scale: 1.02}}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-secondary-900 text-sm line-clamp-1">
          {product.title}
        </h4>
        <p className="text-xs text-secondary-600 line-clamp-1">
          {product.description}
        </p>
        <div className="font-semibold text-primary-600 text-sm">
          ${product.price}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        className="flex-shrink-0"
      >
        Add
      </Button>
    </motion.div>
  );
}

// Empty Cart Component
function EmptyCart({onClose}: {onClose: () => void}) {
  return (
    <motion.div 
      className="flex-1 flex flex-col items-center justify-center p-8 text-center"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={staggerItem}>
        <ShoppingBagIcon className="w-24 h-24 text-secondary-300 mx-auto mb-6" />
      </motion.div>
      
      <motion.h3 
        className="text-xl font-semibold text-secondary-900 mb-2"
        variants={staggerItem}
      >
        Your cart is empty
      </motion.h3>
      
      <motion.p 
        className="text-secondary-600 mb-8 max-w-sm"
        variants={staggerItem}
      >
        Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
      </motion.p>
      
      <motion.div className="space-y-4 w-full" variants={staggerItem}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onClose}
        >
          <Link to="/collections">
            Start Shopping
          </Link>
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" size="sm" fullWidth>
            <Link to="/collections/new" className="flex items-center gap-2">
              <SparklesIcon className="w-4 h-4" />
              New Arrivals
            </Link>
          </Button>
          <Button variant="outline" size="sm" fullWidth>
            <Link to="/collections/sale" className="flex items-center gap-2">
              <HeartIcon className="w-4 h-4" />
              Best Sellers
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
