import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'ABC Technologies',
    duration: 'May 2025 - July 2025',
    type: 'Internship',
    responsibilities: [
      'Developed responsive web interfaces using HTML, CSS, JavaScript, and React, increasing mobile visitor retention by 15%.',
      'Collaborated with senior engineers and team members to design interface wireframes and integrate frontend views with REST APIs.',
      'Optimized asset loading speeds and refined rendering pipelines, achieving a 20% boost in overall page performance metrics.',
    ],
  },
  {
    id: 2,
    role: 'IoT Lab Assistant & Project Lead',
    company: 'KL University ECE Department',
    duration: 'November 2024 - April 2025',
    type: 'Academic Assignment',
    responsibilities: [
      'Supervised lab equipment configurations (signal generators, oscilloscopes, Arduino development boards) for junior batches.',
      'Led a 4-student project team to prototype and deploy a smart campus automation node, coordinating hardware assembly and unit testing.',
      'Organized and coordinated a weekend workshop on ESP32 sensor programming attended by 30+ students.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="text-gradient font-bold">Experience</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Pulsing Timeline Marker */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 flex items-center justify-center text-primary group">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden glass-card-hover">
                {/* Side glow bar */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-y from-primary to-secondary" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-450 dark:text-slate-500 mt-1">
                      <Building className="w-4 h-4" />
                      {exp.company}
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:text-primary-light font-bold">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 w-fit flex items-center gap-1.5 h-fit self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
