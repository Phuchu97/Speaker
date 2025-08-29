import {motion} from 'framer-motion';
import {
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
  CreditCardIcon,
  StarIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {Card} from './ui/Card';
import {Badge} from './ui/Badge';
import {staggerContainer, staggerItem} from '~/lib/design-system';

interface TrustSignalsProps {
  variant?: 'product' | 'homepage' | 'checkout';
  showStats?: boolean;
}

export function TrustSignals({variant = 'homepage', showStats = true}: TrustSignalsProps) {
  const trustFeatures = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: '100% Secure',
      description: 'SSL encrypted checkout',
      color: 'text-success-600',
      bg: 'bg-success-100',
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'On orders over $50',
      color: 'text-primary-600',
      bg: 'bg-primary-100',
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: '30-Day Returns',
      description: 'No questions asked',
      color: 'text-warning-600',
      bg: 'bg-warning-100',
    },
    {
      icon: <CreditCardIcon className="w-6 h-6" />,
      title: 'Pay Your Way',
      description: 'Multiple payment options',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
  ];

  const socialProof = [
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      value: '50K+',
      label: 'Happy Customers',
      color: 'text-primary-600',
    },
    {
      icon: <StarIcon className="w-6 h-6 fill-current" />,
      value: '4.8',
      label: 'Average Rating',
      color: 'text-warning-500',
    },
    {
      icon: <CheckBadgeIcon className="w-6 h-6" />,
      value: '99.9%',
      label: 'Satisfaction Rate',
      color: 'text-success-600',
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6" />,
      value: '40+',
      label: 'Countries Served',
      color: 'text-blue-600',
    },
  ];

  if (variant === 'product') {
    return (
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {trustFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="flex items-center gap-2 p-3 bg-secondary-25 rounded-lg group-hover:bg-secondary-50 transition-colors">
              <div className={`${feature.bg} ${feature.color} p-1.5 rounded-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-secondary-900">{feature.title}</div>
                <div className="text-xs text-secondary-600">{feature.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (variant === 'checkout') {
    return (
      <motion.div
        className="bg-gradient-to-r from-success-25 to-primary-25 p-6 rounded-xl border border-success-200"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-2 gap-4">
          {trustFeatures.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-center gap-3"
            >
              <div className={`${feature.bg} ${feature.color} p-2 rounded-lg`}>
                {feature.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary-900">{feature.title}</div>
                <div className="text-xs text-secondary-600">{feature.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="py-16 bg-secondary-25"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Proof Stats */}
        {showStats && (
          <motion.div className="mb-16" variants={staggerItem}>
            <Card className="bg-gradient-to-r from-primary-600 to-purple-600 text-white border-none shadow-xl">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Trusted by Thousands</h3>
                  <p className="text-primary-100">Join our community of satisfied customers worldwide</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {socialProof.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      variants={staggerItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <div className={`${stat.color} bg-white/20 p-3 rounded-full`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-primary-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Trust Features */}
        <motion.div className="text-center mb-12" variants={staggerItem}>
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">Why Choose Us</h3>
          <p className="text-lg text-secondary-600">Your satisfaction is our top priority</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card hover className="h-full text-center p-6 group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className={`${feature.bg} ${feature.color} p-4 rounded-full group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div className="mt-16 text-center" variants={staggerItem}>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Badge variant="outline" className="flex items-center gap-2 px-4 py-2">
              <CheckBadgeIcon className="w-4 h-4 text-success-600" />
              Verified Business
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 px-4 py-2">
              <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
              SSL Secured
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 px-4 py-2">
              <StarIcon className="w-4 h-4 text-warning-500 fill-current" />
              5-Star Rated
            </Badge>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
