import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small delay before fading out
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900 dark:bg-[#030712] z-[9999] flex flex-col items-center justify-center p-4"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Revolving ECE Icon */}
        <motion.div
          className="relative mb-8 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 shadow-2xl flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(139, 92, 246, 0.2)',
              '0 0 40px rgba(236, 72, 153, 0.4)',
              '0 0 20px rgba(56, 189, 248, 0.2)',
              '0 0 20px rgba(139, 92, 246, 0.2)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Cpu className="w-16 h-16 text-primary-light" />
          </motion.div>
          
          {/* Decorative circuit lines */}
          <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-primary-light rounded-tl-lg" />
          <div className="absolute -top-4 -right-4 w-6 h-6 border-t-2 border-r-2 border-secondary-light rounded-tr-lg" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b-2 border-l-2 border-accent-light rounded-bl-lg" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-primary-light rounded-br-lg" />
        </motion.div>

        {/* Brand Text */}
        <motion.h1
          className="text-2xl md:text-3xl font-display font-bold text-white tracking-wider mb-2 flex items-center gap-1.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          D. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">LAVANYA</span>
        </motion.h1>
        
        <motion.p
          className="text-slate-400 text-xs md:text-sm tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          ELECTRONICS & COMMUNICATION ENGINEER
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Progress text */}
        <motion.span
          className="text-white font-mono text-sm tracking-wider"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.span>
      </div>
    </motion.div>
  );
}
