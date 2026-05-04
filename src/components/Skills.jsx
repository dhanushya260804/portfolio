import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const CATEGORY_ICONS = {
  Frontend: '⚛️', Backend: '☕', Database: '🗄️', Tools: '🛠️'
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`skills__tab ${active === cat ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {CATEGORY_ICONS[cat] && <span>{CATEGORY_ICONS[cat]}</span>}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill cards grid */}
        <div className="skills__grid">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skills__card card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
            >
              <div className="skills__card-header">
                <span className="skills__card-name">{skill.name}</span>
                <span className="skills__card-pct">{skill.level}%</span>
              </div>
              <div className="skills__bar-bg">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 0.8, delay: i * 0.05 + 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
              <span className="skills__card-cat">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Summary chips */}
        <motion.div
          className="skills__summary"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {['Java & Spring Boot', 'React & JS', 'REST APIs', 'SQL & NoSQL', 'Docker & AWS', 'JWT / OAuth2'].map(tag => (
            <span key={tag} className="skills__chip">{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}