import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Cpu, Lock, Layers, BookOpen, AlertCircle, Bookmark } from 'lucide-react';

const researchInterests = [
  {
    title: 'Wireless Communication',
    icon: Wifi,
    description: 'Exploring next-generation communication systems, focusing on mmWave propagation, software-defined radio (SDR), and antenna design.',
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Embedded AI / Edge Computing',
    icon: Cpu,
    description: 'Investigating micro-neural networks running directly on microcontrollers to perform local sensory classification and computer vision.',
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'IoT Security & Protocols',
    icon: Lock,
    description: 'Reviewing cryptographic routines and lightweight authorization models to secure edge nodes against network intruders.',
    color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
  },
  {
    title: 'VLSI Circuit Verification',
    icon: Layers,
    description: 'Analyzing hardware descriptive languages (Verilog) and automated testbench architectures for functional silicon checks.',
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
];

const publicationPlaceholders = [
  {
    id: 1,
    status: 'Under Review',
    title: 'A Lightweight Edge-AI Model for Micro-Grid Current Distortions',
    journal: 'IEEE Student Conference on Electronics (Expected 2026)',
    abstract: 'Proposes an optimized 4-bit quantized neural network model deployed on ESP32 to monitor current signal fluctuations in domestic smart grids. Achieved 94.2% classification accuracy in lab setups.',
  },
  {
    id: 2,
    status: 'In Prep',
    title: 'Design Analysis of a Microstrip Patch Antenna for 5G Node Links',
    journal: 'Department of ECE KL University Research Bulletin',
    abstract: 'Analyzing resonance patterns and radiation profiles of patch arrays at 28 GHz frequencies using simulated MATLAB solvers.',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-slate-100/50 dark:bg-[#070b13]/40 relative">
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
            Research & <span className="text-gradient font-bold">Publications</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Research Left - Interests */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-primary" />
              Focus Areas
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {researchInterests.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    className="glass-card p-5 rounded-2xl glass-card-hover border border-white/20 dark:border-slate-800/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className={`p-2.5 rounded-xl ${interest.color} w-fit mb-4 border`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1.5">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Research Right - Publications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              Publications & Patents
            </h3>

            <div className="space-y-6">
              {publicationPlaceholders.map((pub, idx) => (
                <motion.div
                  key={pub.id}
                  className="glass-card p-6 rounded-3xl relative overflow-hidden border border-white/20 dark:border-slate-800/40"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  {/* Status tag */}
                  <span className={`absolute top-4 right-4 text-[10px] uppercase font-mono px-2.5 py-1 rounded-full font-bold tracking-wider ${
                    pub.status === 'Under Review'
                      ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      : 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
                  }`}>
                    {pub.status}
                  </span>

                  <h4 className="text-base font-bold text-slate-800 dark:text-white pr-24 mb-1">
                    {pub.title}
                  </h4>
                  <span className="text-xs text-slate-450 dark:text-slate-500 block mb-3">
                    {pub.journal}
                  </span>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic bg-slate-100/50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200/20 dark:border-slate-800/30">
                    "{pub.abstract}"
                  </p>
                </motion.div>
              ))}

              {/* Placeholder showing readiness */}
              <motion.div
                className="p-6 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center text-center text-slate-450 py-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AlertCircle className="w-8 h-8 text-primary/40 dark:text-primary-light/40 mb-3 animate-pulse" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Future Research Scope
                </h4>
                <p className="text-xs max-w-xs leading-relaxed text-slate-500 dark:text-slate-450">
                  Open for undergraduate research collaborations, poster sessions, and hardware prototyping contributions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
