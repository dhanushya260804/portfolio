import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { personalInfo, education, experience } from '../data/portfolioData';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] } })
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about__grid">
          {/* Bio column */}
          <div className="about__bio-col">
            <motion.p className="about__bio" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              {personalInfo.bio}
            </motion.p>
            <motion.p className="about__bio" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              When I'm not coding, I enjoy contributing to open source projects, writing technical articles, and exploring the latest in cloud-native architecture. I believe great software is built at the intersection of solid engineering and thoughtful design.
            </motion.p>

            <motion.div className="about__contact-info" variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              {[
                { icon: <MapPin size={15} />, label: personalInfo.location },
                { icon: <Mail size={15} />, label: personalInfo.email },
                { icon: <Phone size={15} />, label: personalInfo.phone },
              ].map(({ icon, label }) => (
                <div key={label} className="about__contact-row">
                  <span className="about__contact-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education + Experience column */}
          <div className="about__right-col">
            {/* Education */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="about__section-head">
                <GraduationCap size={16} className="about__section-icon" />
                <span>Education</span>
              </div>
              <div className="about__timeline">
                {education.map((edu, i) => (
                  <div key={i} className="about__timeline-item card">
                    <div className="about__timeline-header">
                      <div>
                        <h4 className="about__timeline-title">{edu.degree}</h4>
                        <p className="about__timeline-sub">{edu.institution} · {edu.location}</p>
                      </div>
                      <div className="about__timeline-meta">
                        <span className="about__badge">{edu.grade}</span>
                        <span className="about__period">
                          <Calendar size={11} />{edu.period}
                        </span>
                      </div>
                    </div>
                    <div className="about__tags">
                      {edu.highlights.map(h => (
                        <span key={h} className="about__tag">{h}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginTop: '2rem' }}>
              <div className="about__section-head">
                <Briefcase size={16} className="about__section-icon" />
                <span>Experience</span>
              </div>
              <div className="about__timeline">
                {experience.map((exp, i) => (
                  <div key={i} className="about__timeline-item card">
                    <div className="about__timeline-header">
                      <div>
                        <h4 className="about__timeline-title">{exp.role}</h4>
                        <p className="about__timeline-sub">{exp.company} · {exp.location}</p>
                      </div>
                      <span className="about__period">
                        <Calendar size={11} />{exp.period}
                      </span>
                    </div>
                    <ul className="about__exp-list">
                      {exp.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}