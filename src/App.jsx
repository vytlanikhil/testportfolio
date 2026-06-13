import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import { registerPWA } from './pwa';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Register PWA service worker
    registerPWA();
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <Router key="content">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
