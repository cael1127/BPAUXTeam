import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Professional UX practice: Reveal elements as they enter the viewport
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

/**
 * Hook for staggered animations
 * Professional UX practice: Animate multiple elements with delays
 */
export const useStaggeredReveal = (count, baseDelay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index));
            }, index * baseDelay);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [baseDelay]);

  const registerElement = (index) => (element) => {
    if (element && observerRef.current) {
      element.dataset.index = index;
      observerRef.current.observe(element);
    }
  };

  return [registerElement, visibleItems];
};

export default useScrollReveal;

