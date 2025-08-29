import {motion} from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon,
  ChevronUpIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import {
  LinkIcon,
} from '@heroicons/react/24/solid';
import {Link} from 'react-router';
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {TrustSignals} from './TrustSignals';
import {staggerContainer, staggerItem, fadeIn, slideUp} from '~/lib/design-system';

interface PremiumFooterProps {
  footer?: any; // Footer data from Shopify
  shop: {
    name: string;
    brand?: {
      logo?: {
        image?: {
          url: string;
        };
      };
    };
  };
}

export function PremiumFooter({footer, shop}: PremiumFooterProps) {
  // Footer sections
  const footerSections = [
    {
      title: 'Shop',
      links: [
        {title: 'All Products', url: '/collections'},
        {title: 'New Arrivals', url: '/collections/new'},
        {title: 'Best Sellers', url: '/collections/bestsellers'},
        {title: 'Sale Items', url: '/collections/sale'},
        {title: 'Gift Cards', url: '/products/gift-card'},
        {title: 'Wishlist', url: '/account'},
      ]
    },
    {
      title: 'Support',
      links: [
        {title: 'Contact Us', url: '/pages/contact'},
        {title: 'Size Guide', url: '/pages/size-guide'},
        {title: 'Shipping Info', url: '/pages/shipping'},
        {title: 'Returns', url: '/pages/returns'},
        {title: 'FAQ', url: '/pages/faq'},
        {title: 'Live Chat', url: '/pages/contact'},
      ]
    },
    {
      title: 'Company',
      links: [
        {title: 'About Us', url: '/pages/about'},
        {title: 'Careers', url: '/pages/careers'},
        {title: 'Press', url: '/pages/press'},
        {title: 'Sustainability', url: '/pages/sustainability'},
        {title: 'Blog', url: '/blogs/news'},
        {title: 'Store Locator', url: '/pages/store-locator'},
      ]
    },
    {
      title: 'Legal',
      links: [
        {title: 'Privacy Policy', url: '/policies/privacy-policy'},
        {title: 'Terms of Service', url: '/policies/terms-of-service'},
        {title: 'Refund Policy', url: '/policies/refund-policy'},
        {title: 'Shipping Policy', url: '/policies/shipping-policy'},
        {title: 'Cookie Policy', url: '/policies/cookie-policy'},
        {title: 'Accessibility', url: '/pages/accessibility'},
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: LinkIcon,
      url: 'https://facebook.com',
      color: 'hover:text-blue-500 hover:bg-blue-500/10'
    },
    {
      name: 'Instagram', 
      icon: LinkIcon,
      url: 'https://instagram.com',
      color: 'hover:text-pink-500 hover:bg-pink-500/10'
    },
    {
      name: 'Twitter',
      icon: LinkIcon,
      url: 'https://twitter.com', 
      color: 'hover:text-sky-500 hover:bg-sky-500/10'
    },
    {
      name: 'YouTube',
      icon: LinkIcon,
      url: 'https://youtube.com',
      color: 'hover:text-red-500 hover:bg-red-500/10'
    },
    {
      name: 'LinkedIn',
      icon: LinkIcon,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600 hover:bg-blue-600/10'
    },
    {
      name: 'TikTok',
      icon: LinkIcon,
      url: 'https://tiktok.com',
      color: 'hover:text-purple-500 hover:bg-purple-500/10'
    }
  ];

  const trustFeatures = [
    {
      icon: ShieldCheckIcon,
      title: "Secure Shopping",
      description: "256-bit SSL encryption"
    },
    {
      icon: TruckIcon,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Always here to help"
    },
    {
      icon: StarIcon,
      title: "Premium Quality",
      description: "100% satisfaction guaranteed"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Newsletter Section */}
      <motion.section
        className="relative bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              variants={staggerItem}
            >
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                Newsletter
              </Badge>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent"
              variants={staggerItem}
            >
              Stay in the Loop
            </motion.h2>
            
            <motion.p
              className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={staggerItem}
            >
              Get exclusive offers, new product alerts, and style inspiration delivered to your inbox. 
              Join 50,000+ satisfied customers who never miss out on the best deals.
            </motion.p>
            
            <motion.div
              className="max-w-lg mx-auto mb-8"
              variants={staggerItem}
            >
              <form className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/15 border-white/30 text-white placeholder:text-white/60 flex-1 backdrop-blur-sm"
                  variant="filled"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                  className="bg-white text-primary-600 hover:bg-white/90 shadow-lg"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-primary-200 mt-4">
                By subscribing, you agree to our{' '}
                <Link to="/policies/privacy-policy" className="underline hover:text-white">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/policies/terms-of-service" className="underline hover:text-white">
                  Terms of Service
                </Link>
              </p>
            </motion.div>

            {/* Newsletter Benefits */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={staggerContainer}
            >
              {[
                {text: 'Exclusive Discounts', icon: '🎁'},
                {text: 'Early Access', icon: '⭐'},
                {text: 'Style Tips', icon: '💡'},
                {text: 'New Arrivals', icon: '🆕'},
                {text: 'VIP Events', icon: '👑'}
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  variants={staggerItem}
                  custom={index}
                  whileHover={{scale: 1.05, y: -2}}
                >
                  <Badge
                    variant="outline"
                    className="bg-white/15 text-white border-white/30 backdrop-blur-sm px-4 py-2"
                  >
                    <span className="mr-2">{benefit.icon}</span>
                    {benefit.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Features Section */}
      <motion.section
        className="py-16 bg-secondary-800/50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                custom={index}
                className="text-center group"
                whileHover={{y: -5}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-secondary-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Footer Content */}
      <motion.section
        className="py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              variants={staggerItem}
            >
              {/* Logo */}
              <div className="mb-8">
                {shop.brand?.logo?.image?.url ? (
                  <img
                    src={shop.brand.logo.image.url}
                    alt={shop.name}
                    className="h-12 w-auto"
                  />
                ) : (
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                    {shop.name}
                  </div>
                )}
              </div>

              <p className="text-secondary-300 mb-8 leading-relaxed text-lg">
                Discover premium products with exceptional quality and style. 
                We're committed to delivering the best shopping experience with 
                outstanding customer service and innovative solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <MapPinIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-secondary-300 text-sm">Address</p>
                    <p className="text-white">123 Main Street, City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <PhoneIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-secondary-300 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-secondary-300 text-sm">Email</p>
                    <p className="text-white">hello@yourstore.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.name}`}
                      className={`w-12 h-12 bg-secondary-700/50 rounded-full flex items-center justify-center text-secondary-400 ${social.color} transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500/70 focus:ring-offset-2 focus:ring-offset-secondary-900`}
                      whileHover={{scale: 1.1, y: -2}}
                      whileTap={{scale: 0.95}}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={staggerItem}
                custom={sectionIndex}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.title}
                      variants={fadeIn}
                      custom={linkIndex}
                    >
                      <Link
                        to={link.url}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform inline-block">
                          {link.title}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* App Download Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-primary-600/20 to-purple-600/20 border-t border-secondary-700/50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              variants={staggerItem}
            >
              <DevicePhoneMobileIcon className="w-6 h-6 text-primary-400" />
              <Badge variant="outline" className="bg-primary-500/20 text-primary-300 border-primary-500/30">
                Mobile App
              </Badge>
            </motion.div>
            
            <motion.h3
              className="text-2xl font-bold mb-4 text-white"
              variants={staggerItem}
            >
              Shop on the Go
            </motion.h3>
            
            <motion.p
              className="text-secondary-300 mb-8 max-w-2xl mx-auto"
              variants={staggerItem}
            >
              Download our mobile app for a seamless shopping experience with exclusive mobile-only offers.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={staggerItem}
            >
              <Button
                variant="outline"
                className="bg-white text-secondary-900 hover:bg-white/90 border-white"
              >
                <span className="text-xs">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </Button>
              
              <Button
                variant="outline"
                className="bg-white text-secondary-900 hover:bg-white/90 border-white"
              >
                <span className="text-xs">Get it on</span>
                <span className="text-sm font-semibold">Google Play</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Signals */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        <TrustSignals variant="checkout" showStats={false} />
      </motion.section>

      {/* Bottom Bar */}
      <motion.section
        className="border-t border-secondary-800 py-8"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-secondary-400 text-sm">
              <span>© 2024 {shop.name}. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span>by our team</span>
              </div>
            </div>

            {/* Language & Currency Selector */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <GlobeAltIcon className="w-4 h-4 text-secondary-400" />
                <select className="bg-transparent text-secondary-400 text-sm border-none focus:ring-0">
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="w-4 h-4 text-secondary-400" />
                <select className="bg-transparent text-secondary-400 text-sm border-none focus:ring-0">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-secondary-400 text-sm">We accept:</span>
              <div className="flex items-center gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((method) => (
                  <Badge
                    key={method}
                    variant="outline"
                    size="sm"
                    className="text-xs border-secondary-700 text-secondary-400 bg-secondary-800/50"
                  >
                    {method}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        whileHover={{scale: 1.1, y: -2}}
        whileTap={{scale: 0.95}}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1}}
      >
        <ChevronUpIcon className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
