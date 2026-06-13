import React from 'react';
import { motion } from 'framer-motion';
import { Image, Users, Cpu, Monitor, Radio } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Embedded Systems Lab',
    category: 'Workshops',
    src: '/ece_workshop.png',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-video md:aspect-auto md:h-[400px]',
  },
  {
    id: 2,
    title: 'Department Tech Fest',
    category: 'Technical Fests',
    src: '/ece_fest.png',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    title: 'Hackathon Sprint Team',
    category: 'Team Activities',
    icon: Users,
    gradient: 'from-violet-500/10 via-purple-500/20 to-pink-500/10',
    iconColor: 'text-purple-500',
    description: 'Working alongside computer science peers to build a full-stack IoT dashboard for real-time grid telemetry. 36 hours of non-stop learning!',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 4,
    title: 'IoT Prototype Showcase',
    category: 'Academic Events',
    icon: Cpu,
    gradient: 'from-sky-500/10 via-blue-500/20 to-indigo-500/10',
    iconColor: 'text-sky-500',
    description: 'Presented our Smart Home Hub prototype to visiting delegates. Gained valuable feedback on signal noise and power efficiency constraints.',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-square',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

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
            Academic <span className="text-gradient font-bold">Gallery</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {galleryItems.map((item, idx) => {
            const hasImage = !!item.src;
            const CardIcon = item.icon;

            return (
              <motion.div
                key={item.id}
                className={`glass-card rounded-3xl overflow-hidden border border-white/20 dark:border-slate-800/40 relative flex flex-col justify-between group glass-card-hover ${item.span} ${item.aspect}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {hasImage ? (
                  <>
                    {/* Image Render */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-primary-light font-bold mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Interactive Info Card Render */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between h-full`}>
                      <div className="flex justify-between items-start">
                        <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-md ${item.iconColor}`}>
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-450 bg-white/50 dark:bg-slate-800/50 px-2.5 py-1 rounded-full border border-white/20">
                          {item.category}
                        </span>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
