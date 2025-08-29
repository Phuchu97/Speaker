import {motion} from 'framer-motion';
import {staggerItem} from '~/lib/design-system';

interface ProductBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function ProductBanner({
  title,
  description,
  buttonText = "Shop Now",
  onButtonClick,
  className = ''
}: ProductBannerProps) {
  return (
    <motion.div 
      className={`bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-2xl overflow-hidden ${className}`}
      variants={staggerItem}
      initial="initial"
      animate="animate"
    >
      <div className="p-8 sm:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-secondary-200 text-lg mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        {buttonText && (
          <button 
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-secondary-800"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </motion.div>
  );
}
