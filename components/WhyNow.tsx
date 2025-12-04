import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const WhyNow: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-widest text-[#009DFF] uppercase mb-6 animate-pulse-slow">Why Now</h2>
            
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10 leading-tight">
              The AI landscape is expanding — <br className="hidden md:block" />
              but <span className="relative inline-block">
                <span className="relative z-10">fragmented</span>
                <span className="absolute bottom-1 left-0 w-0 h-3 bg-red-200 dark:bg-red-900/50 -rotate-2 -z-0 animate-grow-width"></span>
              </span>.
            </h3>
            
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                Integen emerges at the perfect intersection of <span className="font-semibold text-slate-900 dark:text-white">accessibility</span>, <span className="font-semibold text-slate-900 dark:text-white">creativity</span>, and <span className="font-semibold text-slate-900 dark:text-white">engineering</span>, empowering everyone to build and express faster than ever before.
                </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};