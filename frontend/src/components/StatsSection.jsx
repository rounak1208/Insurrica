import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Policies Sold", value: 10000, suffix: "+", prefix: "" },
  { label: "Claims Settled", value: 500, suffix: " Cr+", prefix: "\u20B9" },
  { label: "Insurer Partners", value: 50, suffix: "+", prefix: "" },
  { label: "Happy Customers", value: 98, suffix: "%", prefix: "" },
];

const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!startCounting) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };
    countRef.current = requestAnimationFrame(animate);
    return () => {
      if (countRef.current) cancelAnimationFrame(countRef.current);
    };
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({ stat, startCounting }) => {
  const count = useCountUp(stat.value, 2000, startCounting);
  return (
    <div data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`} className="text-center space-y-2">
      <p
        className="text-4xl sm:text-5xl font-bold text-white"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
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
            <StatItem key={i} stat={stat} startCounting={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
