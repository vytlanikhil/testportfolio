import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Download, Radio, Network, Binary } from 'lucide-react';
import TypingText from '../components/TypingText';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden animated-grid-bg"
    >
      {/* Subtle colorful glow blobs in background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Floating ECE Background Elements */}
      <motion.div
        className="absolute top-1/3 left-10 md:left-20 text-primary/30 dark:text-primary-light/20 pointer-events-none hidden sm:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cpu className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-10 md:right-20 text-accent/30 dark:text-accent-light/20 pointer-events-none hidden sm:block"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Radio className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-1/4 text-secondary/30 dark:text-secondary-light/20 pointer-events-none hidden sm:block"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <Network className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-primary/20 dark:text-primary-light/10 pointer-events-none hidden sm:block"
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Binary className="w-9 h-9" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left - Text & Buttons */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-light text-sm font-medium w-fit mx-auto lg:mx-0 mb-6 border border-primary/20 backdrop-blur-sm">
              <Cpu className="w-4 h-4 animate-spin-slow" />
              Electronics & Communication Engineering
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient font-extrabold block sm:inline">
                Priya Sharma
              </span>
            </h1>

            {/* Typing text animation */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 min-h-[40px] flex items-center justify-center lg:justify-start gap-1">
              <span>I study</span>
              <span className="text-primary dark:text-primary-light font-semibold">
                <TypingText
                  texts={[
                    'Embedded Systems',
                    'Internet of Things (IoT)',
                    'VLSI Circuit Design',
                    'Wireless Communications',
                    'Full-Stack Software'
                  ]}
                />
              </span>
            </h2>

            {/* Intro description */}
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Third-year ECE undergraduate at KL University. Passionate about linking software and physical systems to solve real-world problems. Let's build the future!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScrollTo('contact')}
                className="btn-primary w-full sm:w-auto hoverable group"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScrollTo('resume')}
                className="btn-secondary w-full sm:w-auto hoverable text-slate-700 dark:text-slate-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>

            {/* Brief Stats Banner */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 mt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">8.85</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">CGPA</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">3rd</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Year ECE</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">10+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Right - Animated Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer decorative ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-primary/40 dark:border-primary-light/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Spinning multi-color glow border */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-70 blur-md pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inside card clip container */}
              <div className="absolute inset-5 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-200 dark:bg-slate-800">
                <img
                  src="/priya_profile.png"
                  alt="Priya Sharma Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Float decorative components */}
              <motion.div
                className="absolute -top-1 right-10 p-3 rounded-2xl glass-card text-primary shadow-lg border border-primary/20 flex items-center justify-center pointer-events-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Cpu className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 left-10 p-3 rounded-2xl glass-card text-secondary shadow-lg border border-secondary/20 flex items-center justify-center pointer-events-none"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Binary className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
