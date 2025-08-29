import {motion} from 'framer-motion';
import {
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  InformationCircleIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  BoltIcon,
  GiftIcon,
  CreditCardIcon,
  CheckCircleIcon,
  FireIcon,
  EyeIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import {HeartIcon, ShareIcon, CheckBadgeIcon} from '@heroicons/react/24/solid';
import {Money, type MappedProductOptions} from '@shopify/hydrogen';
import {Button} from '~/components/ui/Button';
import {AddToCartButton} from '~/components/AddToCartButton';
import {Badge} from '~/components/ui/Badge';
import {Card} from '~/components/ui/Card';
import {Accordion} from '~/components/ui/Accordion';
import {SizeGuide} from './SizeGuide';
import {ProductComparison} from './ProductComparison';

import {cn, fadeIn, slideUp} from '~/lib/design-system';
import {useLocation, useNavigate} from 'react-router';
import {getVariantUrl} from '~/lib/variants';
import type {ProductFragment} from 'storefrontapi.generated';

interface ProductInfoProps {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
  productOptions: MappedProductOptions[];
}

export function ProductInfo({product, selectedVariant, productOptions}: ProductInfoProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const {title, vendor, descriptionHtml} = product;
  const price = selectedVariant?.price;
  const compareAtPrice = selectedVariant?.compareAtPrice;
  const isOnSale = compareAtPrice && price && parseFloat(compareAtPrice.amount) > parseFloat(price.amount);
  const isAvailable = selectedVariant?.availableForSale ?? false;

  // Calculate discount percentage
  const discountPercentage = isOnSale && price && compareAtPrice
    ? Math.round(((parseFloat(compareAtPrice.amount) - parseFloat(price.amount)) / parseFloat(compareAtPrice.amount)) * 100)
    : 0;

  // Trust badges data
  const trustBadges = [
    {
      icon: <TruckIcon className="w-5 h-5" />,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: <ShieldCheckIcon className="w-5 h-5" />,
      title: '30-Day Returns',
      description: 'Money-back guarantee',
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      title: '24/7 Support',
      description: 'Customer care available',
    },
  ];

  // Accordion sections
  const accordionItems = [
    {
      id: 'description',
      title: 'Product Description',
      icon: <DocumentTextIcon className="w-5 h-5" />,
      content: (
        <div 
          className="prose prose-secondary max-w-none"
          dangerouslySetInnerHTML={{__html: descriptionHtml || 'No description available.'}}
        />
      ),
    },
    {
      id: 'specifications',
      title: 'Specifications',
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-secondary-900">Brand:</span>
              <span className="ml-2 text-secondary-600">{vendor || 'N/A'}</span>
            </div>
            <div>
              <span className="font-medium text-secondary-900">SKU:</span>
              <span className="ml-2 text-secondary-600">{selectedVariant?.sku || 'N/A'}</span>
            </div>
            <div>
              <span className="font-medium text-secondary-900">Weight:</span>
              <span className="ml-2 text-secondary-600">N/A</span>
            </div>
            <div>
              <span className="font-medium text-secondary-900">Availability:</span>
              <span className={cn('ml-2 font-medium', isAvailable ? 'text-success-600' : 'text-error-600')}>
                {isAvailable ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
          {selectedVariant?.selectedOptions && selectedVariant.selectedOptions.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-secondary-900 mb-2">Selected Options:</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedVariant.selectedOptions.map((option) => (
                  <div key={option.name} className="flex justify-between">
                    <span className="text-secondary-600">{option.name}:</span>
                    <span className="text-secondary-900 font-medium">{option.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      icon: <TruckIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-secondary-900 mb-2">Shipping Information</h4>
            <ul className="space-y-1 text-secondary-600">
              <li>• Free standard shipping on orders over $50</li>
              <li>• Express shipping available for $9.99</li>
              <li>• Orders placed before 2 PM ship the same day</li>
              <li>• Delivery time: 3-7 business days</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-900 mb-2">Return Policy</h4>
            <ul className="space-y-1 text-secondary-600">
              <li>• 30-day return window from delivery date</li>
              <li>• Items must be unused and in original packaging</li>
              <li>• Free returns for defective or damaged items</li>
              <li>• Refund processed within 5-7 business days</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div 
      className="space-y-6"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >

      {/* Product Title */}
      <motion.h1 
        className="text-3xl lg:text-4xl font-bold text-secondary-900 leading-tight"
        variants={slideUp}
      >
        {title}
      </motion.h1>

       {/* Price */}
       <motion.div 
        className="space-y-2"
        variants={slideUp}
      >
        <div className="flex items-center gap-3">
          {price && (
            <span className="text-3xl font-bold text-secondary-900">
              <Money data={price} />
            </span>
          )}
          {isOnSale && compareAtPrice && (
            <>
              <span className="text-xl text-secondary-500 line-through">
                <Money data={compareAtPrice} />
              </span>
              <Badge variant="error" size="sm">
                Save {discountPercentage}%
              </Badge>
            </>
          )}
        </div>
        
        {/* Stock Status */}
        <div className="flex items-center gap-2">
          <div className={cn(
            'w-3 h-3 rounded-full',
            isAvailable ? 'bg-success-500' : 'bg-error-500'
          )} />
        </div>
      </motion.div>



      {/* Rating (placeholder for now) */}
      <motion.div 
        className="flex items-center gap-3"
        variants={slideUp}
      >
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                'w-5 h-5',
                i < 4 ? 'text-warning-400 fill-current' : 'text-secondary-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-secondary-600">(4.0) • 128 reviews</span>
      </motion.div>


           

      {/* Urgency & Social Proof */}
      <motion.div variants={slideUp} className="space-y-3">
        <div className="p-3 bg-warning-25 border border-warning-200 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-warning-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-warning-800">
              🔥 23 people are viewing this product right now
            </span>
          </div>
        </div>
      </motion.div>

      {/* Product Stats */}
      <motion.div variants={slideUp}>
        <Card padding="lg" className="bg-gradient-to-r from-primary-25 to-secondary-25">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <EyeIcon className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-xl font-bold text-secondary-900">1,247</span>
              </div>
              <p className="text-sm text-secondary-600">Views today</p>
            </div>
            <div className="text-center border-x border-secondary-200">
              <div className="flex items-center justify-center mb-2">
                <UserGroupIcon className="w-5 h-5 text-success-600 mr-2" />
                <span className="text-xl font-bold text-secondary-900">89</span>
              </div>
              <p className="text-sm text-secondary-600">In carts now</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircleIcon className="w-5 h-5 text-warning-600 mr-2" />
                <span className="text-xl font-bold text-secondary-900">312</span>
              </div>
              <p className="text-sm text-secondary-600">Sold this week</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Trust Badges */}
      <motion.div variants={slideUp}>
        <Card padding="md" className="bg-primary-25">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex-shrink-0 text-primary-600">
                  {badge.icon}
                </div>
                <div>
                  <div className="font-medium text-secondary-900 text-sm">
                    {badge.title}
                  </div>
                  <div className="text-xs text-secondary-600">
                    {badge.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

       {/* Product Options - Rendered inline */}
       <motion.div variants={slideUp}>
        <Card padding="lg" className="bg-secondary-25">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-900">Product Options</h3>
            {productOptions.length > 0 ? (
              <div className="space-y-4">
                {productOptions.map((option) => (
                  <div key={option.name} className="space-y-2">
                    <label className="block text-sm font-medium text-secondary-700">
                      {option.name}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.optionValues.map((value) => {
                        const targetSelectedOptions = value.firstSelectableVariant?.selectedOptions
                          ?? (selectedVariant?.selectedOptions || []).map((opt) =>
                            opt.name === option.name ? {name: opt.name, value: value.name} : opt
                          );
                        const to = getVariantUrl({
                          handle: product.handle,
                          pathname: location.pathname,
                          searchParams: new URLSearchParams(),
                          selectedOptions: targetSelectedOptions as any,
                        });

                        return (
                          <button
                            key={value.name}
                            onClick={() => navigate(to)}
                            className={cn(
                              'px-3 py-2 text-sm border rounded-lg transition-colors',
                              value.selected
                                ? 'border-primary-600 bg-primary-50 text-primary-700'
                                : 'border-secondary-300 bg-white text-secondary-700 hover:border-primary-400'
                            )}
                          >
                            {value.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-secondary-600">No options available</p>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Delivery Timeline */}
      <motion.div variants={slideUp}>
        <Card padding="lg" className="bg-gradient-to-r from-blue-25 to-indigo-25 border-blue-200">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
            <TruckIcon className="w-5 h-5 text-blue-600" />
            Delivery Timeline
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm text-secondary-700">
                <strong>Order within 4 hours</strong> for same-day dispatch
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm text-secondary-700">
                <strong>Free Standard:</strong> 3-5 business days
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-sm text-secondary-700">
                <strong>Express:</strong> 1-2 business days (+$9.99)
              </span>
            </div>
          </div>
        </Card>
      </motion.div>

      

      {/* Product Details Accordion */}
      <motion.div variants={slideUp}>
        <Accordion
          items={accordionItems}
          type="multiple"
        />
      </motion.div>
    </motion.div>
  );
}
