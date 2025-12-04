import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  // Added transform, active:scale-95, and hover:-translate-y-0.5 for animation
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900/30 border border-transparent",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shadow-sm",
    outline: "bg-transparent border border-primary text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};