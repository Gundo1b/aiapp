import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, PlayCircle, Sparkles, Send, Mic, Image as ImageIcon, MoreVertical, Battery, Wifi, Signal, ChevronDown } from 'lucide-react';
import { LogoIcon } from './Logo';
import { TextReveal } from './ui/TextReveal';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 lg:pt-40 md:pb-20 overflow-hidden">
      {/* Animated Aurora Background Effects with Parallax */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#64E1FF]/20 dark:bg-[#64E1FF]/10 rounded-full blur-[100px] -z-10 animate-blob transition-transform duration-100 ease-out" 
        style={{ transform: `translate(calc(-50% + ${mousePos.x * -1}px), ${mousePos.y * -1}px)` }}
      />
      <div 
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#a78bfa]/20 dark:bg-[#a78bfa]/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000 transition-transform duration-100 ease-out" 
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#009DFF]/10 dark:bg-[#009DFF]/5 rounded-full blur-[100px] -z-10 animate-blob animation-delay-4000 transition-transform duration-100 ease-out" 
        style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content (First in DOM, Left on Desktop, Top on Mobile) */}
          <div className="text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4 md:mb-6 animate-fade-in-up mx-auto lg:mx-0 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              v1.0 Early Access is Open
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
              <TextReveal distance={50} stiffness={30} damping={18}>One platform, endless</TextReveal> <br />
              <TextReveal 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#64E1FF] via-[#009DFF] to-[#a78bfa]"
                delay={0.5}
                distance={50}
                stiffness={30}
                damping={18}
              >
                creative intelligence.
              </TextReveal>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animate-delay-200">
              The all-in-one workspace that fuses chat, code, image, video, and voice generation. 
              Stop juggling tools. Start creating.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-300">
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden" onClick={scrollToPricing}>
                <span className="relative z-10 flex items-center">
                  Start Building Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={scrollToFeatures}>
                <PlayCircle className="mr-2 w-5 h-5 text-slate-500 dark:text-slate-400" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center lg:justify-start gap-6 animate-fade-in-up animate-delay-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i, idx) => (
                  <div 
                    key={i} 
                    style={{ animationDelay: `${idx * 100 + 500}ms` }}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 z-0 hover:z-10 animate-fade-in-up"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 animate-fade-in-up animate-delay-1000">
                Trusted by <span className="font-bold text-slate-900 dark:text-white">10,000+</span> creators
              </p>
            </div>
          </div>

          {/* Mobile Phone Mockup (Second in DOM, Right on Desktop, Bottom on Mobile) */}
          <div className="relative w-full perspective-1000 flex justify-center lg:justify-center order-2">
             {/* Decorative Blobs behind the phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#009DFF]/30 to-[#64E1FF]/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

             {/* Phone Frame */}
             <div className="relative mx-auto border-slate-900 dark:border-slate-800 bg-slate-900 border-[12px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl animate-float">
                {/* Camera/Sensor Notch */}
                <div className="w-[120px] h-[20px] bg-slate-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                
                {/* Side Buttons */}
                <div className="h-[40px] w-[3px] bg-slate-800 absolute -start-[15px] top-[100px] rounded-s-lg"></div>
                <div className="h-[70px] w-[3px] bg-slate-800 absolute -end-[15px] top-[140px] rounded-e-lg"></div>

                {/* Screen Content */}
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#F9FBFF] dark:bg-slate-950 flex flex-col relative">
                    
                    {/* Status Bar */}
                    <div className="h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-6 pt-2 z-10 sticky top-0 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">9:41</span>
                        <div className="flex gap-1.5 text-slate-900 dark:text-white">
                            <Signal size={12} />
                            <Wifi size={12} />
                            <Battery size={12} />
                        </div>
                    </div>

                    {/* Chat Header */}
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 z-10 sticky top-12">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#64E1FF] to-[#009DFF] flex items-center justify-center text-white">
                                <LogoIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded-lg transition-colors">
                                <div>
                                    <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-none">Model</h3>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-none flex items-center gap-1">
                                        GPT-4o <ChevronDown size={12} />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <MoreVertical size={18} className="text-slate-400" />
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 space-y-6 overflow-hidden">
                        
                        {/* AI Greeting */}
                        <div className="flex items-start gap-3 animate-fade-in-up">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#64E1FF] to-[#009DFF] flex items-center justify-center shrink-0">
                                <LogoIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    Hello! I'm ready to help. You can switch models anytime.
                                </p>
                            </div>
                        </div>

                        {/* User Question */}
                        <div className="flex items-end justify-end animate-fade-in-up animate-delay-500">
                            <div className="bg-[#009DFF] text-white rounded-2xl rounded-tr-none p-3 shadow-sm max-w-[85%]">
                                <p className="text-sm">
                                    Write a Python script for stock analysis.
                                </p>
                            </div>
                        </div>

                        {/* AI Thinking/Typing */}
                        <div className="flex items-start gap-3 animate-fade-in-up animate-delay-1000">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#64E1FF] to-[#009DFF] flex items-center justify-center shrink-0">
                                <LogoIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%] w-full">
                                <div className="flex items-center gap-2 mb-2">
                                     <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                                        GPT-4o
                                     </span>
                                </div>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                    Sure! Here's a script using <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-xs">yfinance</code>:
                                </p>
                                <div className="bg-slate-950 rounded-lg p-3 my-2 border border-slate-800 relative group overflow-hidden">
                                     {/* Code shimmers */}
                                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                     <div className="font-mono text-[10px] text-slate-300 leading-relaxed">
                                        <span className="text-purple-400">import</span> yfinance <span className="text-purple-400">as</span> yf<br/>
                                        <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br/>
                                        <br/>
                                        <span className="text-blue-400">def</span> <span className="text-yellow-300">analyze_stock</span>(ticker):<br/>
                                        &nbsp;&nbsp;data = yf.Ticker(ticker)<br/>
                                        &nbsp;&nbsp;<span className="text-slate-500"># Fetch history...</span>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="bg-white dark:bg-slate-900 p-4 border-t border-slate-100 dark:border-slate-800 z-10 sticky bottom-0">
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700">
                             <button className="p-2 text-slate-400 hover:text-[#009DFF] transition-colors rounded-full">
                                <ImageIcon size={18} />
                             </button>
                             <input 
                                type="text" 
                                placeholder="Ask anything..." 
                                className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                             />
                             <button className="p-2 text-slate-400 hover:text-[#009DFF] transition-colors rounded-full">
                                <Mic size={18} />
                             </button>
                             <button className="p-2 bg-[#009DFF] text-white rounded-full hover:shadow-lg transition-all active:scale-95">
                                <Send size={14} />
                             </button>
                        </div>
                        <div className="w-1/3 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mt-4"></div>
                    </div>

                    {/* Overlay Gradient for "Depth" */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none rounded-[2rem]"></div>
                </div>
             </div>

             {/* Floating Elements around phone */}
             <div className="absolute top-[20%] right-[-10px] lg:right-[10%] bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float animation-delay-2000 z-20">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Sparkles size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Code Generated</p>
                        <p className="text-[10px] text-slate-500">0.4s processing</p>
                    </div>
                 </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};