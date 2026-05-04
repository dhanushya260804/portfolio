import { GitBranch, ExternalLink, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-bracket">[</span>DT<span className="footer__logo-bracket">]</span>
          </span>
          <p className="footer__tagline">
            Full Stack Developer · Chennai, India
          </p>
        </div>

        <div className="footer__links">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a key={label} href={href} className="footer__link"
              onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {label}
            </a>
          ))}
        </div>

        <div className="footer__socials">
          {[
            { icon: <GitBranch size={18} />, href: personalInfo.socials.github, label: 'GitHub' },
            { icon: <ExternalLink size={18} />, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
            { icon: <ExternalLink size={18} />, href: personalInfo.socials.twitter, label: 'Twitter' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="footer__social" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
          <Heart size={12} className="footer__heart" fill="currentColor" /> using React & Framer Motion.
        </p>
        <button className="footer__back-top" onClick={scrollTop} aria-label="Back to top">
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}