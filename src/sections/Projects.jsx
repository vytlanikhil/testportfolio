import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, CloudSun, UserCheck, Eye, ShieldAlert } from 'lucide-react';

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


const projectsData = [
  {
    id: 1,
    title: 'Smart Home Automation System',
    description: 'Designed a central smart hub utilizing ESP32 to control lighting, ventilation, and safety systems via Bluetooth and Wi-Fi. Features custom mobile app interface and low latency MQTT brokers.',
    category: 'IoT',
    tech: ['ESP32', 'C++', 'MQTT', 'Mit App Inventor'],
    icon: Cpu,
    color: 'from-violet-500/20 to-purple-500/30',
    iconColor: 'text-purple-500',
    github: 'https://github.com/priyasharma/smart-home-automation',
    demo: '#',
  },
  {
    id: 2,
    title: 'IoT Based Weather Monitoring System',
    description: 'A solar-powered remote weather station measuring humidity, temperature, and atmospheric pressure. Uploads sensor streams to a cloud database (ThingSpeak) with automated threshold SMS alerts.',
    category: 'IoT',
    tech: ['Arduino Uno', 'NodeMCU', 'ThingSpeak', 'DHT22', 'BMP280'],
    icon: CloudSun,
    color: 'from-sky-500/20 to-blue-500/30',
    iconColor: 'text-sky-500',
    github: 'https://github.com/priyasharma/iot-weather-monitoring',
    demo: '#',
  },
  {
    id: 3,
    title: 'Attendance Management System',
    description: 'A desktop application leveraging a local camera to automate student roll calls. Uses facial recognition algorithms and compiles weekly attendance reports into excel files automatically.',
    category: 'Software',
    tech: ['Python', 'OpenCV', 'Tkinter', 'Pandas'],
    icon: UserCheck,
    color: 'from-pink-500/20 to-rose-500/30',
    iconColor: 'text-rose-500',
    github: 'https://github.com/priyasharma/attendance-system',
    demo: '#',
  },
  {
    id: 4,
    title: 'AI Based Traffic Monitoring Solution',
    description: 'A computer vision pipeline designed for surveillance cameras to count vehicles and estimate traffic density. Provides dynamic traffic signal timers to reduce intersection gridlocks.',
    category: 'Software',
    tech: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV'],
    icon: Eye,
    color: 'from-emerald-500/20 to-teal-500/30',
    iconColor: 'text-emerald-500',
    github: 'https://github.com/priyasharma/ai-traffic-monitoring',
    demo: '#',
  },
];

const categories = ['All', 'IoT', 'Software'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 bg-slate-100/50 dark:bg-[#070b13]/40 relative">
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
            My Featured <span className="text-gradient font-bold">Projects</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all hoverable ${
                  isActive
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-500 dark:text-slate-450 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-white dark:bg-slate-800 shadow rounded-xl border border-slate-200/50 dark:border-slate-700/50 -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                {cat === 'All' ? 'All Projects' : cat === 'IoT' ? 'IoT & Hardware' : 'Software & AI'}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-3xl overflow-hidden glass-card-hover border border-white/20 dark:border-slate-800/40 flex flex-col h-full group"
                >
                  {/* Decorative Gradient Header block */}
                  <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    {/* Glowing circular element */}
                    <div className="absolute w-36 h-36 rounded-full bg-white/20 blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                    
                    {/* Floating circuitry background line */}
                    <svg className="absolute inset-0 w-full h-full opacity-10 stroke-current text-slate-900 dark:text-white pointer-events-none" fill="none">
                      <path d="M 0,20 H 60 L 80,40 V 100 H 150 L 170,120 H 300" strokeWidth="2" />
                      <path d="M 200,10 H 250 L 265,25 V 80 H 400" strokeWidth="2" />
                    </svg>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-lg ${project.iconColor} z-10`}
                    >
                      <ProjectIcon className="w-10 h-10" />
                    </motion.div>
                    
                    <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-650 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-350 dark:border-slate-700 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all duration-200 hoverable"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200 hoverable"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
