import {Money} from '@shopify/hydrogen';
import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';

export function ProductPrice({
  price,
  compareAtPrice,
  size = 'lg',
}: {
  price?: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const isOnSale = compareAtPrice && price && 
    parseFloat(compareAtPrice.amount) > parseFloat(price.amount);

  if (!price) {
    return <span className="text-gray-400">&nbsp;</span>;
  }

  return (
    <div className="flex items-center space-x-3">
      {/* Current Price */}
      <div className={`font-bold text-gray-900 ${sizeClasses[size]}`}>
        <Money data={price} />
      </div>

      {/* Compare At Price (if on sale) */}
      {isOnSale && compareAtPrice && (
        <>
          <div className="text-gray-500 line-through text-lg">
            <Money data={compareAtPrice} />
          </div>
          
          {/* Sale Badge */}
          <div className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
            {calculateDiscountPercentage(price.amount, compareAtPrice.amount)}% OFF
          </div>
        </>
      )}
    </div>
  );
}

function calculateDiscountPercentage(currentPrice: string, originalPrice: string): number {
  const current = parseFloat(currentPrice);
  const original = parseFloat(originalPrice);
  
  if (original <= 0) return 0;
  
  const discount = ((original - current) / original) * 100;
  return Math.round(discount);
}
