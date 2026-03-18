import { useEffect, useState, useRef, useCallback } from "react";

const stats = [
  { label: "Policies Sold", value: 10000, suffix: "+", prefix: "" },
  { label: "Claims Settled", value: 500, suffix: " Cr+", prefix: "\u20B9" },
  { label: "Insurer Partners", value: 50, suffix: "+", prefix: "" },
  { label: "Happy Customers", value: 98, suffix: "%", prefix: "" },
];

const StatItem = ({ stat, startCounting }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);
  const rafRef = useRef(null);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * stat.value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(stat.value);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [stat.value]);

  useEffect(() => {
    if (startCounting && !hasAnimated.current) {
      animate();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startCounting, animate]);

  return (
    <div data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`} className="text-center space-y-2">
      <p
        className="text-4xl sm:text-5xl font-bold text-white tabular-nums"
        style={{ fontFamily: "Outfit, sans-serif", fontVariantNumeric: "tabular-nums" }}
      >
        {stat.prefix}{displayValue.toLocaleString()}{stat.suffix}
      </p>
      <p className="text-sm text-white/70 uppercase tracking-wider font-medium">
        {stat.label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observerRef.current.observe(el);
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="px-6 md:px-12 lg:px-24 py-20 md:py-28"
      style={{ backgroundColor: "#1A1A4E" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} startCounting={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
