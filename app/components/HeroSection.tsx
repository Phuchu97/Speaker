import {useState, useEffect} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {heroTextReveal, staggerContainer, staggerItem} from '~/lib/design-system';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  backgroundVideo?: string;
  backgroundImage?: string;
  stats?: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
}

export function HeroSection({
  title = "Discover Amazing Products",
  subtitle = "Premium Quality, Exceptional Style",
  description = "Shop the latest trends and find your perfect style. Quality products, exceptional service, delivered with care.",
  ctaPrimary = { text: "Shop Now", link: "/collections" },
  ctaSecondary = { text: "Watch Story", link: "/pages/about" },
  backgroundVideo = "https://cdn.shopify.com/videos/c/o/v/fbb140fd379149dc8cd5b6e72c4d32ec.mp4",
  backgroundImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop",
  stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "4.9", label: "Average Rating" },
    { value: "1000+", label: "Products" }
  ]
}: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [useVideo, setUseVideo] = useState(true);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Animated counters
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const timeouts = stats.map((stat, index) => {
      return setTimeout(() => {
        animateCounter(index, stat.value);
      }, index * 200 + 500);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const animateCounter = (index: number, target: string) => {
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      
      setCounters(prev => {
        const newCounters = [...prev];
        newCounters[index] = Math.floor(current);
        return newCounters;
      });
    }, duration / steps);
  };

  const formatCounterValue = (value: number, original: string) => {
    if (original.includes('K')) return `${(value / 1000).toFixed(1)}K+`;
    if (original.includes('.')) return (value / 10).toFixed(1);
    return value.toString() + (original.includes('+') ? '+' : '');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        {useVideo ? (
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              onError={() => setUseVideo(false)}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            
            {/* Video Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                icon={isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
              />
              <Button
                variant="ghost"
                size="sm"
                icon={isMuted ? <SpeakerXMarkIcon className="w-4 h-4" /> : <SpeakerWaveIcon className="w-4 h-4" />}
                onClick={() => setIsMuted(!isMuted)}
                className="bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
              />
            </div>
          </div>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        style={{ opacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="flex justify-center">
            <Badge 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm"
            >
              ✨ New Collection Available
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.div variants={heroTextReveal}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block">{subtitle}</span>
              <span className="block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={staggerItem}
          >
            <Button
              variant="primary"
              size="xl"
              className="bg-primary-600 hover:bg-primary-700 shadow-2xl hover:shadow-primary-500/25 hover:scale-105 transition-all duration-300"
            >
              <a href={ctaPrimary.link} className="flex items-center gap-2">
                {ctaPrimary.text}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <a href={ctaSecondary.link} className="flex items-center gap-2">
                <PlayIcon className="w-5 h-5" />
                {ctaSecondary.text}
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-16"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={staggerItem}
                custom={index}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 100 }}
                >
                  {formatCounterValue(counters[index], stat.value)}
                </motion.div>
                <div className="text-gray-300 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          <ChevronDownIcon className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
