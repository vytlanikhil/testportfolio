import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring animations for smooth follow-lag
  const springConfig = { damping: 35, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop/pointing devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    // Add global class to body to hide default cursor
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Attach listeners for interactive elements to scale the cursor
    const attachHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .hoverable'
      );
      
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial attach and set up observer to handle dynamically loaded content
    attachHoverListeners();
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Lagging outer glowing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 dark:border-primary/60 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
      {/* Inner instant dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isClicking ? 1.2 : isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
