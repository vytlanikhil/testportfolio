import React from 'react';
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

export default function Portfolio() {
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
    </div>
  );
}
