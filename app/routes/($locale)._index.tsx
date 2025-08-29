import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from 'react-router';
import {Suspense} from 'react';
import {motion} from 'framer-motion';
import {Image, Money} from '@shopify/hydrogen';
import {
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import type {
  CollectionFragment,
  ProductFragment,
} from 'storefrontapi.generated';
import {ProductItem} from '~/components/ProductItem';
import {Button} from '~/components/ui/Button';
import {Badge} from '~/components/ui/Badge';
import {Card} from '~/components/ui/Card';
import {TrustSignals} from '~/components/TrustSignals';
import {InstagramFeed} from '~/components/InstagramFeed';
import {HeroSection} from '~/components/HeroSection';
import {ProductGrid} from '~/components/ProductGrid';

import {staggerContainer, staggerItem, fadeIn, slideUp} from '~/lib/design-system';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
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
async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <motion.div 
      className="min-h-screen"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
          {/* Premium Hero Section */}
    <HeroSection
      title="Premium Products"
      subtitle="Discover Amazing"
      description="Shop the latest trends and find your perfect style. Quality products, exceptional service, delivered with care."
      ctaPrimary={{ text: "Shop Collection", link: "/collections" }}
      ctaSecondary={{ text: "Watch Story", link: "/pages/about" }}
      stats={[
        { value: "50K+", label: "Happy Customers" },
        { value: "4.9", label: "Average Rating" },
        { value: "1000+", label: "Products" }
      ]}
    />



      {/* Old Hero Section - Hidden */}
      <motion.section 
        className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-600 text-white overflow-hidden hidden"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              variants={slideUp}
            >
              <Badge 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 backdrop-blur-sm"
                icon={<SparklesIcon className="w-4 h-4" />}
              >
                New Collection Available
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={slideUp}
            >
              Discover Amazing{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed"
              variants={slideUp}
            >
              Shop the latest trends and find your perfect style. Quality products, exceptional service, delivered with care.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={slideUp}
            >
              <Button
                variant="secondary"
                size="xl"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
                className="bg-white text-primary-600 hover:bg-white/90 shadow-xl"
              >
                <Link to="/collections" prefetch="intent">
                  Shop Now
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/collections" prefetch="intent">
                  View Collections
                </Link>
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 pt-8 border-t border-white/20"
              variants={slideUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">10K+</div>
                <div className="text-primary-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-primary-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-3xl font-bold">4.9</span>
                </div>
                <div className="text-primary-200 text-sm">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating elements */}
          <motion.div 
            className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-6 h-6 bg-white/15 rounded-full"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.section>

      {/* Featured Collection */}
      {data.featuredCollection && (
        <motion.section 
          className="py-20 bg-white"
          variants={staggerItem}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4"
                variants={slideUp}
              >
                Featured Collection
              </motion.h2>
              <motion.p 
                className="text-lg text-secondary-600 max-w-2xl mx-auto"
                variants={slideUp}
              >
                Explore our curated selection of premium products
              </motion.p>
            </motion.div>
            <motion.div variants={slideUp}>
              <FeaturedCollection collection={data.featuredCollection} />
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Recommended Products */}
      <motion.section 
        className="py-20 bg-secondary-25"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4"
              variants={slideUp}
            >
              Recommended for You
            </motion.h2>
            <motion.p 
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={slideUp}
            >
              Handpicked products based on your preferences
            </motion.p>
          </motion.div>
          <motion.div variants={slideUp}>
            <Suspense fallback={<ProductGridSkeleton />}>
              <Await resolve={data.recommendedProducts}>
                {(response) => (
                  <ProductGrid
                    products={response?.products?.nodes || []}
                    showFilters={false}
                    columns={4}
                  />
                )}
              </Await>
            </Suspense>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Signals Section */}
      <motion.div variants={staggerItem}>
        <TrustSignals showStats={true} />
      </motion.div>

      {/* Instagram Feed */}
      <motion.div variants={staggerItem}>
        <InstagramFeed title="Shop the Look" />
      </motion.div>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerItem}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4"
              variants={slideUp}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={slideUp}
            >
              We're committed to providing you with the best shopping experience
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Card hover className="h-full text-center p-8">
                <motion.div 
                  className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <TruckIcon className="w-8 h-8 text-primary-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Free Shipping</h3>
                <p className="text-secondary-600 leading-relaxed">Free shipping on orders over $50. Fast and reliable delivery worldwide.</p>
              </Card>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <Card hover className="h-full text-center p-8">
                <motion.div 
                  className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ShieldCheckIcon className="w-8 h-8 text-success-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Quality Guarantee</h3>
                <p className="text-secondary-600 leading-relaxed">30-day money-back guarantee. We stand behind every product we sell.</p>
              </Card>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <Card hover className="h-full text-center p-8">
                <motion.div 
                  className="bg-warning-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ClockIcon className="w-8 h-8 text-warning-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">24/7 Support</h3>
                <p className="text-secondary-600 leading-relaxed">Round-the-clock customer support. We're here whenever you need us.</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: CollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  
  return (
    <Card className="relative overflow-hidden border-none shadow-xl">
      <Link
        className="block group"
        to={`/collections/${collection.handle}`}
      >
        <motion.div 
          className="aspect-[16/9] bg-secondary-200 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {image ? (
            <Image 
              data={image} 
              sizes="100vw" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
              <SparklesIcon className="w-24 h-24 text-white opacity-80" />
            </div>
          )}
          
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
          
          {/* Content */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center text-white">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-6 group-hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {collection.title}
              </motion.h3>
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
                className="bg-white/90 text-secondary-900 hover:bg-white backdrop-blur-sm shadow-lg"
              >
                Explore Collection
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </Card>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<{products: {nodes: ProductFragment[]}} | null>;
}) {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={staggerContainer}
    >
      <Suspense fallback={<ProductsLoadingSkeleton />}>
        <Await resolve={products}>
          {(response) => (
            <>
              {response
                ? response.products.nodes.map((product: ProductFragment, index: number) => (
                    <motion.div
                      key={product.id}
                      variants={staggerItem}
                      custom={index}
                    >
                      <ProductItem product={product as any} />
                    </motion.div>
                  ))
                : (
                  <motion.div 
                    className="col-span-full text-center py-12"
                    variants={fadeIn}
                  >
                    <SparklesIcon className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-500">No products available at the moment.</p>
                  </motion.div>
                )}
            </>
          )}
        </Await>
      </Suspense>
    </motion.div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="animate-pulse"
          variants={staggerItem}
          custom={i}
        >
          <Card className="overflow-hidden">
            <div className="aspect-square bg-secondary-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-secondary-200 rounded w-3/4" />
              <div className="h-4 bg-secondary-200 rounded w-1/2" />
              <div className="h-6 bg-secondary-200 rounded w-1/3" />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function ProductsLoadingSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="animate-pulse"
          variants={staggerItem}
          custom={i}
        >
          <Card className="overflow-hidden">
            <div className="aspect-square bg-secondary-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-secondary-200 rounded w-3/4" />
              <div className="h-4 bg-secondary-200 rounded w-1/2" />
              <div className="h-6 bg-secondary-200 rounded w-1/3" />
            </div>
          </Card>
        </motion.div>
      ))}
    </>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    vendor
    description
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
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 2) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
