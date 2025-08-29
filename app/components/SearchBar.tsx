import {useState, useRef, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';
import {Form, Link} from 'react-router';
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {cn, fadeIn, slideUp} from '~/lib/design-system';

interface SearchBarProps {
  className?: string;
  variant?: 'header' | 'hero' | 'page';
  placeholder?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  className,
  variant = 'header',
  placeholder = 'Search products...',
  autoFocus = false,
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches] = useState([
    'Wireless headphones',
    'Gaming keyboard',
    'Fitness tracker',
  ]);
  const [trendingSearches] = useState([
    'iPhone accessories',
    'Eco-friendly products',
    'Home office setup',
    'Workout gear',
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsOpen(false);
    window.location.href = `/search?q=${encodeURIComponent(suggestion)}`;
  };

  const variants = {
    header: 'h-10',
    hero: 'h-14 text-lg',
    page: 'h-12',
  };

  return (
    <div className={cn('relative', className)}>
      <Form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            leftIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
            rightIcon={
              query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="text-secondary-500 hover:text-secondary-700 transition-colors"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              )
            }
            className={cn(variants[variant], 'pr-12')}
            fullWidth
          />

          {/* Search Button */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Button
              type="submit"
              size="sm"
              variant="primary"
              icon={<MagnifyingGlassIcon className="w-4 h-4" />}
              disabled={!query.trim()}
            />
          </div>
        </div>
      </Form>

      {/* Search Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className="absolute top-full left-0 right-0 mt-2 z-40"
              variants={slideUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Card className="border border-secondary-200 shadow-xl">
                <div className="p-4 space-y-4">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ClockIcon className="w-4 h-4 text-secondary-500" />
                        <span className="text-sm font-medium text-secondary-700">
                          Recent Searches
                        </span>
                      </div>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <motion.button
                            key={search}
                            className="block w-full text-left px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-50 rounded-md transition-colors"
                            onClick={() => handleSuggestionClick(search)}
                            variants={fadeIn}
                            custom={index}
                            whileHover={{ x: 4 }}
                          >
                            {search}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Searches */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium text-secondary-700">
                        Trending Now
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <motion.button
                          key={search}
                          onClick={() => handleSuggestionClick(search)}
                          variants={fadeIn}
                          custom={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className="hover:bg-primary-50 hover:border-primary-300 transition-colors cursor-pointer"
                          >
                            {search}
                          </Badge>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="pt-3 border-t border-secondary-200">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/collections"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-50 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>Browse All Categories</span>
                      </Link>
                      <Link
                        to="/collections/sale"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>View Sale Items</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Quick Search Modal for mobile
interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickSearchModal({isOpen, onClose}: QuickSearchModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-0 left-0 right-0 bg-white z-50 shadow-xl"
            initial={{y: -100}}
            animate={{y: 0}}
            exit={{y: -100}}
            transition={{type: "spring", damping: 25, stiffness: 300}}
          >
            <div className="p-4 border-b border-secondary-200">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<XMarkIcon className="w-5 h-5" />}
                  onClick={onClose}
                />
                <div className="flex-1">
                  <SearchBar variant="page" autoFocus />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
