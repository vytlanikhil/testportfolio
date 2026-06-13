import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, X, Award as AwardIcon, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    title: 'Python Programming',
    issuer: 'Coursera / Guvi',
    date: 'June 2024',
    certId: 'PY-9903-8821',
    description: 'Covers core Python syntax, object-oriented concepts, exception handling, data structures, and file I/O operations.',
    badgeColor: 'text-blue-500 bg-blue-500/10',
  },
  {
    id: 2,
    title: 'Embedded Systems & Robotics',
    issuer: 'NPTEL Elite Online',
    date: 'April 2025',
    certId: 'EMB-5541-9920',
    description: 'Advanced study of microcontroller registers, serial communication interfaces (UART, SPI, I2C), ADC, and sensor interfacing.',
    badgeColor: 'text-amber-500 bg-amber-500/10',
  },
  {
    id: 3,
    title: 'IoT Fundamentals',
    issuer: 'Cisco Networking Academy',
    date: 'October 2024',
    certId: 'IOT-8812-7729',
    description: 'Explores IoT systems architecture, sensor telemetry pipelines, network security fundamentals, and simple automation logic.',
    badgeColor: 'text-emerald-500 bg-emerald-500/10',
  },
  {
    id: 4,
    title: 'Cisco Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'December 2024',
    certId: 'NET-1102-8834',
    description: 'Covers core routing algorithms, IP subnetting (IPv4 & IPv6), switches, WAN models, and foundational OSI layer routing.',
    badgeColor: 'text-sky-500 bg-sky-500/10',
  },
  {
    id: 5,
    title: 'MATLAB Onramp',
    issuer: 'MathWorks',
    date: 'February 2024',
    certId: 'MAT-3382-1102',
    description: 'Introductory course covering matrix computations, dynamic plotting, signal generation, and symbolic analysis commands.',
    badgeColor: 'text-orange-500 bg-orange-500/10',
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 bg-slate-100/50 dark:bg-[#070b13]/40 relative">
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
            Licenses & <span className="text-gradient font-bold">Certifications</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="glass-card p-6 rounded-3xl glass-card-hover border border-white/20 dark:border-slate-800/40 flex flex-col justify-between h-full group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${cert.badgeColor}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    ID: {cert.certId.substring(0, 7)}...
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                  {cert.title}
                </h3>
                <span className="text-sm font-semibold text-slate-450 dark:text-slate-500 block mb-3">
                  {cert.issuer}
                </span>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200/50 dark:border-slate-800/50 pt-4 mt-auto">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1 text-xs font-bold text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light transition-colors hoverable"
                >
                  <Eye className="w-4 h-4" />
                  Verify Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-red-500/20 hover:text-red-500 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Inner Design */}
              <div className="p-8 md:p-12 text-center relative overflow-hidden bg-white dark:bg-slate-900">
                {/* Border frames */}
                <div className="absolute inset-4 border border-slate-200/60 dark:border-slate-800/60 pointer-events-none rounded-xl" />
                <div className="absolute inset-5 border-2 border-primary/20 dark:border-primary/10 pointer-events-none rounded-lg" />
                
                {/* Glow points */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header */}
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-primary/15 text-primary">
                    <AwardIcon className="w-10 h-10" />
                  </div>
                </div>

                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                  Verified Academic Achievement
                </span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
                  CERTIFICATE OF COMPLETION
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-450 italic mb-1">
                  This document officially certifies that
                </p>
                <h4 className="text-2xl font-bold text-gradient-purple mb-4">
                  D Lavanya
                </h4>
                
                <p className="text-sm text-slate-650 dark:text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
                  has successfully satisfied all academic course modules and projects required to obtain certification in
                </p>
                
                <h5 className="text-lg font-bold text-slate-800 dark:text-white border-y border-slate-200/50 dark:border-slate-800/50 py-3 mb-6 max-w-sm mx-auto">
                  {selectedCert.title}
                </h5>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 dark:border-slate-800/50 pt-6 mt-6 max-w-lg mx-auto">
                  <div className="text-left">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Issued By</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{selectedCert.issuer}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Online
                  </div>

                  <div className="text-right sm:text-right text-center">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">Credential ID</span>
                    <span className="text-sm font-mono font-medium text-slate-700 dark:text-slate-350">{selectedCert.certId}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
