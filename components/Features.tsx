import React, { useState } from 'react';
import { MessageSquare, Code2, Image as ImageIcon, Video, Mic, Wand2 } from 'lucide-react';
import { Feature } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Spotlight } from './ui/Spotlight';
import { ParticleCanvas } from './ui/BackgroundEffects';

const features: Feature[] = [
  {
    id: 'chat',
    title: 'Chat Intelligence',
    description: 'Natural dialogue, idea generation, and tutoring with ensemble routing to the best models.',
    icon: MessageSquare,
    command: '/chat'
  },
  {
    id: 'code',
    title: 'Code Intelligence (SLI)',
    description: 'Intelligent code creation, refactoring, and system design assistance.',
    icon: Code2,
    command: '/code'
  },
  {
    id: 'image',
    title: 'Image & Design',
    description: 'Visual generation and iterative refinement for stunning creative assets.',
    icon: ImageIcon,
    command: '/image'
  },
  {
    id: 'video',
    title: 'Video Generation v2.0',
    description: 'Motion design and storytelling automation to bring narratives to life.',
    icon: Video,
    command: '/video'
  }
];

// Helper to simulate typing effect on hover
const TypingCommand = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  
  const handleMouseEnter = () => {
    // Reset to just slash
    setDisplayText('/');
    let i = 1;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 80);
  };

  const handleMouseLeave = () => {
    setDisplayText(text);
  };

  return (
    <code 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-slate-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors"
    >
      {displayText}<span className="animate-pulse inline-block ml-[1px]">_</span>
    </code>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="pt-0 pb-24 relative overflow-hidden bg-transparent">
      {/* Particles Background */}
      <ParticleCanvas />
      
      {/* Ambient Background Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Solution: <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                Unified Intelligence
              </span>
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Integen AI unites the best AI models into one platform. Interact through natural language or structured commands.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 100}>
              <Spotlight className="h-full rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors duration-500">
                <div className="group relative p-8 h-full cursor-pointer">
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 transform shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                      <feature.icon size={24} />
                    </div>
                    <TypingCommand text={feature.command} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{feature.description}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Try it now <Wand2 className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Spotlight>
            </ScrollReveal>
          ))}
          
          {/* Callout Card */}
          <ScrollReveal delay={500}>
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-black text-white shadow-2xl flex flex-col justify-center items-center text-center h-full group overflow-hidden border border-white/10 hover:border-primary/40 transition-colors duration-500">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"></div>
               
               <h3 className="text-2xl font-bold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">Adaptive Interface</h3>
               <p className="text-slate-400 mb-6 relative z-10 font-light">
                 Consistent tone, style, and experience across all modes.
               </p>
               <button className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 relative z-10 text-sm transform active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                 Explore the UI
               </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};