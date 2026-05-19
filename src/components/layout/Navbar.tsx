'use client';
import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[var(--text-primary)] tracking-tighter">
              MISSION<span className="text-[var(--accent)]">444</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--text-primary)]">
            <a href="#about" className="hover:text-[var(--accent)] transition-colors px-2 py-1">About</a>
            <a href="#programs" className="hover:text-[var(--accent)] transition-colors px-2 py-1">Programs</a>
            <a href="#reviews" className="hover:text-[var(--accent)] transition-colors px-2 py-1">Reviews</a>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-primary text-white shadow-lg shadow-[rgba(47,174,102,0.25)] hover:shadow-xl hover:shadow-[rgba(47,174,102,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <div 
              className="text-[var(--text-primary)] text-2xl cursor-pointer p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-4 py-4 border-t border-[var(--bg-mint)] text-[var(--text-primary)] font-semibold text-right items-end pr-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors py-2">About</a>
            <a href="#programs" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors py-2">Programs</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition-colors py-2">Reviews</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 px-8 py-3 rounded-full bg-gradient-primary text-white shadow-md">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
