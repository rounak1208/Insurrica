import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({ children, className = "", delay = 0, threshold = 0.01 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Small timeout to wait for Page Redirect Scroll to Top to settle
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );

      // Initial check in case it's already in view after scroll reset
      const rect = currentRef.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        observer.observe(currentRef);
      }

      return () => observer.disconnect();
    }, 10);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible 
          ? "animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" 
          : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
