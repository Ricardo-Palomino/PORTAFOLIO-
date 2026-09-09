import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Counter from './Counter';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const CODE = [
  [{ t: 'const ', c: 'text-accent' }, { t: 'developer = {' }],
  [{ t: '  name: ' }, { t: "'Ricardo Palomino',", c: 'text-ink' }],
  [{ t: '  role: ' }, { t: "'Full Stack Jr',", c: 'text-ink' }],
  [{ t: '  stack: ' }, { t: "['JS', 'Node', 'Python'],", c: 'text-ink' }],
  [{ t: '  focus: ' }, { t: "'backend',", c: 'text-ink' }],
  [{ t: '};' }],
  [{ t: '' }],
  [{ t: 'async ', c: 'text-accent' }, { t: 'function ', c: 'text-accent' }, { t: 'ship() {' }],
  [{ t: '  await ', c: 'text-accent' }, { t: 'learn();' }],
  [{ t: '  return ', c: 'text-accent' }, { t: "build('with care');" }],
  [{ t: '}' }],
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden max-w-content mx-auto px-6 md:px-8 pt-16 pb-20 md:pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid md:grid-cols-[1.3fr_0.9fr] gap-12 items-center"
      >
        <div>
          <motion.p variants={item} className="font-mono text-sm text-accent mb-4">
            {t('hero.kicker')}
          </motion.p>

          <motion.h1 variants={item} className="font-display font-medium leading-[1.05] text-5xl sm:text-6xl lg:text-7xl mb-6">
            {t('hero.title_1')}<br /><span className="accent-italic">{t('hero.title_2')}</span>
          </motion.h1>

          <motion.p variants={item} className="text-muted text-lg max-w-[46ch] mb-9">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3.5">
            <Link to="projects" smooth offset={-72}>
              <button className="btn-solid">{t('hero.cta_projects')}</button>
            </Link>
            <Link to="contact" smooth offset={-72}>
              <button className="btn-outline">{t('hero.cta_contact')}</button>
            </Link>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-[300px] rounded-2xl border border-border bg-surface overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-2 font-mono text-[11px] text-muted">ricardo.dev</span>
            </div>
            <pre className="p-5 font-mono text-[12px] leading-[1.9] text-muted whitespace-pre-wrap">
              {CODE.map((line, i) => (
                <div key={i}>
                  {line.map((tok, j) => (
                    <span key={j} className={tok.c}>{tok.t}</span>
                  ))}
                  {i === CODE.length - 1 && <span className="cursor-blink">▍</span>}
                </div>
              ))}
            </pre>
          </motion.div>
          <span className="font-mono text-xs text-muted">{t('hero.location')}</span>
        </motion.div>
      </motion.div>

      <motion.ul
        variants={item}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-7 border-t border-border"
      >
        <li>
          <Counter target={10} prefix="+" className="font-display text-3xl" />
          <p className="text-sm text-muted mt-1">{t('hero.fact_projects')}</p>
        </li>
        <li>
          <Counter target={10} className="font-display text-3xl" />
          <p className="text-sm text-muted mt-1">{t('hero.fact_tech')}</p>
        </li>
        <li>
          <span className="font-display text-3xl">{t('hero.study_field')}</span>
          <p className="text-sm text-muted mt-1">{t('hero.fact_year')}</p>
        </li>
        <li>
          <span className="font-display text-3xl">Scrum</span>
          <p className="text-sm text-muted mt-1">{t('hero.fact_method')}</p>
        </li>
      </motion.ul>
    </section>
  );
}
