import { useEffect, useRef, useState } from 'react';

/**
 * Devuelve una ref para asignar a un elemento y un booleano que pasa a
 * true una sola vez, cuando ese elemento entra en el viewport.
 * Se usa para disparar animaciones (barras de habilidades, contadores)
 * solo cuando el usuario realmente las va a ver.
 */
export default function useScrollAnimation(threshold = 0.4) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
