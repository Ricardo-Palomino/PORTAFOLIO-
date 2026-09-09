import { useTranslation } from 'react-i18next';
import { MessageSquare, Users, Repeat, Brain, Compass, Clock, BookOpen, Puzzle } from 'lucide-react';
import SkillMeter from './SkillMeter';

const CATEGORIES = [
  {
    key: 'frontend',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'HTML / CSS', level: 88 },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'MongoDB / MySQL', level: 78 },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'CLI / Terminal', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
];

const SOFT_ICONS = [MessageSquare, Users, Repeat, Brain, Compass, Clock, BookOpen, Puzzle];

function tierKey(level) {
  if (level >= 88) return 'skills.tierAdvanced';
  if (level >= 80) return 'skills.tierSolid';
  return 'skills.tierGrowing';
}

export default function Skills() {
  const { t } = useTranslation();
  const soft = t('skills.soft', { returnObjects: true });

  return (
    <section id="skills" className="section-shell">
      <h2 className="section-heading mb-2">
        <span className="accent-italic">{t('skills.heading')}</span>
      </h2>
      <p className="text-muted max-w-[52ch] mb-11">{t('skills.intro')}</p>

      <div className="mb-14 space-y-10">
        {CATEGORIES.map((cat) => (
          <div key={cat.key}>
            <p className="font-mono text-xs text-muted mb-5">{t(`skills.categories.${cat.key}`)}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cat.skills.map((s) => (
                <SkillMeter key={s.name} name={s.name} level={s.level} tier={t(tierKey(s.level))} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-muted mb-5">{t('skills.softLabel')}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {soft.map((s, i) => {
          const Icon = SOFT_ICONS[i];
          return (
            <div
              key={s}
              className="card flex flex-col items-center text-center gap-2.5 p-5 hover:border-accent/40 transition-colors"
            >
              <Icon size={20} className="text-accent" />
              <p className="text-sm text-muted leading-snug">{s}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
