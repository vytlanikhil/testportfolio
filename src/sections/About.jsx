import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Compass, Heart, Calendar } from 'lucide-react';

const timelineData = [
  {
    role: 'B.Tech in Electronics & Communication Engineering',
    institution: 'KL University, Vijayawada',
    duration: '2023 - Present',
    details: 'Current CGPA: 8.85/10. Core coursework includes Embedded Systems, Microprocessors, VLSI Design, Analog/Digital Communications.',
  },
  {
    role: 'Intermediate / Senior Secondary Education (Class XII)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2021 - 2023',
    details: 'Completed with 96.8%. Major in Physics, Chemistry, and Mathematics (MPC stream).',
  },
  {
    role: 'Secondary School Certificate (Class X)',
    institution: 'Narayana High School',
    duration: '2021',
    details: 'Scored 10/10 GPA. Developed initial interest in science and programming fests.',
  },
];

const goalsData = [
  {
    title: 'Embedded AI Solutions',
    description: 'Bridge the gap between edge computing and artificial intelligence by designing hardware-efficient machine learning models for low-power IoT microcontrollers.',
  },
  {
    title: 'VLSI Circuit Architecture',
    description: 'Contribute to next-generation system-on-chip (SoC) architectures, working on digital VLSI design flow and functional verification.',
  },
  {
    title: 'Innovative IoT Ecosystems',
    description: 'Build sustainable, connected devices in agriculture, healthcare, and smart cities using modern wireless protocols (LoRa, Zigbee, BLE).',
  },
];

const interestsData = [
  {
    name: 'Hackathons & Fests',
    icon: '⚡',
    desc: 'Participating in engineering fests and 36-hour coding sprints. Active builder in departmental challenges.',
  },
  {
    name: 'IoT Prototyping',
    icon: '🔌',
    desc: 'Tinkering with microcontrollers (ESP32, STM32, Arduino) and sensors to automate household gadgets.',
  },
  {
    name: 'Robotics Club',
    icon: '🤖',
    desc: 'Active member of the college robotics society, focusing on firmware dev and sensor integration.',
  },
  {
    name: 'Tech Blogging',
    icon: '✍️',
    desc: 'Writing tutorials on basic circuit design, Arduino coding, and simple full-stack web integration.',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <section id="about" className="py-24 bg-slate-100/50 dark:bg-[#070b13]/40 relative">
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* About Left - Bio & Details Card */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
              {/* Highlight gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary" />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Priya Sharma
              </h3>
              <p className="text-slate-650 dark:text-slate-400 mb-6 leading-relaxed">
                I am an enthusiastic Electronics and Communication Engineering student passionate about solving real-world problems using technology. I enjoy working on IoT systems, embedded programming, web technologies, and innovative engineering projects.
              </p>

              {/* Bio Grid */}
              <div className="space-y-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-primary-light">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-mono">College</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">KL University, Vijayawada</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary dark:text-secondary-light">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 uppercase font-mono">Degree & CGPA</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">B.Tech ECE (3rd Year) • CGPA 8.85</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive Stats Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl text-center">
                <span className="block text-3xl font-extrabold text-primary">5+</span>
                <span className="text-xs text-slate-550 dark:text-slate-400 font-medium mt-1 block">Hardware Prototypes</span>
              </div>
              <div className="glass-card p-5 rounded-2xl text-center">
                <span className="block text-3xl font-extrabold text-secondary">6+</span>
                <span className="text-xs text-slate-550 dark:text-slate-400 font-medium mt-1 block">Certificates Completed</span>
              </div>
            </div>
          </motion.div>

          {/* About Right - Interactive Tabs */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tabs Selector */}
            <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-200/50 dark:bg-slate-900/60 border border-slate-200/30 dark:border-slate-800/40 mb-8 self-center sm:self-start">
              {[
                { id: 'timeline', label: 'Education', icon: GraduationCap },
                { id: 'goals', label: 'Career Goals', icon: Compass },
                { id: 'interests', label: 'Interests', icon: Heart },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all hoverable ${
                      isActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 dark:text-slate-450 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200/20 dark:border-slate-700/30 -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tabs Display Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'timeline' && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8"
                  >
                    {timelineData.map((item, idx) => (
                      <div key={idx} className="relative pl-6 md:pl-8 group">
                        {/* Dot */}
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h4 className="text-base md:text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                            {item.role}
                          </h4>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 w-fit flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.duration}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-450 dark:text-slate-500 block mb-2">
                          {item.institution}
                        </span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'goals' && (
                  <motion.div
                    key="goals"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 gap-6"
                  >
                    {goalsData.map((goal, idx) => (
                      <div key={idx} className="glass-card p-6 rounded-2xl glass-card-hover relative overflow-hidden group">
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-y from-primary to-secondary" />
                        <h4 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                          {goal.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'interests' && (
                  <motion.div
                    key="interests"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {interestsData.map((item, idx) => (
                      <div key={idx} className="glass-card p-6 rounded-2xl glass-card-hover">
                        <span className="text-3xl mb-3 block">{item.icon}</span>
                        <h4 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mb-1.5">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
