import {useEffect, useMemo, useRef, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  StarIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleLeftIcon,
  UserCircleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import {StarIcon as StarIconSolid} from '@heroicons/react/24/solid';
import {Button} from '~/components/ui/Button';
import {Badge} from '~/components/ui/Badge';
import {Card, CardContent, CardHeader, CardTitle} from '~/components/ui/Card';
import {cn, staggerContainer, staggerItem, fadeIn} from '~/lib/design-system';

// Mock data - In a real app, this would come from your API
const mockReviews = [
  {
    id: '1',
    rating: 5,
    title: 'Excellent quality!',
    content: 'This product exceeded my expectations. The build quality is fantastic and it arrived quickly. Highly recommended!',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    verified: true,
    helpful: 12,
    images: [],
  },
  {
    id: '2',
    rating: 4,
    title: 'Good value for money',
    content: 'Overall satisfied with this purchase. The product works as described, though the packaging could be better.',
    author: 'Mike Chen',
    date: '2024-01-10',
    verified: true,
    helpful: 8,
    images: [],
  },
  {
    id: '3',
    rating: 5,
    title: 'Perfect!',
    content: 'Exactly what I was looking for. Great design and functionality. Will definitely buy again.',
    author: 'Emma Wilson',
    date: '2024-01-08',
    verified: false,
    helpful: 15,
    images: [],
  },
  {
    id: '4',
    rating: 3,
    title: "It's okay",
    content: 'The product is decent but nothing special. Does the job but could be improved in some areas.',
    author: 'David Brown',
    date: '2024-01-05',
    verified: true,
    helpful: 3,
    images: [],
  },
];

const mockRatingDistribution = {
  5: 45,
  4: 28,
  3: 15,
  2: 8,
  1: 4,
};

interface ProductReviewsProps {
  productId?: string;
}

export function ProductReviews({productId}: ProductReviewsProps) {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'helpful' | 'rating'>('newest');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [newReviewForm, setNewReviewForm] = useState<{rating: number; title: string; content: string; author: string}>({
    rating: 5,
    title: '',
    content: '',
    author: '',
  });
  const [newReviewError, setNewReviewError] = useState<string | null>(null);

  const [newReviews, setNewReviews] = useState<typeof mockReviews>([]);

  const allReviews = useMemo(() => {
    return [...newReviews, ...mockReviews];
  }, [newReviews]);

  const totalReviews = allReviews.length;
  const averageRating = useMemo(() => {
    if (totalReviews === 0) return 0;
    const sum = allReviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / totalReviews;
  }, [allReviews, totalReviews]);

  const filteredAndSortedReviews = allReviews
    .filter(review => filterRating ? review.rating === filterRating : true)
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'helpful':
          return b.helpful - a.helpful;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <motion.div
      className="space-y-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Reviews Summary */}
      <motion.div variants={staggerItem}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <ChatBubbleLeftIcon className="w-6 h-6 text-primary-600" />
              Customer Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Overall Rating */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <span className="text-4xl font-bold text-secondary-900">
                    {averageRating.toFixed(1)}
                  </span>
                  <div>
                    <div className="flex items-center gap-1" aria-label={`Average rating ${averageRating.toFixed(1)} out of 5`}>
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={cn(
                            'w-5 h-5',
                            i < Math.floor(averageRating) ? 'text-warning-400' : 'text-secondary-300'
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-secondary-600">
                      Based on {totalReviews} review{totalReviews !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = mockRatingDistribution[rating as keyof typeof mockRatingDistribution];
                  const percentage = (count / totalReviews) * 100;
                  
                  return (
                    <div key={rating} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 min-w-[60px]">
                        <span className="text-sm">{rating}</span>
                        <StarIconSolid className="w-4 h-4 text-warning-400" />
                      </div>
                      <div className="flex-1 bg-secondary-200 rounded-full h-2">
                        <motion.div
                          className="bg-warning-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-sm text-secondary-600 min-w-[30px]">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Write Review Button */}
            <div className="mt-6 pt-6 border-t border-secondary-200">
              <Button
                variant="outline"
                size="lg"
                icon={<PencilIcon className="w-5 h-5" />}
                onClick={() => setShowWriteReview(true)}
                fullWidth
                className="sm:w-auto"
              >
                Write a Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters and Sorting */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-between"
        variants={staggerItem}
      >
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterRating(null)}
            className={cn(
              'px-3 py-1 text-sm rounded-full transition-colors',
              filterRating === null 
                ? 'bg-primary-600 text-white' 
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            )}
          >
            All Reviews
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilterRating(rating)}
              className={cn(
                'px-3 py-1 text-sm rounded-full transition-colors flex items-center gap-1',
                filterRating === rating 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              )}
            >
              {rating} <StarIconSolid className="w-3 h-3" />
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="px-3 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="helpful">Most Helpful</option>
          <option value="rating">Highest Rating</option>
        </select>
      </motion.div>

      {/* Reviews List */}
      <motion.div 
        className="space-y-6"
        variants={staggerContainer}
      >
        <AnimatePresence>
          {filteredAndSortedReviews.length === 0 ? (
            [...Array(3)].map((_, i) => (
              <Card key={i}>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-secondary-200 rounded w-1/3 animate-pulse" />
                  <div className="h-4 bg-secondary-200 rounded w-5/6 animate-pulse" />
                  <div className="h-4 bg-secondary-200 rounded w-2/3 animate-pulse" />
                </div>
              </Card>
            ))
          ) : (
            filteredAndSortedReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={staggerItem}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {filteredAndSortedReviews.length === 0 && (
          <motion.div 
            className="text-center py-12"
            variants={fadeIn}
          >
            <ChatBubbleLeftIcon className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
            <p className="text-secondary-600">No reviews found for the selected filters.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Load More Button */}
      {filteredAndSortedReviews.length > 0 && (
        <motion.div 
          className="text-center"
          variants={staggerItem}
        >
          <Button variant="outline" size="lg">
            Load More Reviews
          </Button>
        </motion.div>
      )}

      {/* Write Review Modal */}
      <AnimatePresence>
        {showWriteReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowWriteReview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="write-review-title"
              ref={(node) => {
                if (!node) return;
                // focus first focusable element on open
                const focusable = node.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                focusable?.focus();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setShowWriteReview(false);
                }
              }}
            >
              <h3 id="write-review-title" className="text-lg font-semibold mb-2">Write a Review</h3>
              <p className="text-secondary-600 mb-4">Share your experience with this product to help other customers.</p>

              {/* Rating */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-secondary-900 mb-2">Rating</label>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((r) => (
                    <button
                      key={r}
                      aria-label={`Rate ${r} star${r>1?'s':''}`}
                      onClick={() => setNewReviewForm((f) => ({...f, rating: r}))}
                      className={cn('p-1 rounded', r <= newReviewForm.rating ? 'text-warning-500' : 'text-secondary-300 hover:text-secondary-500')}
                    >
                      <StarIconSolid className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-secondary-900 mb-1">Title</label>
                <input
                  type="text"
                  value={newReviewForm.title}
                  onChange={(e) => setNewReviewForm((f) => ({...f, title: e.target.value}))}
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Summarize your review"
                />
              </div>

              {/* Content */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-secondary-900 mb-1">Review</label>
                <textarea
                  value={newReviewForm.content}
                  onChange={(e) => setNewReviewForm((f) => ({...f, content: e.target.value}))}
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 text-sm h-28 resize-y focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your experience"
                />
              </div>

              {/* Author */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-secondary-900 mb-1">Your name</label>
                <input
                  type="text"
                  value={newReviewForm.author}
                  onChange={(e) => setNewReviewForm((f) => ({...f, author: e.target.value}))}
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="John Doe"
                />
              </div>

              {newReviewError && (
                <p className="text-error-600 text-sm mb-3">{newReviewError}</p>
              )}

              <div className="flex gap-3 justify-end">
                <Button variant="outline" size="sm" onClick={() => setShowWriteReview(false)}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    if (!newReviewForm.title.trim() || !newReviewForm.content.trim() || !newReviewForm.author.trim()) {
                      setNewReviewError('Please fill out all required fields.');
                      return;
                    }
                    setNewReviewError(null);
                    const newReview = {
                      id: Math.random().toString(36).slice(2),
                      rating: newReviewForm.rating,
                      title: newReviewForm.title,
                      content: newReviewForm.content,
                      author: newReviewForm.author,
                      date: new Date().toISOString().slice(0,10),
                      verified: false,
                      helpful: 0,
                      images: [],
                    } as (typeof mockReviews)[number];
                    setNewReviews((prev) => [newReview, ...prev]);
                    setShowWriteReview(false);
                    setNewReviewForm({rating: 5, title: '', content: '', author: ''});
                  }}
                >
                  Submit Review
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ReviewCardProps {
  review: typeof mockReviews[0];
}

function ReviewCard({review}: ReviewCardProps) {
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Review Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <UserCircleIcon className="w-10 h-10 text-secondary-400" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-secondary-900">
                    {review.author}
                  </span>
                  {review.verified && (
                    <Badge variant="success" size="sm">
                      Verified Purchase
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-secondary-600">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
            
            {/* Rating */}
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
          </div>

          {/* Review Content */}
          <div>
            {review.title && (
              <h4 className="font-medium text-secondary-900 mb-2">
                {review.title}
              </h4>
            )}
            <p className="text-secondary-700 leading-relaxed">
              {review.content}
            </p>
          </div>

          {/* Review Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsHelpful(true)}
                className={cn(
                  'flex items-center gap-2 text-sm transition-colors',
                  isHelpful === true 
                    ? 'text-success-600' 
                    : 'text-secondary-600 hover:text-secondary-800'
                )}
              >
                <HandThumbUpIcon className="w-4 h-4" />
                Helpful ({review.helpful})
              </button>
              
              <button
                onClick={() => setIsHelpful(false)}
                className={cn(
                  'flex items-center gap-2 text-sm transition-colors',
                  isHelpful === false 
                    ? 'text-error-600' 
                    : 'text-secondary-600 hover:text-secondary-800'
                )}
              >
                <HandThumbDownIcon className="w-4 h-4" />
                Not Helpful
              </button>
            </div>
            
            <button className="text-sm text-secondary-600 hover:text-secondary-800 transition-colors">
              Report
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
