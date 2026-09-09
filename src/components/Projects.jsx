import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

const SLUGS = ['gymmaster', 'innova', 'dataflix', 'shopverse', 'foodstars'];

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true });
  const [brokenImages, setBrokenImages] = useState({});

  return (
    <section id="projects" className="section-shell">
      <h2 className="section-heading mb-2">
        <span className="accent-italic">{t('projects.heading')}</span>
      </h2>
      <p className="text-muted max-w-[52ch] mb-11">{t('projects.subtitle')}</p>

      <div className="flex flex-col">
        {items.map((proj, i) => (
          <article
            key={proj.title}
            className="grid md:grid-cols-[260px_1fr] gap-9 py-9 border-t border-border first:border-t-0"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden project-media">
              {!brokenImages[i] ? (
                <img
                  src={`/img/${SLUGS[i]}.jpg`}
                  alt={proj.title}
                  onError={() => setBrokenImages((prev) => ({ ...prev, [i]: true }))}
                  className="project-media-img project-media-img-soft"
                />
              ) : (
                <div className="project-media-placeholder">
                  <span className="project-media-placeholder-text">
                    {proj.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="project-media-sheen" aria-hidden="true" />
            </div>

            <div>
              <h3 className="font-display text-xl mb-4">{proj.title}</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-muted mb-1.5">
                    {t('projects.problemLabel')}
                  </p>
                  <p className="text-sm text-muted max-w-[42ch]">{proj.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-accent mb-1.5">
                    {t('projects.solutionLabel')}
                  </p>
                  <p className="text-sm text-muted max-w-[42ch]">{proj.solution}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 mb-5">
                {proj.tags.map((tag) => (
                  <li key={tag} className="tag-pill">{tag}</li>
                ))}
              </ul>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium border-b border-border pb-0.5
                           hover:text-accent hover:border-accent transition-colors"
              >
                {t('projects.linkLabel')} <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
