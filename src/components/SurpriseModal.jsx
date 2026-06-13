import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';

export default function SurpriseModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="glass-card max-w-md w-full rounded-3xl overflow-hidden border border-pink-500/30 dark:border-pink-500/20 shadow-2xl relative p-8 md:p-10 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-205/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-red-500/20 hover:text-red-500 transition-colors z-10 hoverable"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Heart Header */}
            <div className="flex justify-center mb-6 relative">
              <motion.div
                className="p-4 bg-pink-500/10 text-pink-500 rounded-full border border-pink-500/20"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 fill-current" />
              </motion.div>
              <div className="absolute -top-1 -right-1 text-amber-400 animate-pulse">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Handwritten Note Style */}
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
              A Personal Note of Support
            </h3>
            
            <div className="bg-amber-50/50 dark:bg-pink-950/10 p-6 rounded-2xl border border-amber-200/25 dark:border-pink-500/10 text-left font-serif relative">
              <div className="absolute top-3 right-3 text-pink-400 opacity-20">
                <Heart className="w-10 h-10 fill-current" />
              </div>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-350 italic leading-relaxed">
                "To the most brilliant mind I know: May your circuits always find their path, your signals never fade, and your dreams build the most beautiful futures. I am incredibly proud of your journey and believe in you, always."
              </p>
              <span className="block text-right text-xs font-semibold text-slate-500 dark:text-slate-450 mt-4">
                — With love and support
              </span>
            </div>

            <button
              onClick={onClose}
              className="btn-primary w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-pink-500/20 hoverable mt-6"
            >
              Close Note
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
