import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const INFO_ITEMS = [
  { icon: <Mail size={18} />, label: 'Email', value: 'dhanushya260804@gmail.com', href: 'mailto:dhanu.krishnan@gmail.com' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 8939547928', href: 'tel:+919876543210' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('loading');
    // Simulate EmailJS / API call
    await new Promise(res => setTimeout(res, 1800));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact__subtitle">
            Have a project in mind or just want to chat? I'm open to full-time roles,
            freelance work, and interesting collaborations. Let's build something great together.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info panel */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="card contact__info-card">
              <h3 className="contact__info-title">Let's connect</h3>
              <p className="contact__info-desc">
                I typically respond within 24 hours. Feel free to reach out via any of the channels below.
              </p>
              <div className="contact__info-items">
                {INFO_ITEMS.map(({ icon, label, value, href }) => (
                  <div key={label} className="contact__info-item">
                    <span className="contact__info-icon">{icon}</span>
                    <div>
                      <p className="contact__info-label">{label}</p>
                      {href ? (
                        <a href={href} className="contact__info-value">{value}</a>
                      ) : (
                        <p className="contact__info-value">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact__socials">
                {Object.entries(personalInfo.socials).map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                    className="contact__social">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form className="contact__form card" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Name</label>
                  <input
                    className={`contact__input ${errors.name ? 'error' : ''}`}
                    type="text" name="name" placeholder="Dhanushya Thangaraj"
                    value={form.name} onChange={handleChange}
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email</label>
                  <input
                    className={`contact__input ${errors.email ? 'error' : ''}`}
                    type="email" name="email" placeholder="you@example.com"
                    value={form.email} onChange={handleChange}
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input
                  className={`contact__input ${errors.subject ? 'error' : ''}`}
                  type="text" name="subject" placeholder="Project collaboration / Hiring / Just saying hi"
                  value={form.subject} onChange={handleChange}
                />
                {errors.subject && <span className="contact__error">{errors.subject}</span>}
              </div>

              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea
                  className={`contact__input contact__textarea ${errors.message ? 'error' : ''}`}
                  name="message" rows={5}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  value={form.message} onChange={handleChange}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div className="contact__status contact__status--success"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div className="contact__status contact__status--error"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <><Loader size={15} className="spin" /> Sending…</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}