'use client';
import React from 'react';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--bg-mint)] pt-16 pb-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12 text-center md:text-left">
          <div className="space-y-4 max-w-sm flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-black text-[var(--text-primary)] tracking-tighter">
              MISSION<span className="text-[var(--accent)]">444</span>
            </h3>
            <p className="text-[var(--text-primary)] font-bold text-lg">ASUHAR B</p>
            <p className="text-[var(--text-secondary)]">International Lifestyle Trainer</p>
            
            <div className="flex items-start gap-3 justify-center md:justify-start pt-4">
              <span className="text-[var(--accent)] text-xl">📍</span>
              <p className="text-[var(--text-secondary)] text-sm font-medium">
                MISSION 444 WELLNESS WORLD<br/>
                Mannarakonam, Vattiyoorkavu
              </p>
            </div>
          </div>
          
          <div className="space-y-4 max-w-md">
            <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-2 italic text-[var(--text-primary)] font-medium text-lg bg-gradient-soft rounded-r-2xl">
              "HEALTH IS NOT AN OPTION, ITS MANDATORY FOR NORMAL LIVING"
            </blockquote>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a href="##" className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.instagram.com/mission444wellness/" className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/Asuhar.B/" className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/asuhar-coach/" className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[var(--text-secondary)] font-medium mb-2">Join Our Community</p>
            <a href="tel:9809745714" className="inline-block px-6 py-3 bg-[var(--bg-light)] text-[var(--text-primary)] font-bold rounded-full hover:bg-[var(--bg-mint)] transition-colors shadow-sm">
              📞 9809745714
            </a>
          </div>
        </div>
        
        <div className="border-t border-[var(--bg-mint)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-[var(--text-secondary)] text-sm font-medium">
            © {new Date().getFullYear()} Mission 444 Wellness World. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-bold tracking-widest text-[var(--accent)] uppercase">
            <span>Building Wellness</span>
            <span className="hidden md:inline text-[var(--bg-mint)]">|</span>
            <span>Creating Wealth</span>
            <span className="hidden md:inline text-[var(--bg-mint)]">|</span>
            <span>Changing Lives</span>
          </div>

          <a 
            href="#top" 
            onClick={scrollToTop}
            className="absolute -top-6 right-0 md:static w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            aria-label="Return to Home"
          >
            <span className="text-xl group-hover:animate-bounce">🏠</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
