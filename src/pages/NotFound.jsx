import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      
      <div className="max-w-md w-full glass-card p-8 md:p-12 rounded-3xl border border-red-500/20 shadow-2xl relative">
        {/* Glow indicator line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-500" />

        {/* ECE broken circuit visual */}
        <div className="flex justify-center mb-8 relative">
          <motion.div
            className="p-5 bg-red-500/10 text-red-500 rounded-3xl relative border border-red-500/20"
            animate={{
              boxShadow: [
                '0 0 10px rgba(239, 68, 68, 0.1)',
                '0 0 25px rgba(239, 68, 68, 0.3)',
                '0 0 10px rgba(239, 68, 68, 0.1)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <AlertTriangle className="w-12 h-12" />
            
            {/* Custom circuit lines overlay */}
            <svg className="absolute -inset-6 w-24 h-24 stroke-current text-red-500/40 pointer-events-none" fill="none">
              <path d="M 0,40 H 20 L 30,50" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 96,40 H 76 L 66,50" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </motion.div>
        </div>

        {/* 404 text */}
        <h1 className="text-6xl font-mono font-extrabold text-red-500 tracking-wider mb-2">
          404
        </h1>
        
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          Error: Circuit Broken
        </h2>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          The transmission signal failed. The path you are trying to access is open or does not exist on this network grid.
        </p>

        {/* Action button */}
        <motion.button
          onClick={handleGoHome}
          className="btn-primary w-full shadow-md bg-gradient-to-r from-red-500 to-rose-500 hover:shadow-red-500/20 hoverable"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Home className="w-4 h-4" />
          Return to Main Grid
        </motion.button>
      </div>
    </div>
  );
}
