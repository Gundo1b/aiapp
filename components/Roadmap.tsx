import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Palette, GraduationCap, Code2, Rocket, Building2, Check } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';
import { CyberGrid } from './ui/BackgroundEffects';

const audiences = [
  {
    title: 'Creators & Designers',
    description: 'For unified visual and narrative creation.',
    icon: Palette,
    items: ['Image Generation', 'Storyboarding', 'Design Iteration']
  },
  {
    title: 'Students & Learners',
    description: 'For AI-aided learning and experimentation.',
    icon: GraduationCap,
    items: ['Tutoring', 'Research Summaries', 'Concept Explanations']
  },
  {
    title: 'Developers & Engineers',
    description: 'For fast, intelligent code assistance.',
    icon: Code2,
    items: ['Code Refactoring', 'System Design', 'Bug Fixing']
  },
  {
    title: 'Startups & Small Teams',
    description: 'For affordable, end-to-end creative power.',
    icon: Rocket,
    items: ['Marketing Assets', 'Rapid Prototyping', 'Content Strategy']
  },
  {
    title: 'Businesses',
    description: 'For integrated AI collaboration and automation.',
    icon: Building2,
    items: ['Workflow Automation', 'Team Collaboration', 'Secure Data Handling']
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section id="audience" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <CyberGrid />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Who is <span className="text-[#009DFF]">Integen AI</span> for?
            </h2>
            <p className="text-lg text-slate-300 font-light">
              Designed to empower every type of creator and builder.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={index * 100}>
              <Spotlight className="h-full rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 group cursor-default">
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-[#009DFF] group-hover:bg-[#009DFF] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-blue-900/20">
                      <audience.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#009DFF] transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {audience.description}
                  </p>

                  <div className="mt-auto space-y-3">
                    {audience.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 text-sm text-slate-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-[#009DFF]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                    {/* Placeholder for non-hover state to prevent layout shift */}
                    <div className="text-sm text-slate-500 italic opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-8">
                       Hover to see benefits...
                    </div>
                  </div>
                </div>
              </Spotlight>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};