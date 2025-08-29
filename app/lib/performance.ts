import React from 'react';

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Core Web Vitals Observer
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.metrics.set('LCP', entry.startTime);
            this.reportMetric('LCP', entry.startTime);
          }
        }
      });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            this.metrics.set('FID', fid);
            this.reportMetric('FID', fid);
          }
        }
      });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.set('CLS', clsValue);
      });

      try {
        lcpObserver.observe({entryTypes: ['largest-contentful-paint']});
        fidObserver.observe({entryTypes: ['first-input']});
        clsObserver.observe({entryTypes: ['layout-shift']});
        
        this.observers.push(lcpObserver, fidObserver, clsObserver);
      } catch (e) {
        console.warn('Performance Observer not supported:', e);
      }
    }

    // Navigation Timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            TTFB: navigation.responseStart - navigation.requestStart,
            FCP: this.getFirstContentfulPaint(),
            DOMLoad: navigation.domContentLoadedEventEnd - (navigation as any).navigationStart,
            WindowLoad: navigation.loadEventEnd - (navigation as any).navigationStart,
          };

          Object.entries(metrics).forEach(([key, value]) => {
            this.metrics.set(key, value);
            this.reportMetric(key, value);
          });
        }
      }, 0);
    });
  }

  private getFirstContentfulPaint(): number {
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    return fcpEntry ? fcpEntry.startTime : 0;
  }

  public reportMetric(name: string, value: number) {
    // Report to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'performance',
        event_label: name,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  }

  // Manual performance tracking
  startTiming(label: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const duration = performance.now() - startTime;
      this.metrics.set(label, duration);
      this.reportMetric(label, duration);
    };
  }

  // Resource timing analysis
  getResourceMetrics() {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const metrics = {
      totalResources: resources.length,
      images: resources.filter(r => r.initiatorType === 'img').length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      stylesheets: resources.filter(r => r.initiatorType === 'link').length,
      largestResource: Math.max(...resources.map(r => r.transferSize || 0)),
      averageLoadTime: resources.reduce((sum, r) => sum + (r.responseEnd - r.requestStart), 0) / resources.length,
    };

    return metrics;
  }

  // Get all collected metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Cleanup observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Caching utilities
export class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, {data: any; timestamp: number; ttl: number}> = new Map();

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  // Set item in cache with TTL (time to live) in milliseconds
  set(key: string, data: any, ttl: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });

    // Cleanup expired items periodically
    if (this.cache.size > 100) {
      this.cleanup();
    }
  }

  // Get item from cache
  get(key: string): any | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  // Remove item from cache
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  // Clear all cache
  clear(): void {
    this.cache.clear();
  }

  // Remove expired items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;

    for (const item of this.cache.values()) {
      if (now - item.timestamp > item.ttl) {
        expired++;
      } else {
        active++;
      }
    }

    return {
      total: this.cache.size,
      active,
      expired,
    };
  }
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    });
  }
}

// Image preloading utility
export function preloadImages(urls: string[], priority: 'high' | 'low' = 'low'): Promise<void[]> {
  const promises = urls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      if (priority === 'high') {
        link.setAttribute('fetchpriority', 'high');
      }
      
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to preload image: ${url}`));
      
      document.head.appendChild(link);
    });
  });

  return Promise.all(promises);
}

// Critical CSS inlining
export function inlineCriticalCSS(css: string) {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
}

// Lazy loading utility for components
export function createLazyComponent(
  importFunc: () => Promise<{default: React.ComponentType<any>}>,
  fallback?: React.ComponentType<any>
) {
  return React.lazy(async () => {
    const start = performance.now();

    try {
      const module = await importFunc();
      const loadTime = performance.now() - start;

      // Report component load time
      PerformanceMonitor.getInstance().reportMetric('component_load_time', loadTime);

      return module as {default: React.ComponentType<any>};
    } catch (error) {
      console.error('Failed to load component:', error);

      if (fallback) {
        return {default: fallback as React.ComponentType<any>};
      }

      throw error;
    }
  });
}

// Bundle size analyzer
export function analyzeBundleSize() {
  if (typeof window === 'undefined') return;

  const scripts = Array.from(document.scripts);
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));

  const analysis = {
    scripts: scripts.map(script => ({
      src: script.src,
      size: script.textContent?.length || 0,
      external: !!script.src,
    })),
    stylesheets: stylesheets.map(link => ({
      href: (link as HTMLLinkElement).href,
      external: true,
    })),
    totalScriptSize: scripts.reduce((sum, script) => sum + (script.textContent?.length || 0), 0),
  };

  console.table(analysis);
  return analysis;
}

// Performance budget checker
interface PerformanceBudget {
  LCP: number; // ms
  FID: number; // ms
  CLS: number; // score
  totalSize: number; // bytes
  imageSize: number; // bytes
  scriptSize: number; // bytes
}

export function checkPerformanceBudget(budget: PerformanceBudget) {
  const monitor = PerformanceMonitor.getInstance();
  const metrics = monitor.getMetrics();
  const resources = monitor.getResourceMetrics();

  const results = {
    LCP: {
      actual: metrics.LCP,
      budget: budget.LCP,
      passed: metrics.LCP <= budget.LCP,
    },
    FID: {
      actual: metrics.FID,
      budget: budget.FID,
      passed: metrics.FID <= budget.FID,
    },
    CLS: {
      actual: metrics.CLS,
      budget: budget.CLS,
      passed: metrics.CLS <= budget.CLS,
    },
    resources: {
      images: resources.images,
      scripts: resources.scripts,
      total: resources.totalResources,
    },
  };

  return results;
}

// React hooks for performance monitoring
import {useEffect, useRef} from 'react';

export function usePerformanceMonitor(componentName: string) {
  const startTime = useRef<number>(0);

  useEffect(() => {
    startTime.current = performance.now();

    return () => {
      const renderTime = performance.now() - startTime.current;
      PerformanceMonitor.getInstance().reportMetric(`${componentName}_render_time`, renderTime);
    };
  }, [componentName]);
}

export function useCache<T>(key: string, fetcher: () => Promise<T>, ttl?: number) {
  const cache = CacheManager.getInstance();
  const [data, setData] = React.useState<T | null>(cache.get(key));
  const [loading, setLoading] = React.useState(!data);
  const [error, setError] = React.useState<Error | null>(null);

  useEffect(() => {
    if (data) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetcher();
        cache.set(key, result, ttl);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, data, fetcher, ttl]);

  return {data, loading, error};
}

// Initialize performance monitoring
export function initializePerformance() {
  if (typeof window !== 'undefined') {
    // Initialize performance monitor
    PerformanceMonitor.getInstance();
    
    // Register service worker
    registerServiceWorker();
    
    // Set up error tracking
    window.addEventListener('error', (event) => {
      console.error('JavaScript error:', event.error);
      // Report to error tracking service
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Report to error tracking service
    });
  }
}
