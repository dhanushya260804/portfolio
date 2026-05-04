import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = links.map(l => l.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behaviour: 'smooth' });
    };

    return (
        <motion.nav 
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="navbar__inner">
                <a className="navbar__logo" href="#home" onClick={e => { e.preventDefault(); handleNav('#home'); }}>
                    <span className="navbar__logo-bracket">[</span>
                    DT 
                    <span className="navbar__logo-bracket">]</span>
                </a>

                <ul className="navbar__links">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                              href={href}
                              className={`navbar__link ${active === href.slice(1) ? 'navbar__link--active' : ''}`}
                              onClick={e => { e.preventDefault(); handleNav(href); }}
                              >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    <a href={personalInfo.resumeUrl} className="btn btn-outline btn-sm" download>
                        <Download size={14} />
                        Resume 
                    </a>
                    <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        <AnimatePresence mode="wait">
                            <motion.div 
                            key={isDark ? 'sun' : 'moon'}
                            initial={{ rotate: -90, opcaity: 0 }}
                            animate={{ rotate: 0, opcaity:1 }}
                            exit={{ rotate: 90, opcaity: 0 }}
                            transition={{ duration: 0.2 }}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                    <button className="navbar__hamburger" onClick={() => setMobileOpen(o => ! o)} aria-label="Menu">
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                    className="navbar__mobile"
                    initial={{ opcaity: 0, y: -16 }}
                    animate={{ opcaity:1 , y: -16 }}
                    exit={{ opcaity: 0, y: -16 }}
                    transition={{ duration: 0.22 }}
                    >
                        {links.map(({ href, label }) => (
                            <a
                            key={href}
                            href={href}
                            className={`navbar__mobile-link ${active === href.slice(1) ? 'active' : ''}`}
                            onClick={e => { e.preventDefault(); handleNav(href); }}
                            >
                                {label}
                            </a>
                        ))}
                        <a href={personalInfo.resumeUrl} className="btn btn-primary btn-sm" Download style={{alignSelf: 'flex-start'}}>
                            <Download size={14} /> Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}