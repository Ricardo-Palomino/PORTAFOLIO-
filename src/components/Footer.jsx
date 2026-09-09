import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="text-sm text-muted">{t('footer.text')} · © {year}</p>
    </footer>
  );
}
