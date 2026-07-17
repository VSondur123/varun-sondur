import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import portfolioData from '../../data/portfolio.json';

// Configure your EmailJS IDs in environment variables or replace the placeholders
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const INFO_ITEMS = [
  { icon: FaEnvelope, label: 'Email', getValue: (c) => c.email, href: (c) => `mailto:${c.email}` },
  { icon: FaPhone, label: 'Phone', getValue: (c) => c.phone, href: (c) => `tel:${c.phone}` },
  { icon: FaMapMarkerAlt, label: 'Location', getValue: (c) => c.location, href: () => null },
];

export default function Contact() {
  const { contact, socialLinks } = portfolioData;
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const linkedIn = socialLinks.find((s) => s.platform === 'LinkedIn');

  return (
    <section id="contact" className="section-padding">
      <div className="container-page">
        <SectionHeader
          tag="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="glass rounded-2xl p-8 glow-blue">
              <h3 className="text-xl font-bold text-slate-100 mb-6">Contact Information</h3>
              <div className="space-y-5">
                {INFO_ITEMS.map(({ icon: Icon, label, getValue, href }) => {
                  const link = href(contact);
                  const value = getValue(contact);
                  const content = (
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider font-medium">{label}</p>
                        <p className="text-slate-200 font-medium mt-0.5 group-hover:text-sky-300 transition-colors">
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                  return link ? (
                    <a key={label} href={link} className="block">{content}</a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
                {linkedIn && (
                  <a href={linkedIn.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors flex-shrink-0">
                      <FaLinkedin size={18} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider font-medium">LinkedIn</p>
                      <p className="text-slate-200 font-medium mt-0.5 group-hover:text-sky-300 transition-colors">
                        {linkedIn.url.replace('https://', '')}
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <p className="text-slate-400 text-sm leading-relaxed">
                I typically respond within <span className="text-sky-400 font-semibold">24 hours</span>.
                For urgent matters, connect via LinkedIn for faster response.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.div data-aos="fade-left" data-aos-delay="100">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className="glass rounded-2xl p-8 glow-purple space-y-5"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-slate-300 text-xs font-medium uppercase tracking-wider mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text" name="name" required autoComplete="name" value={formData.name} onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-slate-800 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-300 text-xs font-medium uppercase tracking-wider mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-slate-800 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-slate-300 text-xs font-medium uppercase tracking-wider mb-2">Subject</label>
                <input
                  id="contact-subject"
                  type="text" name="subject" required value={formData.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-slate-800 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-slate-300 text-xs font-medium uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message" required rows={5} value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-slate-800 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                aria-busy={status === 'sending'}
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-sky-500/25"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              <div role="status" aria-live="polite" className="min-h-[1.25rem]">
                {status === 'success' && (
                  <p className="text-emerald-400 text-sm text-center font-medium">
                    ✓ Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center font-medium">
                    ✗ Something went wrong. Please try emailing me directly.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
