import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const ROLES = ["Full Stack Developer", "Spring Boot Engineer", "React Developer", "Problem Solver"];

function useTypingEffect(words, ref) {
  useEffect(() => {
    let wordIdx = 0, charIdx = 0, deleting = false;
    let timer;

    const tick = () => {
      const current = words[wordIdx];
      if (!ref.current) return;

      if (deleting) {
        ref.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          timer = setTimeout(tick, 500);
          return;
        }
      } else {
        ref.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          timer = setTimeout(() => { deleting = true; tick(); }, 2000);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 60 : 100);
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [words, ref]);
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }
});

export default function Hero() {
  const typingRef = useRef(null);
  useTypingEffect(ROLES, typingRef);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden />
      {/* Glow blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden />
      <div className="hero__blob hero__blob--2" aria-hidden />

      <div className="container hero__container">
        <div className="hero__content">
          <motion.div className="hero__badge" {...fadeUp(0.1)}>
            <Sparkles size={12} />
            Available for work
            <span className="hero__badge-dot" />
          </motion.div>

          <motion.h1 className="hero__name" {...fadeUp(0.2)}>
            {personalInfo.name.split(' ').map((part, i) => (
              <span key={i} className={i === 1 ? 'hero__name-last' : ''}>{part}{' '}</span>
            ))}
          </motion.h1>

          <motion.div className="hero__role" {...fadeUp(0.35)}>
            <span className="hero__role-prefix">—</span>
            <span ref={typingRef} className="hero__role-text" />
            <span className="hero__cursor">|</span>
          </motion.div>

          <motion.p className="hero__tagline" {...fadeUp(0.45)}>
            {personalInfo.tagline}
          </motion.p>

          <motion.p className="hero__intro" {...fadeUp(0.5)}>
            Based in {personalInfo.location}. I build fast, accessible, and production-ready
            web applications — from database design to pixel-perfect UIs.
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.6)}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
              <ArrowDown size={15} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </motion.div>

          <motion.div className="hero__socials" {...fadeUp(0.7)}>
            {[
              { icon: <GitBranch size={18} />, href: personalInfo.socials.github, label: 'GitHub' },
              { icon: <ExternalLink size={18} />, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              { icon: <ExternalLink size={18} />, href: personalInfo.socials.twitter, label: 'Twitter' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="hero__social-btn" aria-label={label}>
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__avatar-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__avatar">
            <div className="hero__avatar-inner">
              <span className="hero__avatar-initials">DK</span>
            </div>
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
          </div>

          <motion.div className="hero__stat hero__stat--1"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}>
            <span className="hero__stat-num">3+</span>
            <span className="hero__stat-label">Years Exp.</span>
          </motion.div>

          <motion.div className="hero__stat hero__stat--2"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}>
            <span className="hero__stat-num">20+</span>
            <span className="hero__stat-label">Projects</span>
          </motion.div>

          <motion.div className="hero__stat hero__stat--3"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}>
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">Technologies</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll-hint"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}