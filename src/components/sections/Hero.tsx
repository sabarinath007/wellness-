import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-soft" id="about">
      {/* Soft rounded background shapes */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[var(--accent)] rounded-full mix-blend-overlay filter blur-[120px] opacity-30" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 rounded-full border border-[var(--accent)] bg-white text-[var(--accent)] text-sm font-bold tracking-wide shadow-sm">
              PREMIUM HOLISTIC CARE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
              Elevate Your <br />
              <span className="text-gradient">Well-being</span>
            </h1>
            
            <div className="space-y-2 border-l-4 border-[var(--accent)] pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm shadow-sm max-w-lg">
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium">with</p>
              <p className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">ASUHAR B</p>
              <p className="text-sm tracking-widest text-[var(--accent)] uppercase font-bold">International Lifestyle Trainer</p>
            </div>

            <blockquote className="text-xl md:text-2xl italic font-medium text-[var(--text-primary)] border-t border-b border-white/50 py-6 my-8">
              "HEALTH IS NOT AN OPTION, <br/>
              <span className="text-[var(--accent)] font-bold">ITS MANDATORY</span> FOR NORMAL LIVING"
            </blockquote>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact">
                <Button variant="primary" className="text-lg">
                  Start Your Journey
                </Button>
              </a>
              <a href="#programs">
                <Button variant="outline" className="text-lg">
                  Explore Programs
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Floating Health Score Widget */}
            <div className="absolute top-10 right-10 glass rounded-3xl p-6 w-64 shadow-2xl shadow-[rgba(47,174,102,0.15)] transform translate-y-4 hover:-translate-y-2 transition-transform duration-500 z-20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-[var(--text-primary)]">Health Score</span>
                <span className="text-xl">🌿</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-[var(--accent)]">98</span>
                <span className="text-[var(--text-secondary)] font-medium mb-1">/100</span>
              </div>
              <div className="w-full bg-[var(--bg-mint)] h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-[var(--accent)] h-full w-[98%] rounded-full"></div>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-20 left-0 glass rounded-3xl p-6 w-72 shadow-2xl shadow-[rgba(47,174,102,0.15)] transform -translate-y-4 hover:translate-y-2 transition-transform duration-500 z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl shadow-lg shadow-[rgba(47,174,102,0.3)]">
                  ✨
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Holistic Balance</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Mind, Body & Spirit</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">Experience a complete transformation customized to your unique lifestyle needs.</p>
            </div>

            {/* Main Center Image Placeholder (using a beautiful CSS shape since no image) */}
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-white/40 backdrop-blur-md rounded-full shadow-[0_0_80px_rgba(47,174,102,0.15)] border border-white flex items-center justify-center z-10 overflow-hidden">
              <div className="w-[120%] h-[120%] bg-gradient-primary opacity-10 animate-spin-slow rounded-[40%]"></div>
              <div className="absolute text-8xl text-[var(--accent)] opacity-20">🌱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
