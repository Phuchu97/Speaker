import {Suspense, useState, useEffect} from 'react';
import {Await, NavLink} from 'react-router';
import {motion, AnimatePresence} from 'framer-motion';
import {
  EnvelopeIcon,
  ChevronUpIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      // Mock newsletter signup - replace with real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail('');
      
      // Analytics tracking
      console.debug('[track]', 'NewsletterSignup', {email: email.trim()});
    } catch (error) {
      console.error('Newsletter signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <>
            <footer className="rounded-t-4xl bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900 text-white">
              {/* Main Footer Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  
                  {/* Company Logo & Info */}
                  <div className="lg:col-span-1 space-y-6">
                    <motion.div 
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      className="space-y-4"
                    >
                      {header.shop.brand?.logo?.image?.url ? (
                        <img 
                          src={header.shop.brand.logo.image.url} 
                          alt={header.shop.name}
                          className="h-10 w-auto"
                        />
                      ) : (
                        <div className="text-2xl font-bold text-white">
                          {header.shop.name}
                        </div>
                      )}
                      
                      <p className="text-purple-200 text-sm leading-relaxed">
                        {header.shop.description || 'Quality products with exceptional service and unbeatable value.'}
                      </p>
                    </motion.div>
                  </div>

                  {/* Quick Links */}
                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.1}}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white">Shop</h3>
                    <ul className="space-y-3">
                      {[
                        { name: 'All Products', href: '/collections' },
                        { name: 'New Arrivals', href: '/collections/new' },
                        { name: 'Best Sellers', href: '/collections/bestsellers' },
                        { name: 'Sale', href: '/collections/sale' },
                      ].map((item) => (
                        <li key={item.name}>
                          <NavLink 
                            to={item.href}
                            className="!text-purple-300 hover:!text-white transition-colors text-sm"
                            prefetch="intent"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Support */}
                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.2}}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white">Support</h3>
                    <ul className="space-y-3">
                      {[
                        { name: 'Contact Us', href: '/pages/contact' },
                        { name: 'Shipping Info', href: '/policies/shipping-policy' },
                        { name: 'Returns', href: '/policies/refund-policy' },
                        { name: 'Size Guide', href: '/pages/size-guide' },
                      ].map((item) => (
                        <li key={item.name}>
                          <NavLink 
                            to={item.href}
                            className="!text-purple-300 hover:!text-white transition-colors text-sm"
                            prefetch="intent"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Newsletter & Social */}
                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.3}}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
                      
                      {/* Newsletter */}
                      {isSubscribed ? (
                        <motion.div 
                          className="bg-green-500/20 border border-green-400/30 rounded-lg p-4"
                          initial={{opacity: 0, scale: 0.95}}
                          animate={{opacity: 1, scale: 1}}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-green-300 text-sm font-medium">
                              Thanks for subscribing!
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                          <div>
                            <input
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 bg-purple-800/50 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                          >
                            {isLoading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Subscribing...</span>
                              </>
                            ) : (
                              <>
                                <EnvelopeIcon className="h-4 w-4" />
                                <span>Subscribe</span>
                              </>
                            )}
                          </button>
                          <p className="text-purple-400 text-xs">
                            Get 10% off your first order
                          </p>
                        </form>
                      )}
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                      <h4 className="text-white font-medium">Follow Us</h4>
                      <div className="flex space-x-4">
                        {[
                          { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                          { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                          { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                        ].map((social) => (
                          <a
                            key={social.name}
                            href="#"
                            className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors group"
                            aria-label={social.name}
                          >
                            <svg className="h-5 w-5 text-purple-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d={social.icon} />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-purple-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    
                    {/* Copyright */}
                    <div className="text-purple-400 text-sm">
                      © {new Date().getFullYear()} {header.shop.name}. All rights reserved.
                    </div>

                    {/* Legal Links */}
                    {footer?.menu && header.shop.primaryDomain?.url && (
                      <FooterMenu
                        menu={footer.menu}
                        primaryDomainUrl={header.shop.primaryDomain.url}
                        publicStoreDomain={publicStoreDomain}
                      />
                    )}
                  </div>
                </div>
              </div>
            </footer>

            {/* Back to Top Button - Only show when scrolled */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
                  aria-label="Back to top"
                >
                  <ChevronUpIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <nav className="flex flex-wrap justify-center gap-4" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
            
        const isExternal = !url.startsWith('/');
        
        return isExternal ? (
          <a 
            href={url} 
            key={item.id} 
            rel="noopener noreferrer" 
            target="_blank"
            className="!text-purple-400 hover:!text-white transition-colors text-sm flex items-center space-x-1"
          >
            <span>{item.title}</span>
            <ArrowTopRightOnSquareIcon className="h-3 w-3" />
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            className="!text-purple-400 hover:!text-white transition-colors text-sm"
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};