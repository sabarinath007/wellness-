import React from 'react';
import { Card } from '../ui/Card';

const benefits = [
  { icon: '🍽️', title: 'EAT RIGHT', subtitle: 'LIVE RIGHT' },
  { icon: '❤️', title: 'BETTER HEALTH', subtitle: 'BETTER LIFE' },
  { icon: '🧘', title: 'MENTAL PEACE', subtitle: '& CLARITY' },
  { icon: '🛡️', title: 'STRONG IMMUNITY', subtitle: 'EVERYDAY' },
  { icon: '📈', title: 'ENERGY TODAY', subtitle: 'SUCCESS TOMORROW' },
];

export function GainSection() {
  return (
    <section className="py-24 bg-[var(--background)] relative border-b border-[var(--bg-mint)]" id="benefits">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] uppercase tracking-widest">
            What You Will <span className="text-[var(--accent)]">Gain</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group bg-white border border-[var(--bg-mint)] hover:border-[var(--accent)] shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-soft flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-[var(--text-primary)] mb-1 uppercase tracking-wider">{benefit.title}</h3>
              <p className="text-xs md:text-sm font-semibold text-[var(--accent)] uppercase">{benefit.subtitle}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
