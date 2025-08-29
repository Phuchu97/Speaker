import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  StarIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  CameraIcon,
  CheckCircleIcon,
  FunnelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import {StarIcon as StarIconSolid} from '@heroicons/react/24/solid';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {Modal} from './ui/Modal';
import {Input} from './ui/Input';
import {cn, staggerContainer, staggerItem, fadeIn, scaleIn} from '~/lib/design-system';

interface Review {
  id: string;
  author: {
    name: string;
    avatar?: string;
    verified: boolean;
  };
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  notHelpful: number;
  images?: string[];
  variant?: {
    name: string;
    value: string;
  };
  verified_purchase: boolean;
}

interface EnhancedProductReviewsProps {
  productId: string;
  productName: string;
  className?: string;
}

export function EnhancedProductReviews({
  productId,
  productName,
  className,
}: EnhancedProductReviewsProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [showPhotoReviews, setShowPhotoReviews] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  // Mock reviews data - in real app, this would come from API
  const mockReviews: Review[] = [
    {
      id: '1',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612821b?w=64&h=64&fit=crop&crop=face',
        verified: true,
      },
      rating: 5,
      title: 'Absolutely love this product!',
      content: 'The quality is outstanding and it exceeded my expectations. Great value for money and fast shipping. Would definitely recommend to others.',
      date: '2024-01-15',
      helpful: 24,
      notHelpful: 2,
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      ],
      variant: { name: 'Color', value: 'Black' },
      verified_purchase: true,
    },
    {
      id: '2',
      author: {
        name: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
        verified: true,
      },
      rating: 4,
      title: 'Good product, minor issues',
      content: 'Overall a solid product. The build quality is good but took longer to arrive than expected. Customer service was helpful when I reached out.',
      date: '2024-01-10',
      helpful: 18,
      notHelpful: 3,
      verified_purchase: true,
    },
    {
      id: '3',
      author: {
        name: 'Emily Rodriguez',
        verified: false,
      },
      rating: 5,
      title: 'Perfect for my needs',
      content: 'Exactly what I was looking for. The design is sleek and it works perfectly. Highly recommended for anyone looking for quality.',
      date: '2024-01-08',
      helpful: 12,
      notHelpful: 1,
      images: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
      ],
      variant: { name: 'Size', value: 'Large' },
      verified_purchase: true,
    },
  ];

  const overallRating = 4.6;
  const totalReviews = mockReviews.length;
  const ratingDistribution = [
    { stars: 5, count: 45, percentage: 75 },
    { stars: 4, count: 12, percentage: 20 },
    { stars: 3, count: 2, percentage: 3 },
    { stars: 2, count: 1, percentage: 2 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const filteredReviews = selectedRating 
    ? mockReviews.filter(review => review.rating === selectedRating)
    : mockReviews;

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return b.helpful - a.helpful;
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const photoReviews = mockReviews.filter(review => review.images && review.images.length > 0);

  const toggleExpandReview = (reviewId: string) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  return (
    <motion.div 
      className={cn('space-y-8', className)}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Reviews Overview */}
      <motion.div variants={staggerItem}>
        <Card className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div className="text-5xl font-bold text-secondary-900">{overallRating}</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={cn(
                          'w-5 h-5',
                          i < Math.floor(overallRating) ? 'text-warning-400' : 'text-secondary-300'
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-secondary-600">
                    Based on {totalReviews} reviews
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="sm"
                  icon={<PencilIcon className="w-4 h-4" />}
                  onClick={() => setShowWriteReview(true)}
                >
                  Write a Review
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<CameraIcon className="w-4 h-4" />}
                  onClick={() => setShowPhotoReviews(true)}
                >
                  Photo Reviews ({photoReviews.length})
                </Button>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <motion.button
                  key={item.stars}
                  className="flex items-center gap-3 w-full text-left hover:bg-secondary-50 p-2 rounded-lg transition-colors"
                  onClick={() => setSelectedRating(selectedRating === item.stars ? null : item.stars)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{item.stars}</span>
                    <StarIconSolid className="w-4 h-4 text-warning-400" />
                  </div>
                  <div className="flex-1 bg-secondary-200 rounded-full h-2">
                    <div
                      className="bg-warning-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-secondary-600 w-8">{item.count}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Filters & Sort */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        variants={staggerItem}
      >
        <div className="flex items-center gap-4">
          <Button
            variant={selectedRating ? 'primary' : 'outline'}
            size="sm"
            icon={<FunnelIcon className="w-4 h-4" />}
            onClick={() => setSelectedRating(null)}
          >
            {selectedRating ? `${selectedRating} Star Reviews` : 'All Reviews'}
          </Button>
          
          {selectedRating && (
            <Badge variant="primary" className="flex items-center gap-1">
              {filteredReviews.length} review(s)
            </Badge>
          )}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="helpful">Most Helpful</option>
          <option value="rating-high">Highest Rating</option>
          <option value="rating-low">Lowest Rating</option>
        </select>
      </motion.div>

      {/* Reviews List */}
      <motion.div className="space-y-6" variants={staggerContainer}>
        <AnimatePresence mode="wait">
          {sortedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={staggerItem}
              custom={index}
              layout
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Review Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {review.author.avatar ? (
                        <img
                          src={review.author.avatar}
                          alt={review.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">
                            {review.author.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-secondary-900">
                            {review.author.name}
                          </span>
                          {review.author.verified && (
                            <Badge variant="success" size="sm" icon={<CheckCircleIcon className="w-3 h-3" />}>
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIconSolid
                                key={i}
                                className={cn(
                                  'w-4 h-4',
                                  i < review.rating ? 'text-warning-400' : 'text-secondary-300'
                                )}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-secondary-600">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    {review.verified_purchase && (
                      <Badge variant="outline" size="sm">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>

                  {/* Review Content */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">{review.title}</h4>
                    <p className={cn(
                      'text-secondary-700 leading-relaxed',
                      !expandedReviews.has(review.id) && review.content.length > 200 && 'line-clamp-3'
                    )}>
                      {review.content}
                    </p>
                    
                    {review.content.length > 200 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpandReview(review.id)}
                        className="mt-2 text-primary-600"
                        icon={expandedReviews.has(review.id) ? 
                          <ChevronUpIcon className="w-4 h-4" /> : 
                          <ChevronDownIcon className="w-4 h-4" />
                        }
                      >
                        {expandedReviews.has(review.id) ? 'Show Less' : 'Read More'}
                      </Button>
                    )}
                  </div>

                  {/* Variant Information */}
                  {review.variant && (
                    <div className="text-sm text-secondary-600">
                      <span className="font-medium">{review.variant.name}:</span> {review.variant.value}
                    </div>
                  )}

                  {/* Review Images */}
                  {review.images && review.images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {review.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-secondary-100 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={image}
                            alt={`Review image ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<HandThumbUpIcon className="w-4 h-4" />}
                        className="text-secondary-600 hover:text-success-600"
                      >
                        Helpful ({review.helpful})
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<HandThumbDownIcon className="w-4 h-4" />}
                        className="text-secondary-600 hover:text-error-600"
                      >
                        Not helpful ({review.notHelpful})
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={showWriteReview}
        onClose={() => setShowWriteReview(false)}
        productName={productName}
      />

      {/* Photo Reviews Modal */}
      <PhotoReviewsModal
        isOpen={showPhotoReviews}
        onClose={() => setShowPhotoReviews(false)}
        reviews={photoReviews}
      />
    </motion.div>
  );
}

// Write Review Modal Component
interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

function WriteReviewModal({isOpen, onClose, productName}: WriteReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Write a Review"
      description={`Share your experience with ${productName}`}
      size="lg"
    >
      <div className="space-y-6">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Overall Rating *
          </label>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setRating(i + 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <StarIconSolid
                  className={cn(
                    'w-8 h-8 transition-colors',
                    i < rating ? 'text-warning-400' : 'text-secondary-300 hover:text-warning-300'
                  )}
                />
              </motion.button>
            ))}
            {rating > 0 && (
              <span className="ml-2 text-sm text-secondary-600">
                {rating} out of 5 stars
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <Input
          label="Review Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Summarize your experience"
        />

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Your Review *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Tell others about your experience with this product..."
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="primary"
            disabled={!rating || !title || !content}
          >
            Submit Review
          </Button>
        </div>
      </div>
    </Modal>
  );
}

// Photo Reviews Modal Component
interface PhotoReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviews: Review[];
}

function PhotoReviewsModal({isOpen, onClose, reviews}: PhotoReviewsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Customer Photos"
      description="Real photos from verified buyers"
      size="xl"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.flatMap(review => 
          review.images?.map((image, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="aspect-square rounded-lg overflow-hidden bg-secondary-100"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Review by ${review.author.name}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )) || []
        )}
      </div>
    </Modal>
  );
}
