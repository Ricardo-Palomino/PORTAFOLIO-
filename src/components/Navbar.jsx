import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { key: 'about', to: 'about' },
  { key: 'projects', to: 'projects' },
  { key: 'skills', to: 'skills' },
  { key: 'contact', to: 'contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-bg/85 border-b border-border">
      <div className="max-w-content mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="home" smooth offset={-80} className="font-mono text-base cursor-pointer">
          Ricardo P<span className="text-accent">/</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                to={item.to}
                smooth
                offset={-72}
                spy
                activeClass="text-ink"
                className="nav-link cursor-pointer"
              >
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-accent border border-accent/25 rounded-full px-3.5 py-1.5 mr-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t('hero.badge')}
          </span>

          <button
            onClick={toggleLang}
            aria-label="Cambiar idioma"
            className="w-9 h-9 grid place-items-center rounded-full border border-border font-mono text-xs
                       text-muted hover:border-accent hover:text-accent transition-colors"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="w-9 h-9 grid place-items-center rounded-full border border-border
                       hover:border-accent transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
            className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-border"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 border-b border-border bg-bg">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                to={item.to}
                smooth
                offset={-72}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted cursor-pointer"
              >
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
