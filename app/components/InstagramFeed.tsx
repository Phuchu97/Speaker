import {motion} from 'framer-motion';
import {HeartIcon, ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline';
import {Card} from './ui/Card';
import {Badge} from './ui/Badge';
import {Button} from './ui/Button';
import {staggerContainer, staggerItem} from '~/lib/design-system';

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  username: string;
  avatar: string;
}

interface InstagramFeedProps {
  posts?: InstagramPost[];
  title?: string;
}

export function InstagramFeed({
  title = "Shop the Look",
  posts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
      likes: 1247,
      comments: 23,
      caption: 'Love this new speaker! The sound quality is amazing 🔥',
      username: '@sarah_music',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      likes: 892,
      comments: 15,
      caption: 'Perfect for my morning workout routine! 💪',
      username: '@fit_lifestyle',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
      likes: 654,
      comments: 8,
      caption: 'Sleek design that fits perfectly in my setup ✨',
      username: '@tech_lover',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      likes: 432,
      comments: 12,
      caption: 'Best purchase this year! Highly recommend 👏',
      username: '@happy_customer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    }
  ]
}: InstagramFeedProps) {
  return (
    <motion.section
      className="py-16 bg-white"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={staggerItem}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-secondary-900">{title}</h2>
            <Badge variant="primary" size="sm" className="animate-pulse">Live</Badge>
          </div>
          <p className="text-lg text-secondary-600">
            See how real customers style our products
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={staggerContainer}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Instagram post by ${post.username}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-4 text-white">
                      <div className="flex items-center gap-1">
                        <HeartIcon className="w-5 h-5 fill-current" />
                        <span className="font-medium">{post.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                        <span className="font-medium">{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* User info overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src={post.avatar}
                          alt={post.username}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-xs font-semibold text-secondary-900">
                          {post.username}
                        </span>
                      </div>
                      <p className="text-xs text-secondary-700 line-clamp-2">
                        {post.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center" variants={staggerItem}>
          <Button variant="outline" size="lg" className="group">
            <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
            Follow us @ourstore
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
