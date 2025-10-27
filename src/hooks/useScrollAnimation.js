import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first intersection to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (items, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const refs = useRef([]);
  const observersRef = useRef([]);
  const prevItemsLengthRef = useRef(items.length);

  // Reset when items length changes
  useEffect(() => {
    if (prevItemsLengthRef.current !== items.length) {
      setVisibleItems(new Set());
      prevItemsLengthRef.current = items.length;
    }
  }, [items.length]);

  // Create observers when refs are set
  useEffect(() => {
    // Use requestAnimationFrame to ensure refs are set
    const rafId = requestAnimationFrame(() => {
      // Clean up old observers
      observersRef.current.forEach(observer => {
        if (observer) observer.disconnect();
      });
      observersRef.current = [];

      // Create new observers for each ref
      refs.current.forEach((ref, index) => {
        if (ref && index < items.length) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleItems(prev => new Set([...prev, index]));
                }, index * delay);
                observer.disconnect();
              }
            },
            {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px',
            }
          );
          
          observer.observe(ref);
          observersRef.current[index] = observer;
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      observersRef.current.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, [items.length, delay]);

  return [refs, visibleItems];
};
