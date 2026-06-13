import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    // Standard mock print download
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-slate-100/50 dark:bg-[#070b13]/40 relative">
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
            My <span className="text-gradient font-bold">Resume</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Resume Info - Left */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 bg-primary/10 text-primary dark:text-primary-light rounded-2xl w-fit">
              <FileText className="w-8 h-8 animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-snug">
              Curriculum Vitae Preview
            </h3>
            
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-sm">
              My resume outlines my academic foundations at KL University, technical skills in hardware modeling and frontend web systems, project contributions, and my professional internship at ABC Technologies.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500 h-fit mt-1">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">ECE Core & Programming</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mt-0.5">Focusing on Embedded C, Python, microcontrollers, and circuit designs.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500 h-fit mt-1">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">Industry Ready Experience</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mt-0.5">Frontend interface building, performance testing, and collaborative sprints.</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="btn-primary hoverable mt-4 shadow-md w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download PDF / Print
            </button>
          </motion.div>

          {/* Interactive Document Viewer - Right */}
          <motion.div
            className="lg:col-span-7 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800/40 relative">
              {/* Top border decor */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              
              {/* Document Header bar representing window controls */}
              <div className="bg-slate-200/50 dark:bg-slate-900/50 px-6 py-3 border-b border-slate-200/30 dark:border-slate-800/40 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-450 dark:text-slate-500 select-none">
                  lavanya_resume.pdf
                </span>
              </div>

              {/* Resume Sheet Body */}
              <div className="p-6 md:p-8 bg-white dark:bg-slate-950 font-sans text-left max-h-[500px] overflow-y-auto">
                {/* Header */}
                <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-5 mb-5 text-center sm:text-left">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">D Lavanya</h4>
                  <p className="text-xs text-primary dark:text-primary-light font-semibold tracking-wider uppercase mt-1">
                    Electronics & Communication Engineering Undergraduate
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-[10px] text-slate-500 dark:text-slate-450 mt-2 font-mono">
                    <span>lavanya.d@example.com</span>
                    <span>•</span>
                    <span>+91 9876543210</span>
                    <span>•</span>
                    <span>Vijayawada, AP</span>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-5">
                  <h5 className="text-xs font-bold text-slate-850 dark:text-slate-200 uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-850 pb-1 mb-2.5 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                    Education
                  </h5>
                  <div className="text-xs space-y-2">
                    <div>
                      <div className="flex justify-between font-bold text-slate-850 dark:text-white">
                        <span>B.Tech in Electronics & Comm. Engineering</span>
                        <span>2023 - Present</span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-slate-450 font-medium">
                        <span>KL University, Vijayawada</span>
                        <span>CGPA: 8.85 / 10.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-5">
                  <h5 className="text-xs font-bold text-slate-850 dark:text-slate-200 uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-850 pb-1 mb-2.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-secondary" />
                    Experience
                  </h5>
                  <div className="text-xs space-y-3">
                    <div>
                      <div className="flex justify-between font-bold text-slate-850 dark:text-white">
                        <span>Web Development Intern</span>
                        <span>May 2025 - July 2025</span>
                      </div>
                      <div className="text-slate-500 dark:text-slate-450 font-medium">
                        <span>ABC Technologies</span>
                      </div>
                      <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>Developed responsive interfaces using React, boosting speed benchmarks by 20%.</li>
                        <li>Collaborated on wireframes and REST API integration flows.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Core Projects */}
                <div className="mb-5">
                  <h5 className="text-xs font-bold text-slate-850 dark:text-slate-200 uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-850 pb-1 mb-2.5 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-accent" />
                    Academic Projects
                  </h5>
                  <div className="text-xs space-y-3">
                    <div>
                      <div className="flex justify-between font-bold text-slate-850 dark:text-white">
                        <span>Smart Home Automation System</span>
                        <span>2025</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-405 mt-0.5 leading-relaxed">
                        ESP32 node cluster controlling lighting and alerts via MQTT broker protocols and WiFi grids.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold text-slate-850 dark:text-white">
                        <span>AI-Based Traffic Monitoring</span>
                        <span>2024</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-405 mt-0.5 leading-relaxed">
                        YOLOv8 deep learning vehicle density counter with dynamic junction signal timers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h5 className="text-xs font-bold text-slate-850 dark:text-slate-200 uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-850 pb-1 mb-2.5">
                    Technical Skills Summary
                  </h5>
                  <div className="text-xs space-y-1.5">
                    <div className="grid grid-cols-3">
                      <span className="font-bold text-slate-800 dark:text-slate-300">Languages:</span>
                      <span className="col-span-2 text-slate-600 dark:text-slate-400">C, C++, Python, Java, JavaScript, HTML, CSS</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="font-bold text-slate-800 dark:text-slate-300">ECE Systems:</span>
                      <span className="col-span-2 text-slate-600 dark:text-slate-400">Embedded C, Arduino IDE, MATLAB, Digital Systems</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="font-bold text-slate-800 dark:text-slate-300">Libraries/Tools:</span>
                      <span className="col-span-2 text-slate-600 dark:text-slate-400">React.js, OpenCV, Git, GitHub, VS Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
