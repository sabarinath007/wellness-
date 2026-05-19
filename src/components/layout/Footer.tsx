import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--bg-mint)] pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-[var(--text-primary)] tracking-tighter">
              MISSION<span className="text-[var(--accent)]">444</span>
            </h3>
            <p className="text-[var(--text-primary)] font-bold text-lg">ASUHAR B</p>
            <p className="text-[var(--text-secondary)]">International Lifestyle Trainer</p>
          </div>
          
          <div className="space-y-4 max-w-md">
            <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-2 italic text-[var(--text-primary)] font-medium text-lg bg-gradient-soft rounded-r-2xl">
              "HEALTH IS NOT AN OPTION, ITS MANDATORY FOR NORMAL LIVING"
            </blockquote>
          </div>

          <div className="space-y-4">
            <p className="text-[var(--text-secondary)] font-medium mb-2">Join Our Community</p>
            <a href="tel:9809745714" className="inline-block px-6 py-3 bg-[var(--bg-light)] text-[var(--text-primary)] font-bold rounded-full hover:bg-[var(--bg-mint)] transition-colors">
              📞 9809745714
            </a>
          </div>
        </div>
        
        <div className="border-t border-[var(--bg-mint)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-sm font-medium">
            © {new Date().getFullYear()} Mission 444 Wellness World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
