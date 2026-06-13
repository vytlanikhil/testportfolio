import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-full glass-card hover:bg-slate-200/50 dark:hover:bg-slate-800/50 focus:outline-none flex items-center justify-center relative overflow-hidden"
      aria-label="Toggle Theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      layout
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-amber-500"
      >
        <Moon className="w-5 h-5 fill-current" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : -180, scale: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-violet-400 absolute"
      >
        <Sun className="w-5 h-5 fill-current" />
      </motion.div>
    </motion.button>
  );
}
