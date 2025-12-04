import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  from?: 'bottom' | 'top' | 'left' | 'right';
  split?: 'letter' | 'word'; // Currently optimized for 'letter'
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className = "", 
  from = "bottom",
  split = "letter",
  delay = 0 
}) => {
  const letters = children.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, // Slower sequence (was 0.03)
        delayChildren: delay 
      },
    }),
  };

  const getInitialPosition = () => {
    switch (from) {
      case 'bottom': return { y: 20 };
      case 'top': return { y: -20 };
      case 'left': return { x: -20 };
      case 'right': return { x: 20 };
      default: return { y: 20 };
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 15, // Increased damping for less bounce/slower settle
        stiffness: 50, // Reduced stiffness for slower movement
      },
    },
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block whitespace-pre-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};