import useScrollAnimation from '../hooks/useScrollAnimation';

const SEGMENTS = 5;

export default function SkillMeter({ name, level, tier }) {
  const [ref, isVisible] = useScrollAnimation(0.4);
  const filled = Math.round((level / 100) * SEGMENTS);

  return (
    <div
      ref={ref}
      className="card flex flex-col gap-3.5 p-5 hover:border-accent/40 transition-colors"
    >
      <p className="text-sm font-medium leading-snug">{name}</p>

      <div className="flex gap-1.5">
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
              isVisible && i < filled ? 'bg-accent' : 'bg-border'
            }`}
            style={{ transitionDelay: isVisible ? `${i * 90}ms` : '0ms' }}
          />
        ))}
      </div>

      <p className="font-mono text-[11px] text-muted">{tier}</p>
    </div>
  );
}
