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
  const itemsLengthRef = useRef(items.length);

  useEffect(() => {
    // Only reset if the items length actually changed
    if (itemsLengthRef.current !== items.length) {
      setVisibleItems(new Set());
      itemsLengthRef.current = items.length;
    }

    // Return early if no items
    if (items.length === 0) {
      return;
    }

    // Ensure refs array matches items length
    refs.current = new Array(items.length).fill(null);
    
    const observers = items.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * delay);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );
    });

    // Wait for refs to be set from JSX
    const timeoutId = setTimeout(() => {
      refs.current.forEach((ref, index) => {
        if (ref && observers[index]) {
          observers[index].observe(ref);
        }
      });
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer, index) => {
        if (refs.current[index]) {
          observer.unobserve(refs.current[index]);
        }
      });
    };
  }, [items.length, delay]);

  return [refs, visibleItems];
};
