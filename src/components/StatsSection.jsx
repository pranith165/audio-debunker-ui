import { useEffect, useRef, useState } from 'react';
import {
  StatsOuter,
  StatsBg,
  StatsWrapper,
  StatItem,
  StatNumber,
  StatSuffix,
  StatLabel,
  StatDivider,
} from './StatsSection.styled';
import newsroomBg from '../assets/images/newsroom-dark.png';

const STATS = [
  { value: 5, suffix: 'K+', label: 'Claims analyzed' },
  { value: 96, suffix: '%', label: 'Avg. confidence score' },
  { value: 3, suffix: '+', label: 'Sources per check' },
];

function useCountUp(target, duration = 1200, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return started ? count : 0;
}

function StatCounter({ value, suffix, label, started, delay }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const count = useCountUp(value, 900, active);

  return (
    <StatItem>
      <StatNumber>
        {count}{suffix && <StatSuffix>{suffix}</StatSuffix>}
      </StatNumber>
      <StatLabel>{label}</StatLabel>
    </StatItem>
  );
}

function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <StatsOuter ref={ref}>
      <StatsBg src={newsroomBg} alt="" loading="lazy" />
      <StatsWrapper>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ display: 'contents' }}>
            <StatCounter {...s} started={started} delay={i * 120} />
            {i < STATS.length - 1 && <StatDivider />}
          </div>
        ))}
      </StatsWrapper>
    </StatsOuter>
  );
}

export default StatsSection;
