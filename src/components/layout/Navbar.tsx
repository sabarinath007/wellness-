'use client';
import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-[var(--text-primary)] tracking-tighter">
            MISSION<span className="text-[var(--accent)]">444</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--text-primary)]">
          <a href="#about" className="hover:text-[var(--accent)] transition-colors px-2 py-1">About</a>
          <a href="#programs" className="hover:text-[var(--accent)] transition-colors px-2 py-1">Programs</a>
          <a href="#reviews" className="hover:text-[var(--accent)] transition-colors px-2 py-1">Reviews</a>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-primary text-white shadow-lg shadow-[rgba(47,174,102,0.25)] hover:shadow-xl hover:shadow-[rgba(47,174,102,0.4)] hover:-translate-y-0.5 transition-all duration-300">
            Book Consultation
          </a>
        </div>
        <div className="md:hidden text-[var(--text-primary)] text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}
