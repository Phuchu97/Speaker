import {motion} from 'framer-motion';
import {staggerItem} from '~/lib/design-system';

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: string;
  date: string;
  verified: boolean;
  helpful: number;
}

interface CompactProductReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingDistribution: Record<number, number>;
  onViewAllReviews?: () => void;
  className?: string;
}

export function CompactProductReviews({
  reviews,
  averageRating,
  totalReviews,
  ratingDistribution,
  onViewAllReviews,
  className = ''
}: CompactProductReviewsProps) {
  const featuredReview = reviews[0]; // First review as featured

  return (
    <motion.div 
      className={`bg-white rounded-2xl shadow-sm overflow-hidden ${className}`}
      variants={staggerItem}
      initial="initial"
      animate="animate"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary-900">
            Customer Reviews
          </h2>
          <button 
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
            onClick={onViewAllReviews}
          >
            View All Reviews
          </button>
        </div>
        
        {/* Compact Review Summary */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-900">{averageRating.toFixed(1)}</div>
            <div className="flex items-center justify-center mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm text-secondary-600">Based on {totalReviews} reviews</div>
          </div>
          
          <div className="flex-1">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingDistribution[rating] || 0;
                const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
                return (
                  <div key={rating} className="flex items-center">
                    <span className="text-sm text-secondary-600 w-8">{rating}★</span>
                    <div className="flex-1 bg-secondary-200 rounded-full h-2 mx-3">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-secondary-600 w-12">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Review */}
        {featuredReview && (
          <div className="bg-secondary-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-semibold text-sm">
                  {featuredReview.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-secondary-600">{featuredReview.author}</span>
                  <span className="text-xs text-secondary-500">• {featuredReview.date}</span>
                </div>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  "{featuredReview.content}"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
