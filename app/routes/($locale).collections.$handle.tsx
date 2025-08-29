import {redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';
import {getPaginationVariables, Analytics} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {useState} from 'react';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {ProductGrid} from '~/components/ProductGrid';
import {CollectionFilters} from '~/components/CollectionFilters';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {ProductItem} from '~/components/ProductItem';
import {staggerContainer, staggerItem, fadeIn} from '~/lib/design-system';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.collection.title ?? ''} Collection`}];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
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
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  if (!handle) {
    throw redirect('/collections');
  }

  const [{collection}] = await Promise.all([
    storefront.query(COLLECTION_QUERY, {
      variables: {handle, ...paginationVariables},
      // Add other queries here, so that they are loaded in parallel
    }),
  ]);

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }

  // The API handle might be localized, so redirect to the localized handle
  redirectIfHandleIsLocalized(request, {handle, data: collection});

  return {
    collection,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  return {};
}

export default function Collection() {
  const {collection} = useLoaderData<typeof loader>();
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000] as [number, number],
    categories: [] as string[],
    brands: [] as string[],
    colors: [] as string[],
    sizes: [] as string[],
    rating: null as number | null,
    inStock: false,
  });

  // Get products from the collection
  const products = collection.products?.nodes || [];
  const totalProducts = collection.products?.pageInfo?.hasNextPage 
    ? products.length + 1 
    : products.length;

  return (
    <motion.div 
      className="min-h-screen bg-white"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Collection Hero */}
      <motion.section 
        className="relative py-16 lg:py-24 bg-gradient-to-br from-secondary-50 to-primary-50"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            {/* Collection Image */}
            {(collection as any).image && (
              <motion.div 
                className="mb-8"
                variants={staggerItem}
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img
                    src={(collection as any).image.url}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
              variants={staggerItem}
            >
              {collection.title}
            </motion.h1>
            
            {collection.description && (
              <motion.p 
                className="text-xl text-secondary-600 leading-relaxed"
                variants={staggerItem}
              >
                {collection.description}
              </motion.p>
            )}

            {/* Collection Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-8"
              variants={staggerItem}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{totalProducts}+</div>
                <div className="text-sm text-secondary-600 uppercase tracking-wider">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4.8★</div>
                <div className="text-sm text-secondary-600 uppercase tracking-wider">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">Free</div>
                <div className="text-sm text-secondary-600 uppercase tracking-wider">Shipping</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="py-8"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              variants={fadeIn}
            >
              <CollectionFilters
                totalProducts={totalProducts}
                onFiltersChange={setFilters}
                onSortChange={setSortBy}
                onLayoutChange={setLayout}
                currentLayout={layout}
              />
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              className="lg:col-span-3 mt-8 lg:mt-0"
              variants={fadeIn}
            >
              <PaginatedResourceSection
                connection={collection.products}
                resourcesClassName={`grid gap-6 ${
                  layout === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}
              >
                {({node: product, index}) => (
                  <motion.div
                    key={product.id}
                    variants={staggerItem}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProductItem
                      product={product}
                      loading={index < 8 ? 'eager' : undefined}
                    />
                  </motion.div>
                )}
              </PaginatedResourceSection>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </motion.div>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
` as const;
