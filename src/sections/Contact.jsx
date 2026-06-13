import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const contactInfo = [
  {
    id: 1,
    name: 'Email',
    value: 'priya.sharma@example.com',
    href: 'mailto:priya.sharma@example.com',
    icon: Mail,
    color: 'text-violet-500 bg-violet-500/10 hover:bg-violet-500/20',
  },
  {
    id: 2,
    name: 'Phone',
    value: '+91 9876543210',
    href: 'tel:+919876543210',
    icon: Phone,
    color: 'text-pink-500 bg-pink-500/10 hover:bg-pink-500/20',
  },
  {
    id: 3,
    name: 'LinkedIn',
    value: 'linkedin.com/in/priyasharma',
    href: 'https://linkedin.com/in/priyasharma',
    icon: Linkedin,
    color: 'text-blue-500 bg-blue-500/10 hover:bg-blue-500/20',
  },
  {
    id: 4,
    name: 'GitHub',
    value: 'github.com/priyasharma',
    href: 'https://github.com/priyasharma',
    icon: Github,
    color: 'text-slate-700 dark:text-slate-300 bg-slate-500/10 hover:bg-slate-500/20',
  },
  {
    id: 5,
    name: 'Location',
    value: 'Vijayawada, Andhra Pradesh, India',
    icon: MapPin,
    color: 'text-emerald-500 bg-emerald-500/10',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending email API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger success confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      
      // Reset form
      setForm({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-gradient font-bold">Touch</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details - Left */}
          <motion.div
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-6">
                Feel free to reach out to me for internships, academic projects, research discussions, or technical collaboration. I will get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4 mt-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const isLink = !!info.href;

                const cardContent = (
                  <>
                    <div className={`p-3 rounded-2xl ${info.color} shrink-0 transition-colors duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                        {info.name}
                      </span>
                      <span className="block text-sm font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </>
                );

                return isLink ? (
                  <a
                    key={info.id}
                    href={info.href}
                    target={info.name !== 'Phone' && info.name !== 'Email' ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="glass-card p-4 rounded-2xl flex items-center gap-4 hoverable group glass-card-hover border border-white/20 dark:border-slate-800/40 cursor-pointer block"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={info.id}
                    className="glass-card p-4 rounded-2xl flex items-center gap-4 border border-white/20 dark:border-slate-800/40"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form - Right */}
          <motion.div
            className="lg:col-span-7 flex"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/20 dark:border-slate-800/40 w-full relative overflow-hidden flex flex-col justify-center min-h-[450px]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-350 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Priya Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                            errors.name ? 'border-red-500' : 'border-slate-200/50 dark:border-slate-800/60'
                          } text-sm focus:outline-none focus:border-primary text-slate-800 dark:text-slate-100 transition-colors`}
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-350 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="priya@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                            errors.email ? 'border-red-500' : 'border-slate-200/50 dark:border-slate-800/60'
                          } text-sm focus:outline-none focus:border-primary text-slate-800 dark:text-slate-100 transition-colors`}
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-350 block">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Hi Priya, I'd like to collaborate on an ECE project..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border ${
                          errors.message ? 'border-red-500' : 'border-slate-200/50 dark:border-slate-800/60'
                        } text-sm focus:outline-none focus:border-primary text-slate-800 dark:text-slate-100 transition-colors resize-none`}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full shadow-md hoverable"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    className="text-center p-6 space-y-4 flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                      className="text-emerald-500 p-4 bg-emerald-500/10 rounded-full"
                    >
                      <CheckCircle2 className="w-16 h-16" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Sent!
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                      Thank you for reaching out. Your message has been received successfully. Priya will get back to you shortly!
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary text-xs py-2 px-4 hoverable mt-2 border border-slate-200/50 dark:border-slate-850"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
