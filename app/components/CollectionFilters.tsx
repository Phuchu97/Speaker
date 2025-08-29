import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  FunnelIcon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Squares2X2Icon,
  ListBulletIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {Input} from './ui/Input';
import {cn, slideUp, fadeIn} from '~/lib/design-system';

interface CollectionFiltersProps {
  totalProducts: number;
  onFiltersChange: (filters: FilterState) => void;
  onSortChange: (sort: string) => void;
  onLayoutChange: (layout: 'grid' | 'list') => void;
  currentLayout: 'grid' | 'list';
  className?: string;
}

interface FilterState {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  colors: string[];
  sizes: string[];
  rating: number | null;
  inStock: boolean;
}

export function CollectionFilters({
  totalProducts,
  onFiltersChange,
  onSortChange,
  onLayoutChange,
  currentLayout,
  className,
}: CollectionFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
    rating: null,
    inStock: false,
  });
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['price', 'category', 'brand'])
  );

  // Mock filter data - in real app, this would come from API
  const filterOptions = {
    categories: ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty'],
    brands: ['Apple', 'Nike', 'Samsung', 'Adidas', 'Sony', 'Canon'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#ffffff' },
      { name: 'Red', value: '#ef4444' },
      { name: 'Blue', value: '#3b82f6' },
      { name: 'Green', value: '#22c55e' },
      { name: 'Yellow', value: '#eab308' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name-az', label: 'Name: A to Z' },
    { value: 'name-za', label: 'Name: Z to A' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...activeFilters, [key]: value };
    setActiveFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const toggleArrayFilter = (key: 'categories' | 'brands' | 'colors' | 'sizes', value: string) => {
    const currentArray = activeFilters[key];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray);
  };

  const clearAllFilters = () => {
    const newFilters: FilterState = {
      priceRange: [0, 1000],
      categories: [],
      brands: [],
      colors: [],
      sizes: [],
      rating: null,
      inStock: false,
    };
    setActiveFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (activeFilters.categories.length > 0) count += activeFilters.categories.length;
    if (activeFilters.brands.length > 0) count += activeFilters.brands.length;
    if (activeFilters.colors.length > 0) count += activeFilters.colors.length;
    if (activeFilters.sizes.length > 0) count += activeFilters.sizes.length;
    if (activeFilters.rating) count += 1;
    if (activeFilters.inStock) count += 1;
    if (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 1000) count += 1;
    return count;
  };

  const FilterSection = ({ title, children, section }: { title: string; children: React.ReactNode; section: string }) => (
    <div className="border-b border-secondary-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => toggleSection(section)}
      >
        <span className="font-medium text-secondary-900">{title}</span>
        {expandedSections.has(section) ? (
          <ChevronUpIcon className="w-5 h-5 text-secondary-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-secondary-500" />
        )}
      </button>
      <AnimatePresence>
        {expandedSections.has(section) && (
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const FiltersContent = () => (
    <div className="space-y-0">
      {/* Price Range */}
      <FilterSection title="Price Range" section="price">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Input
              type="number"
              placeholder="Min"
              value={Number.isFinite(activeFilters.priceRange[0]) ? activeFilters.priceRange[0] : 0}
              onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value) || 0, activeFilters.priceRange[1]] as [number, number])}
              inputSize="sm"
            />
            <span className="text-secondary-600">to</span>
            <Input
              type="number"
              placeholder="Max"
              value={Number.isFinite(activeFilters.priceRange[1]) ? activeFilters.priceRange[1] : 1000}
              onChange={(e) => updateFilter('priceRange', [activeFilters.priceRange[0], parseInt(e.target.value) || 1000] as [number, number])}
              inputSize="sm"
            />
          </div>
          <div className="text-sm text-secondary-600">
            ${activeFilters.priceRange[0]} - ${activeFilters.priceRange[1]}
          </div>
        </div>
      </FilterSection>

      {/* Categories */}
      <FilterSection title="Categories" section="category">
        <div className="space-y-3">
          {filterOptions.categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.categories.includes(category)}
                onChange={() => toggleArrayFilter('categories', category)}
                className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-secondary-700">{category}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands" section="brand">
        <div className="space-y-3">
          {filterOptions.brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.brands.includes(brand)}
                onChange={() => toggleArrayFilter('brands', brand)}
                className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-secondary-700">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Colors" section="color">
        <div className="grid grid-cols-4 gap-2">
          {filterOptions.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleArrayFilter('colors', color.name)}
              className={cn(
                'aspect-square rounded-lg border-2 transition-all relative',
                activeFilters.colors.includes(color.name)
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-secondary-300 hover:border-secondary-400'
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            >
              {activeFilters.colors.includes(color.name) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <XMarkIcon className="w-4 h-4 text-white drop-shadow-lg" />
                </div>
              )}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Sizes" section="size">
        <div className="flex flex-wrap gap-2">
          {filterOptions.sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleArrayFilter('sizes', size)}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg border transition-all',
                activeFilters.sizes.includes(size)
                  ? 'border-primary-600 bg-primary-50 text-primary-700'
                  : 'border-secondary-300 text-secondary-700 hover:border-primary-400'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Customer Rating" section="rating">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => updateFilter('rating', activeFilters.rating === rating ? null : rating)}
              className={cn(
                'flex items-center gap-2 w-full p-2 rounded-lg text-left transition-colors',
                activeFilters.rating === rating ? 'bg-primary-50' : 'hover:bg-secondary-50'
              )}
            >
              <div className="flex items-center gap-1">
                {[...Array(rating)].map((_, i) => (
                  <span key={i} className="text-warning-400">★</span>
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <span key={i} className="text-secondary-300">★</span>
                ))}
              </div>
              <span className="text-sm text-secondary-700">& up</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Availability */}
      <FilterSection title="Availability" section="availability">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={activeFilters.inStock}
            onChange={() => updateFilter('inStock', !activeFilters.inStock)}
            className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-sm text-secondary-700">In stock only</span>
        </label>
      </FilterSection>
    </div>
  );

  return (
    <div className={className}>
      {/* Desktop Filters Sidebar */}
      <div className="hidden lg:block">
        <Card className="sticky top-20">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                <FunnelIcon className="w-5 h-5" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <Badge variant="primary" size="sm">
                    {getActiveFilterCount()}
                  </Badge>
                )}
              </h3>
              {getActiveFilterCount() > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-secondary-600 hover:text-error-600"
                >
                  Clear all
                </Button>
              )}
            </div>

            <FiltersContent />
          </div>
        </Card>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b border-secondary-200">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              icon={<FunnelIcon className="w-4 h-4" />}
              onClick={() => setShowMobileFilters(true)}
              className="relative"
            >
              Filters
              {getActiveFilterCount() > 0 && (
                <Badge
                  variant="primary"
                  size="sm"
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
                >
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>

            <span className="text-sm text-secondary-600">
              {totalProducts} products
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Sort */}
            <select
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Layout Toggle */}
            <div className="flex items-center border border-secondary-300 rounded-lg p-1">
              <Button
                variant={currentLayout === 'grid' ? 'primary' : 'ghost'}
                size="sm"
                icon={<Squares2X2Icon className="w-4 h-4" />}
                onClick={() => onLayoutChange('grid')}
                className="h-8 w-8 p-0"
              />
              <Button
                variant={currentLayout === 'list' ? 'primary' : 'ghost'}
                size="sm"
                icon={<ListBulletIcon className="w-4 h-4" />}
                onClick={() => onLayoutChange('list')}
                className="h-8 w-8 p-0"
              />
            </div>
          </div>
        </div>

        {/* Mobile Filters Modal */}
        <AnimatePresence>
          {showMobileFilters && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMobileFilters(false)}
              />
              <motion.div
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="flex items-center justify-between p-4 border-b border-secondary-200">
                  <h3 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                    <AdjustmentsHorizontalIcon className="w-5 h-5" />
                    Filters
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<XMarkIcon className="w-5 h-5" />}
                    onClick={() => setShowMobileFilters(false)}
                  />
                </div>

                <div className="overflow-y-auto h-full pb-20 p-4">
                  <FiltersContent />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-secondary-200">
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={clearAllFilters}
                      className="flex-1"
                    >
                      Clear all
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => setShowMobileFilters(false)}
                      className="flex-1"
                    >
                      Apply filters
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Sort & Layout Controls */}
      <div className="hidden lg:flex items-center justify-between py-4">
        <span className="text-sm text-secondary-600">
          Showing {totalProducts} products
        </span>

        <div className="flex items-center gap-4">
          {/* Sort */}
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Layout Toggle */}
          <div className="flex items-center border border-secondary-300 rounded-lg p-1">
            <Button
              variant={currentLayout === 'grid' ? 'primary' : 'ghost'}
              size="sm"
              icon={<Squares2X2Icon className="w-4 h-4" />}
              onClick={() => onLayoutChange('grid')}
              className="h-8 px-3"
            >
              Grid
            </Button>
            <Button
              variant={currentLayout === 'list' ? 'primary' : 'ghost'}
              size="sm"
              icon={<ListBulletIcon className="w-4 h-4" />}
              onClick={() => onLayoutChange('list')}
              className="h-8 px-3"
            >
              List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
