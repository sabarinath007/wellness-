'use client';
import React from 'react';
import { Button } from '../ui/Button';

export function BookingSection() {
  return (
    <section className="py-24 bg-gradient-soft relative" id="contact">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="glass rounded-[3rem] p-8 md:p-16 max-w-5xl mx-auto shadow-2xl shadow-[rgba(47,174,102,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
                Begin Your <br/>
                <span className="text-gradient">Transformation</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Schedule a personalized consultation with Asuhar B. and take the first step towards a holistic, balanced lifestyle.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--accent)] shadow-sm">
                    ✨
                  </div>
                  <p className="font-bold text-[var(--text-primary)]">Tailored wellness plans</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--accent)] shadow-sm">
                    🌿
                  </div>
                  <p className="font-bold text-[var(--text-primary)]">Holistic approach</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--accent)] shadow-sm">
                    🤝
                  </div>
                  <p className="font-bold text-[var(--text-primary)]">1-on-1 Guidance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[var(--bg-mint)]">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-primary)] mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--bg-mint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(47,174,102,0.2)] transition-all outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-primary)] mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--bg-mint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(47,174,102,0.2)] transition-all outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-primary)] mb-2">How can we help?</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--bg-mint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(47,174,102,0.2)] transition-all outline-none">
                    <option>Weight Management</option>
                    <option>Skincare Routine</option>
                    <option>Mindfulness & Stress</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <Button variant="primary" className="w-full mt-4">
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
