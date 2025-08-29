import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction, Await} from 'react-router';
import {Suspense} from 'react';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {AdvancedProductGallery} from '~/components/AdvancedProductGallery';
import {ProductGallery} from '~/components/ProductGallery';
import {ProductInfo} from '~/components/ProductInfo';
import {ProductRecommendations} from '~/components/ProductRecommendations';
import {TrustSignals} from '~/components/TrustSignals';
import {SizeGuide} from '~/components/SizeGuide';
import {InstagramFeed} from '~/components/InstagramFeed';
import {ProductFeatures} from '~/components/ProductFeatures';
import {ProductDescription} from '~/components/ProductDescription';
import {ProductBanner} from '~/components/ProductBanner';
import {CompactProductReviews} from '~/components/CompactProductReviews';
import {FAQAccordion} from '~/components/FAQAccordion';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {staggerContainer, staggerItem} from '~/lib/design-system';
import { useState } from 'react';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  const title = data?.product?.seo?.title || data?.product?.title || 'Product';
  const description = data?.product?.seo?.description || data?.product?.description || '';
  const url = `/products/${data?.product?.handle ?? ''}`;
  return [
    {title: `Hydrogen | ${title}`},
    {name: 'description', content: description},
    {rel: 'canonical', href: url},
    {property: 'og:title', content: title},
    {property: 'og:description', content: description},
    {property: 'og:url', content: url},
    {name: 'twitter:card', content: 'summary_large_image'},
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  const {storefront} = args.context;
  const {country, language} = storefront.i18n;

  return {
    ...deferredData,
    ...criticalData,
    i18n: {country, language},
  };
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({
  context,
  params,
  request,
}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  // The API handle might be localized, so redirect to the localized handle
  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {
    product,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  // Load recommended products
  const recommendedProducts = context.storefront
    .query(PRODUCT_RECOMMENDATIONS_QUERY)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Product() {
  const {product, recommendedProducts, i18n} = useLoaderData<typeof loader>();
  
  // Optimistically selects a variant with given available variant information
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  // Sets the search param to the selected variant without navigation
  // only when no search params are set in the url
  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  // Get the product options array
  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });
  const track = (eventName: string, payload: Record<string, unknown> = {}) => {
    try {
      // eslint-disable-next-line no-console
      console.debug('[track]', eventName, payload);
    } catch {
      // Silent catch for analytics tracking
    }
  };

  const FREE_SHIPPING_THRESHOLD = 50;
  const estimateEtaDays = (countryCode?: string) => {
    if (!countryCode) return 7;
    switch (countryCode) {
      case 'US':
      case 'CA':
        return 5;
      case 'GB':
      case 'EU':
        return 6;
      default:
        return 8;
    }
  };

  const etaDays = estimateEtaDays(i18n?.country);
  
  const {title} = product;

  return (
    <motion.div 
      className="min-h-screen bg-secondary-25"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
        {/* Breadcrumb */}
        <motion.nav 
          className="flex mb-8" 
          aria-label="Breadcrumb"
          variants={staggerItem}
        >
          <ol className="flex items-center space-x-2 text-sm text-secondary-600">
            <li>
              <a href="/" className="hover:text-secondary-900 transition-colors">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <a href="/collections" className="hover:text-secondary-900 transition-colors">
                Collections
              </a>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-secondary-900 font-medium">{title}</span>
            </li>
          </ol>
        </motion.nav>

        {/* Product Main Content - Giữ nguyên phần này */}
        <motion.div 
          className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12"
          variants={staggerItem}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Product Gallery */}
            <div className="p-4 sm:p-8 bg-secondary-25 overflow-hidden">
              {AdvancedProductGallery ? (
                <AdvancedProductGallery
                  product={product}
                />
              ) : (
                <ProductGallery 
                  product={product} 
                  selectedVariant={selectedVariant} 
                />
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-8 lg:p-12 lg:sticky lg:top-24 self-start overflow-hidden">
              <ProductInfo
                product={product}
                selectedVariant={selectedVariant}
                productOptions={productOptions}
              />
            </div>
          </div>
        </motion.div>

                {/* Product Features & Benefits */}
        <motion.div 
          className="mb-12"
          variants={staggerItem}
        >
          <ProductFeatures
            features={[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Premium Quality",
                description: "Crafted with the finest materials for lasting durability and performance"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fast Shipping",
                description: "Quick delivery with real-time tracking and secure packaging"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Customer Love",
                description: "Trusted by thousands of satisfied customers worldwide"
              }
            ]}
          />
        </motion.div>

        {/* Product Description with Image */}
        <motion.div 
          className="mb-12"
          variants={staggerItem}
        >
          <ProductDescription
            description={product.description}
            features={[
              "Premium materials for lasting durability",
              "Ergonomic design for maximum comfort",
              "Easy maintenance and care instructions"
            ]}
          />
        </motion.div>

        {/* Banner Section */}
        <motion.div 
          className="mb-12"
          variants={staggerItem}
        >
          <ProductBanner
            title="Limited Time Offer"
            description="Don't miss out on this amazing product! Get it now with our special pricing and enjoy premium quality at an unbeatable value."
            buttonText="Shop Now"
            onButtonClick={() => track('banner_click', { productId: product.id })}
          />
        </motion.div>

        {/* Compact Product Reviews */}
        <motion.div 
          className="mb-8"
          variants={staggerItem}
        >
          <CompactProductReviews
            reviews={[
              {
                id: '1',
                rating: 5,
                title: 'Excellent quality!',
                content: 'This product exceeded my expectations. The build quality is fantastic and it arrived quickly. Highly recommended!',
                author: 'Sarah Johnson',
                date: '2 days ago',
                verified: true,
                helpful: 12,
              }
            ]}
            averageRating={4.8}
            totalReviews={127}
            ratingDistribution={{5: 95, 4: 25, 3: 4, 2: 2, 1: 1}}
            onViewAllReviews={() => track('view_all_reviews', { productId: product.id })}
          />
        </motion.div>

        {/* Compact Q&A Section */}
        <motion.div 
          className="mb-8"
          variants={staggerItem}
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary-900">
                  Frequently Asked Questions
                </h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Ask a Question
                </button>
              </div>
              
              <FAQAccordion
                items={[
                  {
                    question: "What are the exact dimensions of this product?",
                    answer: "The dimensions are 15cm x 10cm x 5cm. It weighs approximately 500g. Perfect for most standard uses."
                  },
                  {
                    question: "How long does shipping typically take?",
                    answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."
                  },
                  {
                    question: "Is this suitable for outdoor use?",
                    answer: "Yes, it has an IP65 rating which makes it resistant to dust and water. Perfect for outdoor activities."
                  },
                  {
                    question: "What size should I order if I usually wear medium?",
                    answer: "We recommend ordering your usual size. Our sizing chart is accurate and follows standard measurements."
                  }
                ]}
              />
            </div>
          </div>
        </motion.div>

        {/* Product Recommendations */}
        <motion.div variants={staggerItem}>
          <Suspense fallback={null}>
            <Await resolve={recommendedProducts}>
              {(data: any) => (
                <ProductRecommendations
                  currentProductId={product.id}
                  products={data?.products?.nodes || []}
                />
              )}
            </Await>
          </Suspense>
        </motion.div>

        {/* Instagram Social Proof */}
        <motion.div variants={staggerItem}>
          <InstagramFeed title="Customers Love It" />
        </motion.div>

        {/* Analytics */}
        <Analytics.ProductView
          data={{
            products: [
              {
                id: product.id,
                title: product.title,
                price: selectedVariant?.price.amount || '0',
                vendor: product.vendor,
                variantId: selectedVariant?.id || '',
                variantTitle: selectedVariant?.title || '',
                quantity: 1,
              },
            ],
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildProductJsonLd(product, selectedVariant)),
          }}
        />
      </div>
    </motion.div>
  );
}



function buildProductJsonLd(product: any, selectedVariant: any) {
  const price = selectedVariant?.price?.amount || (product as any)?.priceRange?.minVariantPrice?.amount || '0';
  const currency = selectedVariant?.price?.currencyCode || (product as any)?.priceRange?.minVariantPrice?.currencyCode || 'USD';
  const availability = selectedVariant?.availableForSale ? 'http://schema.org/InStock' : 'http://schema.org/OutOfStock';
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product?.title,
    description: product?.seo?.description || product?.description,
    sku: selectedVariant?.sku,
    brand: {
      '@type': 'Brand',
      name: product?.vendor,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price,
      availability,
      url: `/products/${product?.handle}`,
    },
  } as const;
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    featuredImage {
      id
      url
      altText
      width
      height
    }
    images(first: 12) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    media(first: 12) {
      nodes {
        mediaContentType
        previewImage {
          url
        }
        ... on MediaImage {
          image {
            id
            url
            altText
            width
            height
          }
        }
        ... on Video {
          id
          sources {
            url
            mimeType
          }
          previewImage {
            url
          }
        }
        ... on ExternalVideo {
          id
          embeddedUrl
        }
        ... on Model3d {
          id
          sources {
            url
          }
        }
      }
    }
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;

const PRODUCT_RECOMMENDATIONS_QUERY = `#graphql
  fragment ProductRecommendation on Product {
    id
    title
    handle
    vendor
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query ProductRecommendations($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...ProductRecommendation
      }
    }
  }
` as const;
