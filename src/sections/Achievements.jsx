import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, BookOpen, ShieldCheck, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

const achievementsData = [
  {
    id: 1,
    title: "Dean's List 2024",
    subtitle: "KL University",
    description: "Awarded academic excellence recognition for maintaining a CGPA above 8.5 during the academic year 2023-24.",
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-500',
  },
  {
    id: 2,
    title: "Top 10 in Department Hackathon",
    subtitle: "ECE Association",
    description: "Secured a top 10 finish among 50+ participating teams in designing an IoT-based smart power grid monitoring prototype.",
    icon: Medal,
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-500',
  },
  {
    id: 3,
    title: "NPTEL Elite Certification",
    subtitle: "Ministry of Education, Govt. of India",
    description: "Completed course on Microprocessors and Microcontrollers with 'Elite' rank, scoring in the top 5% nationwide.",
    icon: BookOpen,
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-rose-500/10',
    textColor: 'text-rose-500',
  },
  {
    id: 4,
    title: "Cisco Networking Certificate",
    subtitle: "Cisco Networking Academy",
    description: "Completed the CCNA Routing and Switching essentials course, establishing foundational computer network designs.",
    icon: ShieldCheck,
    color: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-500/10',
    textColor: 'text-sky-500',
  },
  {
    id: 5,
    title: "IEEE Student Member",
    subtitle: "IEEE Student Branch KL University",
    description: "Active member, contributing to workshops on VLSI and wireless systems and participating in technical webinars.",
    icon: Users,
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-500',
  },
];

export default function Achievements() {
  const triggerConfetti = (e) => {
    // Confetti originates near the clicked card or center
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors: ['#8B5CF6', '#EC4899', '#38BDF8', '#10B981'],
    });
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
            Academic <span className="text-gradient font-bold">Achievements</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 dark:text-slate-400 text-sm mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Click any card to celebrate!
          </motion.p>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-3 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                onClick={triggerConfetti}
                className="glass-card p-6 md:p-8 rounded-3xl glass-card-hover border border-white/20 dark:border-slate-800/40 relative cursor-pointer overflow-hidden group select-none flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-80`} />

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-350`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & subtitle */}
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-450 dark:text-slate-500 block mb-3">
                    {item.subtitle}
                  </span>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-405 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Click Hint tag */}
                <div className="text-right mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary dark:text-primary-light font-bold">
                    Celebrate ⚡
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
