import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  LockClosedIcon,
  TruckIcon,
  CreditCardIcon,
  MapPinIcon,
  UserIcon,
  ShieldCheckIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {Input} from './ui/Input';
import {cn, slideUp, staggerContainer, staggerItem, scaleIn} from '~/lib/design-system';

interface CheckoutStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface MultiStepCheckoutProps {
  cart: any;
  className?: string;
}

export function MultiStepCheckout({cart, className}: MultiStepCheckoutProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const steps: CheckoutStep[] = [
    {
      id: 'shipping',
      title: 'Shipping',
      icon: <TruckIcon className="w-5 h-5" />,
      completed: completedSteps.has(0),
    },
    {
      id: 'payment',
      title: 'Payment',
      icon: <CreditCardIcon className="w-5 h-5" />,
      completed: completedSteps.has(1),
    },
    {
      id: 'review',
      title: 'Review',
      icon: <CheckIcon className="w-5 h-5" />,
      completed: completedSteps.has(2),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex <= currentStep || completedSteps.has(stepIndex - 1)) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div className={cn('max-w-6xl mx-auto', className)}>
      {/* Progress Header */}
      <motion.div 
        className="mb-8"
        variants={slideUp}
        initial="initial"
        animate="animate"
      >
        <Card className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                {/* Step */}
                <button
                  onClick={() => goToStep(index)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
                    currentStep === index
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
                      : step.completed
                      ? 'bg-success-100 text-success-700 hover:bg-success-200 cursor-pointer'
                      : 'text-secondary-500 cursor-not-allowed'
                  )}
                  disabled={index > currentStep && !completedSteps.has(index - 1)}
                >
                  <div className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-full',
                    currentStep === index
                      ? 'bg-primary-600 text-white'
                      : step.completed
                      ? 'bg-success-600 text-white'
                      : 'bg-secondary-300 text-secondary-600'
                  )}>
                    {step.completed ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs opacity-75">
                      {currentStep === index ? 'Current' : step.completed ? 'Completed' : 'Pending'}
                    </div>
                  </div>
                </button>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className={cn(
                    'w-16 h-0.5 mx-4',
                    completedSteps.has(index) ? 'bg-success-300' : 'bg-secondary-300'
                  )} />
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <ShippingStep key="shipping" onNext={nextStep} />
            )}
            {currentStep === 1 && (
              <PaymentStep key="payment" onNext={nextStep} onBack={prevStep} />
            )}
            {currentStep === 2 && (
              <ReviewStep key="review" onBack={prevStep} cart={cart} />
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}

// Shipping Step Component
function ShippingStep({onNext}: {onNext: () => void}) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'US',
    postalCode: '',
    phone: '',
  });

  const [shippingMethod, setShippingMethod] = useState('standard');

  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: '5-7 business days',
      price: 0,
      icon: <TruckIcon className="w-5 h-5" />,
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: '2-3 business days',
      price: 9.99,
      icon: <TruckIcon className="w-5 h-5" />,
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      description: 'Next business day',
      price: 24.99,
      icon: <TruckIcon className="w-5 h-5" />,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Card className="p-6 space-y-6">
        <motion.div variants={staggerItem}>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2 flex items-center gap-2">
            <UserIcon className="w-6 h-6 text-primary-600" />
            Contact Information
          </h2>
        </motion.div>

        <motion.div className="space-y-4" variants={staggerItem}>
          <Input
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="john@example.com"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="John"
              required
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Doe"
              required
            />
          </div>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-primary-600" />
            Shipping Address
          </h3>

          <div className="space-y-4">
            <Input
              label="Address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="123 Main Street"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="City"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                placeholder="New York"
                required
              />
              <Input
                label="Postal Code"
                value={formData.postalCode}
                onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                placeholder="10001"
                required
              />
            </div>

            <Input
              type="tel"
              label="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
            <TruckIcon className="w-5 h-5 text-primary-600" />
            Shipping Method
          </h3>

          <div className="space-y-3">
            {shippingOptions.map((option) => (
              <label
                key={option.id}
                className={cn(
                  'flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all',
                  shippingMethod === option.id
                    ? 'border-primary-300 bg-primary-25'
                    : 'border-secondary-200 hover:border-primary-200'
                )}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value={option.id}
                    checked={shippingMethod === option.id}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <div className="flex items-center gap-3">
                    {option.icon}
                    <div>
                      <div className="font-medium text-secondary-900">{option.name}</div>
                      <div className="text-sm text-secondary-600">{option.description}</div>
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-secondary-900">
                  {option.price === 0 ? 'FREE' : `$${option.price}`}
                </div>
              </label>
            ))}
          </div>
        </motion.div>

        <motion.div className="flex justify-end pt-6" variants={staggerItem}>
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
            icon={<ChevronRightIcon className="w-5 h-5" />}
            iconPosition="right"
          >
            Continue to Payment
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}

// Payment Step Component
function PaymentStep({onNext, onBack}: {onNext: () => void; onBack: () => void}) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit Card',
      icon: <CreditCardIcon className="w-5 h-5" />,
      description: 'Visa, Mastercard, American Express',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">P</div>,
      description: 'Pay with your PayPal account',
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      icon: <div className="w-5 h-5 bg-black rounded text-white text-xs flex items-center justify-center font-bold">A</div>,
      description: 'Touch ID or Face ID',
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Card className="p-6 space-y-6">
        <motion.div variants={staggerItem}>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2 flex items-center gap-2">
            <CreditCardIcon className="w-6 h-6 text-primary-600" />
            Payment Information
          </h2>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Payment Method</h3>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={cn(
                  'flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all',
                  paymentMethod === method.id
                    ? 'border-primary-300 bg-primary-25'
                    : 'border-secondary-200 hover:border-primary-200'
                )}
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <div className="flex items-center gap-3 flex-1">
                  {method.icon}
                  <div>
                    <div className="font-medium text-secondary-900">{method.name}</div>
                    <div className="text-sm text-secondary-600">{method.description}</div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </motion.div>

        {paymentMethod === 'card' && (
          <motion.div 
            className="space-y-4"
            variants={staggerItem}
            initial="initial"
            animate="animate"
          >
            <Input
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              required
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                placeholder="MM/YY"
                required
              />
              <Input
                label="CVV"
                placeholder="123"
                required
              />
            </div>
            
            <Input
              label="Cardholder Name"
              placeholder="John Doe"
              required
            />
          </motion.div>
        )}

        <motion.div variants={staggerItem}>
          <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
            <ShieldCheckIcon className="w-6 h-6 text-success-600" />
            <div>
              <div className="font-medium text-secondary-900">Your payment is secure</div>
              <div className="text-sm text-secondary-600">
                All transactions are encrypted and processed securely
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex justify-between pt-6" variants={staggerItem}>
          <Button
            variant="outline"
            size="lg"
            onClick={onBack}
            icon={<ChevronLeftIcon className="w-5 h-5" />}
          >
            Back to Shipping
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
            icon={<ChevronRightIcon className="w-5 h-5" />}
            iconPosition="right"
          >
            Review Order
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}

// Review Step Component
function ReviewStep({onBack, cart}: {onBack: () => void; cart: any}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Card className="p-6 space-y-6">
        <motion.div variants={staggerItem}>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2 flex items-center gap-2">
            <CheckIcon className="w-6 h-6 text-primary-600" />
            Review Your Order
          </h2>
        </motion.div>

        <motion.div variants={staggerItem}>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-success-25 border border-success-200 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-success-600" />
                <span className="font-medium text-success-900">Order ready for placement</span>
              </div>
              <Badge variant="success">All details verified</Badge>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex justify-between pt-6" variants={staggerItem}>
          <Button
            variant="outline"
            size="lg"
            onClick={onBack}
            icon={<ChevronLeftIcon className="w-5 h-5" />}
          >
            Back to Payment
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-700 hover:to-primary-700"
            icon={<LockClosedIcon className="w-5 h-5" />}
          >
            Place Order
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}

// Order Summary Component
function OrderSummary({cart}: {cart: any}) {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
    >
      <Card className="p-6 sticky top-6">
        <h3 className="text-xl font-semibold text-secondary-900 mb-6 flex items-center gap-2">
          <GiftIcon className="w-5 h-5 text-primary-600" />
          Order Summary
        </h3>
        
        <div className="space-y-4 mb-6">
          {/* Mock cart items */}
          <div className="flex items-center gap-3 p-3 border border-secondary-200 rounded-lg">
            <div className="w-12 h-12 bg-secondary-200 rounded-lg"></div>
            <div className="flex-1">
              <div className="font-medium text-secondary-900">Product Name</div>
              <div className="text-sm text-secondary-600">Qty: 1</div>
            </div>
            <div className="font-semibold">$99.00</div>
          </div>
        </div>

        <div className="space-y-3 py-4 border-t border-secondary-200">
          <div className="flex justify-between">
            <span className="text-secondary-600">Subtotal</span>
            <span className="font-medium">$99.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary-600">Shipping</span>
            <span className="font-medium">FREE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary-600">Tax</span>
            <span className="font-medium">$7.92</span>
          </div>
          <div className="border-t border-secondary-200 pt-3">
            <div className="flex justify-between">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-xl text-primary-600">$106.92</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-secondary-200">
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <LockClosedIcon className="w-4 h-4" />
            <span>SSL Encrypted Checkout</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <TruckIcon className="w-4 h-4" />
            <span>Free returns within 30 days</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>2-year warranty included</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
