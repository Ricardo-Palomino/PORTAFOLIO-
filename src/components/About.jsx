import { useTranslation } from 'react-i18next';

const STACK = ['JavaScript', 'Node.js', 'Express', 'Python', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'Git', 'Scrum'];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-shell">
      <h2 className="section-heading mb-11">
        <span className="accent-italic">{t('about.heading')}</span>
      </h2>

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-14 items-center">
        <div className="space-y-4 text-muted max-w-[62ch]">
          <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
        </div>

        <div className="relative w-full max-w-[240px] aspect-square rounded-3xl overflow-hidden border border-border bg-surface mx-auto md:mx-0 md:justify-self-center">
          <div className="absolute inset-2.5 border border-accent/35 rounded-2xl pointer-events-none z-10" />
          <span className="absolute inset-0 grid place-items-center font-display text-5xl text-muted">
            RP
          </span>
          <img
            src="/img/about.jpg"
            alt={t('about.heading')}
            onError={(e) => e.currentTarget.remove()}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-14 pt-10 border-t border-border">
        <p className="font-mono text-xs text-muted mb-4">{t('about.stackLabel')}</p>
        <ul className="flex flex-wrap gap-2.5">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="text-sm text-muted border border-border rounded-full px-4 py-1.5 hover:border-accent/40 hover:text-ink transition-colors"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
