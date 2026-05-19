'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    title: 'Fat Loss Journey',
    name: 'Priya K.',
    achievement: 'Healthy Weight Management',
    desc: 'From struggling with uniform fit to achieving incredible fitness and energy levels. A complete lifestyle transformation!',
    image: '/review_1.jpg'
  },
  {
    id: 2,
    title: 'Complete Body Recomposition',
    name: 'Rajesh V.',
    achievement: 'Holistic Transformation',
    desc: 'Reversed years of unhealthy habits. Lost significant belly fat and gained a much healthier, youthful appearance.',
    image: '/review_2.jpg'
  },
  {
    id: 3,
    title: 'Confidence Restored',
    name: 'Sneha M.',
    achievement: 'Sustainable Weight Loss',
    desc: 'Shed the extra weight in a healthy, sustainable way while feeling more confident and radiant than ever.',
    image: '/review_3.jpg'
  },
  {
    id: 4,
    title: 'Radiant Skin Transformation',
    name: 'Anjali D.',
    achievement: 'Clear, Glowing Skin',
    desc: 'Cleared severe acne and restored natural skin glow through holistic detox and tailored nutrition.',
    image: '/review_4.jpg'
  },
  {
    id: 5,
    title: 'Vitality & Fitness',
    name: 'Manoj P.',
    achievement: 'Significant Fat Loss',
    desc: 'Lost the heavy belly and completely changed his physique, regaining stamina and vitality.',
    image: '/review_5.jpg'
  }
];

function ScrollRevealCard({ children, index }: { children: React.ReactNode; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
}

export function ReviewSection() {
  return (
    <section className="py-24 bg-[var(--surface)] relative overflow-hidden" id="reviews">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Real <span className="text-[var(--accent)]">Results</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-[var(--text-secondary)] text-lg">
            Experience the profound before and after transformations of our dedicated community members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <ScrollRevealCard key={review.id} index={index}>
              <div className="group glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[rgba(47,174,102,0.15)] transition-all duration-500 transform hover:-translate-y-2 border border-[var(--bg-mint)] hover:border-[var(--accent)] flex flex-col h-full">
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                  <Image 
                    src={review.image} 
                    alt={review.title} 
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="inline-block px-3 py-1 bg-[var(--accent)] text-white text-[10px] uppercase tracking-wider font-bold rounded-full mb-2">
                      {review.achievement}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{review.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{review.desc}</p>
                  <p className="text-[var(--text-primary)] font-bold">— {review.name}</p>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
