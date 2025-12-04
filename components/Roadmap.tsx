import React from 'react';
import { RoadmapPhase } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, Users, Briefcase, GraduationCap, Code2, Rocket } from 'lucide-react';

// Repurposing the RoadmapPhase interface for Audience Data to maintain layout
const audiences: RoadmapPhase[] = [
  {
    version: 'Creators',
    focus: '& Designers',
    timeline: 'Visual & Narrative',
    status: 'current',
    items: [
      'Unified visual and narrative creation',
    ]
  },
  {
    version: 'Students',
    focus: '& Learners',
    timeline: 'Education',
    status: 'current',
    items: [
      'AI-aided learning and experimentation',
    ]
  },
  {
    version: 'Developers',
    focus: '& Engineers',
    timeline: 'Code Assistance',
    status: 'current',
    items: [
      'Fast, intelligent code assistance',
    ]
  },
  {
    version: 'Startups',
    focus: '& Small Teams',
    timeline: 'Growth',
    status: 'current',
    items: [
      'Affordable, end-to-end creative power',
    ]
  },
  {
    version: 'Businesses',
    focus: '& Enterprise',
    timeline: 'Automation',
    status: 'current',
    items: [
      'Integrated AI collaboration and automation',
    ]
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section id="audience" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Target <span className="text-[#009DFF]">Audience</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Integen AI is designed for:
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#64E1FF] via-[#009DFF] to-slate-200 dark:to-slate-800 md:-translate-x-1/2 origin-top animate-grow-height"></div>

          <div className="space-y-12">
            {audiences.map((phase, index) => {
              const isEven = index % 2 === 0;
              // All items are 'current' to use the primary blue branding
              const isCurrent = true; 
              
              return (
                <ScrollReveal 
                  key={phase.version} 
                  delay={index * 150}
                  direction={window.innerWidth >= 768 ? (isEven ? 'right' : 'left') : 'up'}
                >
                  <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 relative`}>
                    
                    {/* Icon / Marker */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-50 dark:border-slate-950 z-10 flex items-center justify-center bg-white dark:bg-slate-900">
                       <div className={`w-full h-full rounded-full bg-[#009DFF] animate-pulse`}></div>
                    </div>

                    {/* Spacer for desktop alignment */}
                    <div className="hidden md:block flex-1"></div>

                    {/* Content Card */}
                    <div className="flex-1 w-full pl-20 md:pl-0">
                      <div className={`relative bg-white dark:bg-slate-900 border border-[#009DFF] ring-1 ring-[#009DFF]/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                        
                        {/* Connecting Line for Mobile */}
                        <div className="md:hidden absolute top-6 left-0 w-20 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-full"></div>

                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400`}>
                            Segment
                          </span>
                          <span className="text-sm font-mono text-slate-400 dark:text-slate-500">{phase.timeline}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex flex-wrap items-center gap-2">
                          {phase.version} <span className="font-normal text-slate-500 dark:text-slate-400">|</span> {phase.focus}
                        </h3>

                        <ul className="space-y-3 mt-4">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                              <div className="mt-1 min-w-[16px]">
                                <CheckCircle2 size={16} className="text-[#009DFF]" />
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};