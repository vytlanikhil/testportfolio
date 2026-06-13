import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, Cpu, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    color: 'from-violet-500 to-indigo-500',
    skills: [
      { name: 'C', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 75 },
    ],
  },
  {
    title: 'ECE Core Domains',
    icon: Cpu,
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Digital Electronics', level: 85 },
      { name: 'Analog Electronics', level: 80 },
      { name: 'Signals & Systems', level: 75 },
      { name: 'Communication Systems', level: 80 },
      { name: 'Microprocessors', level: 85 },
      { name: 'Embedded Systems & IoT', level: 90 },
    ],
  },
  {
    title: 'Software & Tools',
    icon: Wrench,
    color: 'from-sky-500 to-blue-500',
    skills: [
      { name: 'MATLAB', level: 80 },
      { name: 'Arduino IDE', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Git & GitHub', level: 80 },
    ],
  },
  {
    title: 'Professional Soft Skills',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Leadership & Teamwork', level: 90 },
      { name: 'Technical Communication', level: 85 },
      { name: 'Problem Solving', level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

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
            My <span className="text-gradient font-bold">Skills</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-card p-6 rounded-3xl glass-card-hover relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                {/* Decorative background mesh */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-200/50 to-transparent dark:from-slate-800/10 rounded-bl-3xl -z-10 pointer-events-none" />
                
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-md shadow-slate-200/10 dark:shadow-none`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress list */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-350">{skill.name}</span>
                        <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Custom bar tracks */}
                      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
