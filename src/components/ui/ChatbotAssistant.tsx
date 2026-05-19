'use client';
import React, { useState } from 'react';

export function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot' | 'user', text: string}[]>([
    { sender: 'bot', text: 'Hi there! 🌱 How can I help you with your wellness journey today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMessages = [...messages, { sender: 'user' as const, text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { sender: 'bot', text: "Thank you for reaching out! A wellness expert will contact you shortly to guide you further. For immediate assistance, please call 9809745714." }
      ]);
    }, 1000);
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
        className={`fixed bottom-24 left-6 z-50 w-80 max-h-[500px] bg-white rounded-3xl shadow-2xl border border-[var(--bg-mint)] overflow-hidden transition-all duration-300 transform origin-bottom-left ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-primary p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div>
              <h4 className="font-bold">Wellness Assistant</h4>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            ×
          </button>
        </div>

        {/* Chat Area */}
        <div className="p-4 h-64 overflow-y-auto bg-[var(--background)] space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.sender === 'user' 
                  ? 'bg-[var(--accent)] text-white rounded-br-none' 
                  : 'bg-white text-[var(--text-secondary)] border border-[var(--bg-mint)] rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-[var(--bg-mint)]">
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
              className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:bg-[var(--accent-secondary)] transition-colors"
            >
              ➤
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
