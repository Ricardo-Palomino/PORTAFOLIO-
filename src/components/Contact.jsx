import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const LINKS = [
  { icon: Mail, label: 'Rp0459510@gmail.com', href: 'mailto:Rp0459510@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardo-palomino-7650a3365/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Ricardo-Palomino' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/573009604658' },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-shell">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="section-heading mb-4">
            <span className="accent-italic">{t('contact.heading')}</span>
          </h2>
          <p className="text-muted max-w-[46ch]">{t('contact.desc')}</p>
        </div>

        <ul className="grid gap-3">
          {LINKS.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-3.5 px-5 py-4 hover:border-accent/40 hover:bg-surface transition-colors"
              >
                <Icon size={18} className="text-accent shrink-0" />
                <span className="text-[15px]">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
