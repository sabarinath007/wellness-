import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-primary text-white shadow-[0_8px_20px_rgba(47,174,102,0.25)] hover:shadow-[0_12px_25px_rgba(47,174,102,0.4)] border border-transparent",
    secondary: "bg-[var(--surface)] text-[var(--text-primary)] shadow-sm hover:shadow-md border border-[var(--bg-mint)] hover:border-[var(--accent)]",
    outline: "bg-transparent text-[var(--text-primary)] border-2 border-[var(--bg-mint)] hover:border-[var(--accent)] hover:bg-[rgba(47,174,102,0.05)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
