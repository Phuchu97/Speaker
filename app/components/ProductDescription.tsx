import {motion} from 'framer-motion';
import {staggerItem} from '~/lib/design-system';

interface ProductDescriptionProps {
  description?: string;
  features?: string[];
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export function ProductDescription({
  description,
  features = [],
  imageUrl,
  imageAlt = "Product Lifestyle Image",
  className = ''
}: ProductDescriptionProps) {
  return (
    <motion.div 
      className={`bg-white rounded-2xl shadow-sm overflow-hidden ${className}`}
      variants={staggerItem}
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 flex items-center justify-center">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="w-full h-64 object-cover rounded-lg"
            />
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary-200 rounded-2xl mb-4 mx-auto flex items-center justify-center">
                <svg className="w-16 h-16 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-secondary-500 text-sm">{imageAlt}</p>
              <p className="text-secondary-400 text-xs">(You can replace this with your actual image)</p>
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Product Details
          </h2>
          <div className="prose prose-secondary max-w-none">
            <p className="text-secondary-700 mb-4">
              {description || 'Discover the perfect blend of style, comfort, and functionality. This product is designed to meet your everyday needs while maintaining the highest standards of quality.'}
            </p>
            
            {/* Key Features */}
            {features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
