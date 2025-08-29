import {motion} from 'framer-motion';
import {staggerContainer, staggerItem} from '~/lib/design-system';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
  title?: string;
  className?: string;
}

export function ProductFeatures({features, title = "Why Choose This Product?", className = ''}: ProductFeaturesProps) {
  return (
    <motion.div 
      className={`bg-white rounded-2xl shadow-sm overflow-hidden ${className}`}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">{feature.title}</h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
