import {useState} from 'react';
import {Link, useNavigate} from 'react-router';
import {motion} from 'framer-motion';
import {type MappedProductOptions} from '@shopify/hydrogen';
import type {
  Maybe,
  ProductOptionValueSwatch,
} from '@shopify/hydrogen/storefront-api-types';
import {AddToCartButton} from './AddToCartButton';
import {useAside} from './Aside';
import {Button} from './ui/Button';
import {cn, fadeIn} from '~/lib/design-system';
import type {ProductFragment} from 'storefrontapi.generated';

export function ProductForm({
  productOptions,
  selectedVariant,
}: {
  productOptions: MappedProductOptions[];
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
}) {
  const navigate = useNavigate();
  const {open} = useAside();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      {/* Product Options */}
      {productOptions.map((option) => {
        // If there is only a single value in the option values, don't display the option
        if (option.optionValues.length === 1) return null;

        return (
          <div key={option.name} className="space-y-3">
            <label className="block text-sm font-medium text-secondary-900">
              {option.name}
            </label>
            <div className="flex flex-wrap gap-3">
              {option.optionValues.map((value) => {
                const {
                  name,
                  handle,
                  variantUriQuery,
                  selected,
                  available,
                  exists,
                  isDifferentProduct,
                  swatch,
                } = value;

                if (isDifferentProduct) {
                  return (
                    <Link
                      className={cn(
                        'inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg border-2 transition-all duration-200',
                        selected
                          ? 'border-primary-600 bg-primary-50 text-primary-700 ring-2 ring-primary-200'
                          : 'border-secondary-300 bg-white text-secondary-700 hover:border-primary-400 hover:bg-primary-25',
                        !available && 'opacity-50 cursor-not-allowed'
                      )}
                      key={option.name + name}
                      prefetch="intent"
                      preventScrollReset
                      replace
                      to={`/products/${handle}?${variantUriQuery}`}
                    >
                      <ProductOptionSwatch swatch={swatch} name={name} />
                    </Link>
                  );
                } else {
                  return (
                    <motion.button
                      type="button"
                      className={cn(
                        'inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg border-2 transition-all duration-200',
                        selected
                          ? 'border-primary-600 bg-primary-50 text-primary-700 ring-2 ring-primary-200'
                          : 'border-secondary-300 bg-white text-secondary-700 hover:border-primary-400 hover:bg-primary-25',
                        !exists && 'opacity-50 cursor-not-allowed'
                      )}
                      key={option.name + name}
                      disabled={!exists}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (!selected) {
                          navigate(`?${variantUriQuery}`, {
                            replace: true,
                            preventScrollReset: true,
                          });
                        }
                      }}
                    >
                      <ProductOptionSwatch swatch={swatch} name={name} />
                    </motion.button>
                  );
                }
              })}
            </div>
          </div>
        );
      })}

      {/* Quantity Selector */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-secondary-900">
          Quantity
        </label>
        <div className="flex items-center space-x-3">
          <motion.button
            type="button"
            className="w-10 h-10 rounded-lg border border-secondary-300 flex items-center justify-center text-secondary-600 hover:bg-secondary-50 hover:border-secondary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </motion.button>
          
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 h-10 text-center border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-secondary-900 font-medium"
          />
          
          <motion.button
            type="button"
            className="w-10 h-10 rounded-lg border border-secondary-300 flex items-center justify-center text-secondary-600 hover:bg-secondary-50 hover:border-secondary-400 transition-colors"
            onClick={increaseQuantity}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="pt-4">
        <AddToCartButton
          disabled={!selectedVariant || !selectedVariant.availableForSale}
          onClick={() => {
            open('cart');
          }}
          lines={
            selectedVariant
              ? [
                  {
                    merchandiseId: selectedVariant.id,
                    quantity: quantity,
                    selectedVariant,
                  },
                ]
              : []
          }
          variant="primary"
          size="lg"
        >
          {selectedVariant?.availableForSale ? 'Add to Cart' : 'Sold Out'}
        </AddToCartButton>
      </div>
    </motion.div>
  );
}

function ProductOptionSwatch({
  swatch,
  name,
}: {
  swatch?: Maybe<ProductOptionValueSwatch> | undefined;
  name: string;
}) {
  const image = swatch?.image?.previewImage?.url;
  const color = swatch?.color;

  if (!image && !color) {
    return (
      <span className="min-w-[60px] text-center font-medium">
        {name}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div
        aria-label={name}
        className="w-8 h-8 rounded-lg overflow-hidden border border-secondary-200 shadow-sm"
        style={{
          backgroundColor: color || 'transparent',
        }}
      >
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
}
