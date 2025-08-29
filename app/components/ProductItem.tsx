import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading,
}: {
  product:
    | CollectionItemFragment
    | ProductItemFragment
    | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = (product as any).featuredImage;
  
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <Link
        className="block"
        prefetch="intent"
        to={variantUrl}
      >
        {/* Product Image Container */}
        <div className="aspect-square bg-gray-100 overflow-hidden">
          {image ? (
            <Image
              alt={image.altText || product.title}
              aspectRatio="1/1"
              data={image}
              loading={loading}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                View Details
              </span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Title */}
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
            {product.title}
          </h3>
          
          {/* Product Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Money 
                data={product.priceRange.minVariantPrice} 
                className="text-lg font-semibold text-gray-900"
              />
              {product.priceRange.maxVariantPrice.amount !== product.priceRange.minVariantPrice.amount && (
                <span className="text-sm text-gray-500">
                  - <Money data={product.priceRange.maxVariantPrice} />
                </span>
              )}
            </div>
            
            {/* Vendor */}
            {'vendor' in product && product.vendor && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {product.vendor}
              </span>
            )}
          </div>
        </div>
      </Link>
      
      {/* Add to Cart Quick Action */}
      <div className="px-4 pb-4">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-sm group-hover:bg-blue-700">
          Quick Add
        </button>
      </div>
    </div>
  );
}
