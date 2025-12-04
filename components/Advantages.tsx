import React from 'react';
import { Zap, Layers, DollarSign, Lock, LayoutGrid, Award } from 'lucide-react';
import { Advantage } from '../types';
import { ScrollReveal } from './ScrollReveal';

const advantages: Advantage[] = [
  { category: 'Speed', description: 'Unified access removes tool switching lag.' },
  { category: 'Quality', description: 'Ensemble routing to best-performing models.' },
  { category: 'Ease', description: 'Single account and consistent UX across all tasks.' },
  { category: 'Cost', description: 'Replace multiple subscriptions with one smart plan.' },
  { category: 'Scalability', description: 'Works for solo creators and enterprise teams.' },
  { category: 'Security', description: 'Privacy-first data handling and encryption.' },
];

const iconMap: Record<string, React.ReactNode> = {
  Speed: <Zap className="w-6 h-6" />,
  Quality: <Award className="w-6 h-6" />,
  Ease: <LayoutGrid className="w-6 h-6" />,
  Cost: <DollarSign className="w-6 h-6" />,
  Scalability: <Layers className="w-6 h-6" />,
  Security: <Lock className="w-6 h-6" />,
};

export const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 animate-blob opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 animate-blob animation-delay-2000 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why <span className="text-[#009DFF]">Integen AI</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Stop juggling tools. We've built the unified platform for speed, quality, and scale.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((adv, index) => (
            <ScrollReveal key={adv.category} delay={index * 100}>
              <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:bg-[#009DFF] group-hover:text-white transition-colors duration-300 group-hover:scale-110 group-hover:rotate-6 transform">
                    {iconMap[adv.category]}
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200">{adv.category}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">{adv.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};