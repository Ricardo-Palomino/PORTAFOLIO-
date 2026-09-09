import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Cover() {
  const { t } = useTranslation();

  return (
    <section id="cover" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="cover-bg" aria-hidden="true" />
      <div className="cover-grid" aria-hidden="true" />
      <div className="cover-glow" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.span variants={item} className="inline-block font-mono text-xs text-accent/70 dark:text-white/65 mb-5">
            {t('cover.greeting')}
          </motion.span>

          <motion.h1
            variants={item}
            className="cover-title font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-accent dark:text-white mb-4 leading-[1.05]"
          >
            {t('cover.hook_line1')}<br />
            <span className="italic cover-title-accent">{t('cover.hook_line2')}</span>
          </motion.h1>

          <motion.p variants={item} className="font-mono text-sm text-accent/80 dark:text-white/70 mb-6">
            {t('hero.kicker')}
          </motion.p>

          <motion.p variants={item} className="text-ink/70 dark:text-white/75 text-lg sm:text-xl max-w-[42ch] mx-auto md:mx-0 mb-10">
            {t('cover.tagline')}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start gap-3.5">
            <Link to="home" smooth offset={-64}>
              <button className="btn-solid">{t('cover.cta_enter')}</button>
            </Link>
            <Link to="contact" smooth offset={-72}>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/30 dark:border-white/30 text-accent dark:text-white font-medium text-sm transition-colors hover:border-accent/60 dark:hover:border-white/60">
                {t('hero.cta_contact')}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:block cover-pc-frame"
        >
          <img
            src="/img/cover.jpg"
            alt=""
            aria-hidden="true"
            onError={(e) => e.currentTarget.closest('.cover-pc-frame')?.remove()}
            className="cover-pc-img"
          />
        </motion.div>
      </div>

      <Link to="home" smooth offset={-64} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex text-accent/55 dark:text-white/55"
        >
          <ChevronDown size={22} />
        </motion.span>
      </Link>

      <div className="cover-transition" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="cover-wave cover-wave-back">
          <path className="wave-light" d="M0,58 C260,95 500,35 740,50 C980,65 1220,38 1440,55 L1440,100 L0,100 Z" />
          <path className="wave-dark" d="M0,58 C260,95 500,35 740,50 C980,65 1220,38 1440,55 L1440,100 L0,100 Z" />
        </svg>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="cover-wave cover-wave-front">
          <path className="wave-light" d="M0,45 C240,88 480,10 720,34 C960,58 1200,16 1440,42 L1440,100 L0,100 Z" />
          <path className="wave-dark" d="M0,45 C240,88 480,10 720,34 C960,58 1200,16 1440,42 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}

