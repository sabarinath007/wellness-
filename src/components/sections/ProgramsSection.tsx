import React from 'react';
import { Card } from '../ui/Card';

const programs = [
  { icon: '🌿', title: 'Mindful Nutrition', desc: 'Personalized meal planning focusing on organic, whole foods that naturally nourish the body.' },
  { icon: '🧘‍♀️', title: 'Holistic Fitness', desc: 'Gentle, sustainable movement routines designed to build strength and flexibility without burnout.' },
  { icon: '✨', title: 'Radiant Skincare', desc: 'Inside-out approaches to achieving naturally glowing skin through hydration and detox protocols.' },
  { icon: '🌙', title: 'Sleep & Recovery', desc: 'Techniques and habits to ensure deep, restorative sleep essential for overall wellness.' },
];

export function ProgramsSection() {
  return (
    <section className="py-24 bg-[var(--background)] relative" id="programs">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Our Premium <br/>
            <span className="text-[var(--accent)]">Wellness Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-[var(--text-secondary)] text-lg">
            Curated holistic journeys tailored to align your mind, body, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="text-center group bg-white border border-[var(--bg-mint)] hover:border-[var(--accent)] shadow-sm">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-soft flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{program.title}</h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] leading-relaxed">{program.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
