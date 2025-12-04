import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  from?: 'bottom' | 'top' | 'left' | 'right';
  split?: 'letter' | 'word'; // Currently optimized for 'letter'
  delay?: number;
  distance?: number;
  stiffness?: number;
  damping?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className = "", 
  from = "bottom",
  split = "letter",
  delay = 0,
  distance = 20,
  stiffness = 50,
  damping = 15
}) => {
  const letters = children.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: delay 
      },
    }),
  };

  const getInitialPosition = () => {
    switch (from) {
      case 'bottom': return { y: distance };
      case 'top': return { y: -distance };
      case 'left': return { x: -distance };
      case 'right': return { x: distance };
      default: return { y: distance };
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: damping,
        stiffness: stiffness,
      },
    },
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      transition: {
        type: "spring",
        damping: damping,
        stiffness: stiffness,
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