import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ScaleIcon,
  XMarkIcon,
  CheckIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {Button} from './ui/Button';
import {Card} from './ui/Card';
import {Badge} from './ui/Badge';
import {cn, fadeIn, staggerContainer, staggerItem} from '~/lib/design-system';

interface ProductComparisonProps {
  currentProduct: {
    id: string;
    title: string;
    price: string;
    rating: number;
    image?: string;
  };
}

export function ProductComparison({currentProduct}: ProductComparisonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mock comparison products - in real app this would come from API
  const comparisonProducts = [
    {
      id: '2',
      title: 'Premium Wireless Speaker Pro',
      price: '$199.99',
      rating: 4.8,
      image: '/placeholder-product.jpg',
      features: {
        'Battery Life': '20 hours',
        'Water Resistance': 'IPX7',
        'Bluetooth Version': '5.2',
        'Charging': 'USB-C + Wireless',
        'Voice Assistant': 'Yes',
        'Multi-room': 'Yes',
      }
    },
    {
      id: '3',
      title: 'Budget Wireless Speaker',
      price: '$79.99',
      rating: 4.2,
      image: '/placeholder-product.jpg',
      features: {
        'Battery Life': '12 hours',
        'Water Resistance': 'IPX5',
        'Bluetooth Version': '5.0',
        'Charging': 'USB-C',
        'Voice Assistant': 'No',
        'Multi-room': 'No',
      }
    }
  ];

  // Mock features for current product
  const currentProductFeatures = {
    'Battery Life': '15 hours',
    'Water Resistance': 'IPX6',
    'Bluetooth Version': '5.1',
    'Charging': 'USB-C',
    'Voice Assistant': 'Yes',
    'Multi-room': 'No',
  };

  const allProducts = [
    {
      ...currentProduct,
      features: currentProductFeatures,
    },
    ...comparisonProducts
  ];

  const featureKeys = Object.keys(currentProductFeatures);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        icon={<ScaleIcon className="w-4 h-4" />}
        onClick={() => setIsOpen(true)}
      >
        Compare
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.9, opacity: 0}}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-900">Product Comparison</h2>
                    <p className="text-secondary-600 mt-1">Compare features and specifications</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<XMarkIcon className="w-5 h-5" />}
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="p-6">
                    <motion.div
                      className="overflow-x-auto"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      <table className="w-full border-collapse min-w-[600px] lg:min-w-0">
                        {/* Product Header */}
                        <thead>
                          <tr>
                            <th className="text-left p-4 w-48 font-semibold text-secondary-900"></th>
                            {allProducts.map((product, index) => (
                              <motion.th
                                key={product.id}
                                className="text-center p-4 min-w-[200px] lg:min-w-0"
                                variants={staggerItem}
                              >
                                <Card className={cn(
                                  'relative overflow-hidden',
                                  index === 0 && 'ring-2 ring-primary-500 bg-primary-25'
                                )}>
                                  {index === 0 && (
                                    <div className="absolute top-2 right-2">
                                      <Badge variant="primary" size="sm">Current</Badge>
                                    </div>
                                  )}
                                  <div className="p-4">
                                    <div className="w-16 h-16 bg-secondary-200 rounded-lg mx-auto mb-3"></div>
                                    <h3 className="font-semibold text-secondary-900 text-sm mb-2 line-clamp-2">
                                      {product.title}
                                    </h3>
                                    <div className="text-lg font-bold text-primary-600 mb-2">
                                      {product.price}
                                    </div>
                                    <div className="flex items-center justify-center gap-1">
                                      <StarIcon className="w-4 h-4 text-warning-400 fill-current" />
                                      <span className="text-sm text-secondary-600">{product.rating}</span>
                                    </div>
                                  </div>
                                </Card>
                              </motion.th>
                            ))}
                          </tr>
                        </thead>

                        {/* Features Comparison */}
                        <tbody>
                          {featureKeys.map((feature, featureIndex) => (
                            <motion.tr
                              key={feature}
                              className="border-t border-secondary-200"
                              variants={staggerItem}
                            >
                              <td className="p-4 font-medium text-secondary-900 bg-secondary-25">
                                {feature}
                              </td>
                              {allProducts.map((product, productIndex) => {
                                const featureValue = product.features[feature as keyof typeof product.features];
                                const isCurrentProduct = productIndex === 0;
                                
                                return (
                                  <td
                                    key={`${product.id}-${feature}`}
                                    className={cn(
                                      'p-4 text-center',
                                      isCurrentProduct && 'bg-primary-25'
                                    )}
                                  >
                                    <div className="flex items-center justify-center gap-2">
                                      {featureValue === 'Yes' ? (
                                        <CheckIcon className="w-4 h-4 text-success-500" />
                                      ) : featureValue === 'No' ? (
                                        <XMarkIcon className="w-4 h-4 text-error-500" />
                                      ) : null}
                                      <span className="text-sm text-secondary-700">
                                        {featureValue}
                                      </span>
                                    </div>
                                  </td>
                                );
                              })}
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="mt-8 flex flex-col sm:flex-row gap-4"
                      variants={staggerItem}
                    >
                      <Button variant="primary" size="lg" fullWidth>
                        Add Current to Cart
                      </Button>
                      <Button variant="outline" size="lg" fullWidth>
                        View All Alternatives
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
