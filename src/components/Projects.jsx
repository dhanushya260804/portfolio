import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, Star } from 'lucide-react';
import { projects, techCategories } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {techCategories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => { setFilter(cat); setShowAll(false); }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="projects__grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                className={`projects__card card ${project.featured ? 'projects__card--featured' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                {project.featured && (
                  <div className="projects__featured-badge">
                    <Star size={11} fill="currentColor" /> Featured
                  </div>
                )}

                <div className="projects__card-body">
                  <div className="projects__card-category">{project.category}</div>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.description}</p>
                </div>

                <div className="projects__card-footer">
                  <div className="projects__tech-stack">
                    {project.tech.map(t => (
                      <span key={t} className="projects__tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="projects__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="projects__link" title="GitHub">
                        <GitBranch size={16} />
                        Code
                      </a>
                    )}
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="projects__link projects__link--live" title="Live Demo">
                        <ExternalLink size={16} />
                        Live
                      </a>
                    ) : (
                      <span className="projects__link projects__link--no-live">
                        <ExternalLink size={16} />
                        Private
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length > 6 && (
          <motion.div
            className="projects__show-more"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <button className="btn btn-outline" onClick={() => setShowAll(s => !s)}>
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}