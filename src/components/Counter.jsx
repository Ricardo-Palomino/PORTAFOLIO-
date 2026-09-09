import { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Counter({ target, className = '' }) {
  const [ref, isVisible] = useScrollAnimation(0.6);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isVisible, target]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
