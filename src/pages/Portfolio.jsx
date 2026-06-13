import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Research from '../sections/Research';
import Certifications from '../sections/Certifications';
import Gallery from '../sections/Gallery';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import ParticlesBg from '../components/ParticlesBg';
import ScrollProgress from '../components/ScrollProgress';
import CustomCursor from '../components/CustomCursor';
import SurpriseModal from '../components/SurpriseModal';
import { Heart } from 'lucide-react';

export default function Portfolio() {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background connecting circuit dots */}
      <ParticlesBg />
      
      {/* Scroll indicator along the very top of page */}
      <ScrollProgress />
      
      {/* Custom responsive mouse follower */}
      <CustomCursor />
      
      {/* Floating navigation header */}
      <Navbar />
      
      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Certifications />
        <Gallery />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer controls & social tags */}
      <Footer />

      {/* Floating Surprise Note Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsSurpriseOpen(true)}
          className="p-3.5 rounded-full bg-pink-500 text-white hover:bg-rose-500 active:scale-95 transition-all shadow-lg hover:shadow-pink-500/30 hoverable flex items-center justify-center animate-[pulse_1.5s_infinite]"
          aria-label="Surprise Note"
        >
          <Heart className="w-5 h-5 fill-current" />
        </button>
      </div>

      {/* Surprise Modal Letter */}
      <SurpriseModal isOpen={isSurpriseOpen} onClose={() => setIsSurpriseOpen(false)} />
    </div>
  );
}

