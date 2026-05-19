'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: "What makes your holistic approach different?",
    answer: "We don't believe in quick fixes. Our programs are designed to create sustainable lifestyle changes by integrating nutrition, mindfulness, and gentle movement tailored specifically to your body's unique needs."
  },
  {
    question: "How long does it take to see results?",
    answer: "While many clients feel an increase in energy and mental clarity within the first two weeks, visible physical transformations typically take 8 to 12 weeks of consistent adherence to the personalized program."
  },
  {
    question: "Do I need any special equipment for the fitness programs?",
    answer: "Not at all. Our holistic fitness routines are designed to be accessible and can be performed entirely from the comfort of your home using just your body weight and minimal space."
  },
  {
    question: "Are the meal plans customizable for dietary restrictions?",
    answer: "Absolutely. During your initial consultation, we thoroughly assess your dietary preferences, allergies, and restrictions to craft a meal plan that is both enjoyable and deeply nourishing."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[var(--surface)] relative border-t border-[var(--bg-mint)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Frequently Asked <span className="text-[var(--accent)]">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-[var(--bg-mint)] rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[var(--background)] shadow-md' : 'bg-white hover:border-[var(--accent)]'}`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-[var(--text-primary)] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-[var(--accent)] ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`px-6 text-[var(--text-secondary)] transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
