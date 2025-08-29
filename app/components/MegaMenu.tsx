import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ChevronDownIcon,
  SparklesIcon,
  FireIcon,
  TagIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';
import {Link} from 'react-router';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {cn, slideUp, fadeIn} from '~/lib/design-system';

interface MegaMenuProps {
  menu: any; // Menu from Shopify
  className?: string;
}

export function MegaMenu({menu, className}: MegaMenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Mock featured items and promotions
  const featuredItems = [
    {
      title: 'New Arrivals',
      description: 'Latest products just in',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop',
      link: '/collections/new-arrivals',
      badge: 'New',
    },
    {
      title: 'Best Sellers',
      description: 'Most popular items',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
      link: '/collections/best-sellers',
      badge: 'Hot',
    },
    {
      title: 'Sale Items',
      description: 'Up to 50% off',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
      link: '/collections/sale',
      badge: 'Sale',
    },
  ];

  const mockCollections = [
    {
      title: 'Electronics',
      items: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Gaming'],
      link: '/collections/electronics',
    },
    {
      title: 'Fashion',
      items: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories', 'Bags'],
      link: '/collections/fashion',
    },
    {
      title: 'Home & Garden',
      items: ['Furniture', 'Decor', 'Kitchen', 'Outdoor', 'Storage'],
      link: '/collections/home-garden',
    },
    {
      title: 'Sports & Outdoors',
      items: ['Fitness', 'Outdoor Gear', 'Sports Equipment', 'Athletic Wear', 'Camping'],
      link: '/collections/sports',
    },
  ];

  return (
    <nav className={cn('relative', className)}>
      <div className="flex items-center space-x-8">
        {/* Browse All Categories */}
        <div
          className="relative"
          onMouseEnter={() => setActiveItem('categories')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors">
            Categories
            <ChevronDownIcon className="w-4 h-4" />
          </button>

          <AnimatePresence>
            {activeItem === 'categories' && (
              <motion.div
                className="absolute top-full left-0 mt-2 z-50"
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className="w-96 border border-secondary-200 shadow-xl">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                      <SparklesIcon className="w-5 h-5 text-primary-600" />
                      Browse Categories
                    </h3>
                    
                    <div className="space-y-4">
                      {mockCollections.map((collection, index) => (
                        <motion.div
                          key={collection.title}
                          variants={fadeIn}
                          custom={index}
                        >
                          <Link
                            to={collection.link}
                            className="block group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-secondary-900 group-hover:text-primary-600 transition-colors">
                                {collection.title}
                              </h4>
                              <ChevronDownIcon className="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transition-colors" />
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {collection.items.slice(0, 3).map((item) => (
                                <Badge
                                  key={item}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs group-hover:border-primary-300 group-hover:bg-primary-25 transition-colors"
                                >
                                  {item}
                                </Badge>
                              ))}
                              {collection.items.length > 3 && (
                                <Badge variant="outline" size="sm" className="text-xs bg-transparent">
                                  +{collection.items.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Featured Menu */}
        <div
          className="relative"
          onMouseEnter={() => setActiveItem('featured')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors">
            Featured
            <ChevronDownIcon className="w-4 h-4" />
          </button>

          <AnimatePresence>
            {activeItem === 'featured' && (
              <motion.div
                className="absolute top-full left-0 mt-2 z-50"
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className="w-[600px] border border-secondary-200 shadow-xl">
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {featuredItems.map((item, index) => (
                        <motion.div
                          key={item.title}
                          variants={fadeIn}
                          custom={index}
                        >
                          <Link
                            to={item.link}
                            className="block group"
                          >
                            <Card className="overflow-hidden border-none group-hover:shadow-lg transition-all">
                              <div className="relative aspect-square">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2">
                                  <Badge
                                    variant={item.badge === 'Sale' ? 'error' : item.badge === 'Hot' ? 'warning' : 'success'}
                                    size="sm"
                                    icon={
                                      item.badge === 'Sale' ? <TagIcon className="w-3 h-3" /> :
                                      item.badge === 'Hot' ? <FireIcon className="w-3 h-3" /> :
                                      <SparklesIcon className="w-3 h-3" />
                                    }
                                  >
                                    {item.badge}
                                  </Badge>
                                </div>
                              </div>
                              <div className="p-4">
                                <h4 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-secondary-600 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Quick Links */}
                    <div className="mt-6 pt-6 border-t border-secondary-200">
                      <div className="grid grid-cols-4 gap-4">
                        <Link
                          to="/collections/gifts"
                          className="flex items-center gap-2 px-3 py-2 text-sm text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors"
                        >
                          <GiftIcon className="w-4 h-4" />
                          <span>Gift Cards</span>
                        </Link>
                        <Link
                          to="/pages/size-guide"
                          className="flex items-center gap-2 px-3 py-2 text-sm text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors"
                        >
                          <span>Size Guide</span>
                        </Link>
                        <Link
                          to="/pages/about"
                          className="flex items-center gap-2 px-3 py-2 text-sm text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors"
                        >
                          <span>Our Story</span>
                        </Link>
                        <Link
                          to="/pages/contact"
                          className="flex items-center gap-2 px-3 py-2 text-sm text-secondary-700 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-colors"
                        >
                          <span>Contact</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Regular Menu Items */}
        {menu?.items?.map((item: any) => (
          <Link
            key={item.id}
            to={item.url}
            className="px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
