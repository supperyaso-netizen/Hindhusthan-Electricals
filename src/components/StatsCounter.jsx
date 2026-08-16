import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Years in Business", value: 8, suffix: "+" },
  { label: "Products in Store", value: 2000, suffix: "+" },
  { label: "Happy Customers", value: 3500, suffix: "+" },
  { label: "Brands Available", value: 50, suffix: "+" },
];

export default function StatsCounter() {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stats-cell-group">
              {i > 0 && <span className="stats-divider" aria-hidden="true" />}
              <div className={`stat-card reveal reveal-delay-${i + 1}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
