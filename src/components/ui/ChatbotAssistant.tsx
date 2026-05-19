'use client';
import React, { useState, useEffect, useRef } from 'react';

type Message = {
  sender: 'bot' | 'user';
  text: string | React.ReactNode;
};

export function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi there! 🌱 Welcome to Mission 444 Wellness World. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateBotResponse = (userInput: string): React.ReactNode => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.match(/\b(hi|hello|hey|start)\b/)) {
      return (
        <div className="space-y-2">
          <p>Thank you for contacting us! We offer a range of holistic wellness programs.</p>
          <p className="font-bold">What would you like to know more about?</p>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li>Type <strong>"programs"</strong> or <strong>"services"</strong> to see what we offer.</li>
            <li>Type <strong>"faq"</strong> or <strong>"questions"</strong> for common queries.</li>
            <li>Type <strong>"contact"</strong> to book a consultation.</li>
          </ul>
        </div>
      );
    }
    
    if (lowerInput.match(/\b(program|programs|service|services)\b/)) {
      return (
        <div className="space-y-2">
          <p>Our core wellness programs include:</p>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li><strong>Mindful Nutrition:</strong> Tailored diet plans.</li>
            <li><strong>Holistic Fitness:</strong> Sustainable exercise routines.</li>
            <li><strong>Radiant Skincare:</strong> Internal detox for clear skin.</li>
            <li><strong>Sleep & Recovery:</strong> Stress management techniques.</li>
          </ul>
          <p className="italic mt-2">Reply with "contact" to start your journey!</p>
        </div>
      );
    }

    if (lowerInput.match(/\b(faq|question|questions|help)\b/)) {
      return (
        <div className="space-y-2">
          <p className="font-bold">Frequently Asked Questions:</p>
          <ul className="list-disc pl-4 space-y-2 text-xs">
            <li><strong>How long to see results?</strong> Usually 8-12 weeks of consistency.</li>
            <li><strong>Need equipment?</strong> No, workouts are home-based.</li>
            <li><strong>Dietary restrictions?</strong> Yes, meal plans are fully customized!</li>
          </ul>
        </div>
      );
    }

    if (lowerInput.match(/\b(contact|book|consultation|call)\b/)) {
      return (
        <div>
          <p>Great! You can book a consultation by scrolling to the <strong>Book Consultation</strong> section on our page.</p>
          <p className="mt-2">For immediate assistance, please call us directly at <strong>9809745714</strong>.</p>
        </div>
      );
    }

    // Default response
    return (
      <div className="space-y-2">
        <p>I'm still learning! But I can help you find what you need.</p>
        <p>Try asking about our <strong>"programs"</strong>, <strong>"faq"</strong>, or how to <strong>"contact"</strong> us.</p>
      </div>
    );
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    // Simulate thinking delay
    setTimeout(() => {
      const response = generateBotResponse(userMessage);
      setMessages((prev) => [
        ...prev, 
        { sender: 'bot', text: response }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-primary rounded-full shadow-[0_4px_20px_rgba(47,174,102,0.4)] hover:shadow-[0_6px_25px_rgba(47,174,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-white text-3xl group"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? '×' : '💬'}
        {!isOpen && (
          <span className="absolute left-full ml-4 bg-white text-gray-900 text-sm py-1 px-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Chat with us
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 left-6 z-50 w-80 max-h-[500px] flex flex-col bg-white rounded-3xl shadow-2xl border border-[var(--bg-mint)] overflow-hidden transition-all duration-300 transform origin-bottom-left ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-primary p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div>
              <h4 className="font-bold">Wellness Assistant</h4>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-2xl leading-none">
            ×
          </button>
        </div>

        {/* Chat Area */}
        <div className="p-4 h-80 overflow-y-auto bg-[var(--background)] space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                msg.sender === 'user' 
                  ? 'bg-[var(--accent)] text-white rounded-br-none' 
                  : 'bg-white text-[var(--text-secondary)] border border-[var(--bg-mint)] rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-[var(--bg-mint)] shrink-0">
          <form onSubmit={handleSend} className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..." 
              className="flex-grow px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--bg-mint)] focus:outline-none focus:border-[var(--accent)] text-sm text-[var(--text-primary)]"
            />
            <button 
              type="submit"
              className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:bg-[var(--accent-secondary)] transition-colors shrink-0"
            >
              ➤
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
