/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Motos from './components/Motos';
import Cursos from './components/Cursos';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/motos" element={
            <PageTransition>
              <Motos />
            </PageTransition>
          } />
          <Route path="/cursos" element={
            <PageTransition>
              <Cursos />
            </PageTransition>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black selection:bg-brand-orange selection:text-black relative">
        <div className="geometric-bg"></div>
        <Navbar />
        <main className="container mx-auto px-4 md:px-8">
          <AnimatedRoutes />
        </main>

        <a 
          href="https://www.tiktok.com/@motoescuela_biker?_r=1&_t=ZS-969FiOITpdV" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-48 right-8 z-[100] bg-black border border-white/20 text-white p-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center w-16 h-16"
          aria-label="Seguinos en TikTok"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.71-.29-3.27 2.2-6.44 5.43-7.24 1.1-.25 2.24-.26 3.37-.09v4.29c-1.12-.41-2.43-.24-3.41.49-.9.68-1.24 1.83-1.05 2.92.14 1.17 1.19 2.29 2.37 2.39 1.19.06 2.45-.63 2.92-1.74.2-.42.27-.89.26-1.36.03-5.26.02-10.51.02-15.77z"/>
          </svg>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            ¡Seguinos en TikTok!
          </span>
        </a>

        <a 
          href="https://www.instagram.com/motoescuelabiker/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-28 right-8 z-[100] bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(220,39,67,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Seguinos en Instagram"
        >
          <Instagram size={32} className="text-white" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            ¡Seguinos en Instagram!
          </span>
        </a>

        <a 
          href="https://wa.me/5491121646353" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" className="text-white" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            ¿Consultas? ¡Chateemos!
          </span>
        </a>
        
        <footer className="border-t border-white/10 py-8 px-6 mt-12 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-black italic text-lg tracking-tighter uppercase mb-1">
                MOTOESCUELA <span className="text-brand-orange">BIKER</span>
              </div>
              <div>© {new Date().getFullYear()} Moto Escuela Profesional</div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
