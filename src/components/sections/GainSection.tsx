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
    <section className="py-24 bg-[var(--background)] relative" id="benefits">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            What You Will <span className="text-[var(--accent)]">Gain</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-[rgba(255,140,26,0.1)] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm font-medium text-[var(--accent-secondary)]">{benefit.subtitle}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
