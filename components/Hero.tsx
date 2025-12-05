import React, { useEffect, useState, useRef } from 'react';
import { Button } from './Button';
import { ArrowRight, PlayCircle, Sparkles, Send, Mic, Image as ImageIcon, MoreVertical, Wifi, Signal, ChevronDown, Database, Zap } from 'lucide-react';
import { LogoIcon } from './Logo';
import { TextReveal } from './ui/TextReveal';
import { FluidBlob, ShootingStars } from './ui/BackgroundEffects';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [chatStep, setChatStep] = useState(0); // 0: Greeting, 1: User Msg, 2: Typing, 3: Response
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        // Calculate scroll progress relative to the hero section height
        const offset = window.scrollY;
        // Cap it so they don't fly off too far or invert too much
        setScrollY(Math.min(offset, 600)); 
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sequence the chat messages
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    // Step 1: User message appears after 0.8s
    timers.push(setTimeout(() => setChatStep(1), 800));
    
    // Step 2: Typing indicator appears after 1.8s
    timers.push(setTimeout(() => setChatStep(2), 1800));
    
    // Step 3: Response appears (replacing typing) after 3.8s
    timers.push(setTimeout(() => setChatStep(3), 3800));

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative pt-24 pb-12 md:pt-32 lg:pt-40 md:pb-20 overflow-hidden min-h-[90vh]">
      {/* Background Effects */}
      <ShootingStars />
      
      {/* Dynamic Fluid Blobs with Parallax */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none"
        style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
      >
        <FluidBlob className="top-[-10%] left-[20%] w-[600px] h-[600px]" color1="#60A5FA" color2="#3B82F6" />
        <FluidBlob className="top-[20%] right-[-10%] w-[500px] h-[500px] animation-delay-2000" color1="#a78bfa" color2="#60A5FA" />
        <FluidBlob className="bottom-[-10%] left-[-10%] w-[500px] h-[500px] animation-delay-4000" color1="#3B82F6" color2="#a78bfa" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content (First in DOM, Left on Desktop, Top on Mobile) */}
          <div className="text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-primary dark:text-blue-400 text-sm font-medium mb-4 md:mb-6 animate-fade-in-up mx-auto lg:mx-0 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v1.0 Early Access is Open
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-white mb-4 md:mb-6 leading-tight">
              <TextReveal distance={50} stiffness={30} damping={18}>One platform, endless</TextReveal> <br />
              <TextReveal 
                className="text-[#64E1FF] drop-shadow-[0_0_15px_rgba(100,225,255,0.3)]"
                delay={0.5}
                distance={50}
                stiffness={30}
                damping={18}
              >
                creative intelligence.
              </TextReveal>
            </h1>

            <p className="text-lg text-muted-foreground dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animate-delay-200">
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
                <PlayCircle className="mr-2 w-5 h-5 text-muted-foreground dark:text-slate-400" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border dark:border-slate-800 flex items-center justify-center lg:justify-start gap-6 animate-fade-in-up animate-delay-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i, idx) => (
                  <div 
                    key={i} 
                    style={{ animationDelay: `${idx * 100 + 500}ms` }}
                    className="w-10 h-10 rounded-full border-2 border-background dark:border-slate-950 bg-secondary dark:bg-slate-800 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 z-0 hover:z-10 animate-fade-in-up"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground dark:text-slate-400 animate-fade-in-up animate-delay-1000">
                Trusted by <span className="font-bold text-foreground dark:text-white">10,000+</span> creators
              </p>
            </div>
          </div>

          {/* Mobile Phone Mockup (Second in DOM, Right on Desktop, Bottom on Mobile) */}
          <div className="relative w-full perspective-1000 flex justify-center lg:justify-center order-2 mt-12 lg:mt-0">
             {/* Decorative Blobs behind the phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

             {/* Phone Frame */}
             <div className="relative mx-auto border-slate-900 dark:border-slate-800 bg-slate-900 border-[12px] rounded-[3rem] h-[600px] w-[300px] shadow-2xl animate-float ring-1 ring-white/10 z-10">
                {/* Camera/Sensor Dynamic Island */}
                <div className="w-[90px] h-[24px] bg-black top-[10px] rounded-full left-1/2 -translate-x-1/2 absolute z-30 pointer-events-none"></div>
                
                {/* Side Buttons */}
                <div className="h-[40px] w-[3px] bg-slate-800 absolute -start-[15px] top-[100px] rounded-s-lg shadow-sm"></div>
                <div className="h-[70px] w-[3px] bg-slate-800 absolute -end-[15px] top-[140px] rounded-e-lg shadow-sm"></div>

                {/* Screen Content */}
                <div className="rounded-[2.25rem] overflow-hidden w-full h-full bg-secondary dark:bg-slate-950 flex flex-col relative z-0">
                    
                    {/* Wallpaper Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                    {/* Status Bar */}
                    <div className="h-14 px-6 pt-3 flex items-center justify-between z-20 text-slate-900 dark:text-white select-none">
                        <span className="text-[15px] font-semibold tracking-wide pl-1">9:41</span>
                        <div className="flex gap-1.5 items-center pr-1">
                            <Signal className="w-[18px] h-[18px]" strokeWidth={2.5} />
                            <Wifi className="w-[18px] h-[18px]" strokeWidth={2.5} />
                            {/* Custom Battery Icon */}
                            <div className="w-[24px] h-[11px] border-2 border-current rounded-[3px] relative ml-0.5 opacity-90">
                                <div className="absolute inset-[1.5px] bg-current rounded-[1px] w-[70%]"></div>
                                <div className="absolute -right-[4px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-current rounded-r-[1px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Header */}
                    <div className="px-4 py-2 flex items-center justify-between z-20 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 sticky top-0 border-b border-border/50 dark:border-slate-800/50">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#60A5FA] to-[#3B82F6] flex items-center justify-center text-white shadow-sm ring-2 ring-white dark:ring-slate-800">
                                <LogoIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">Integen AI</span>
                                    <div className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                      Beta
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 cursor-pointer">
                                  <span className="text-[11px] font-medium text-primary">GPT-4o</span>
                                  <ChevronDown size={10} className="text-primary" />
                                </div>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors">
                           <MoreVertical size={20} className="text-muted-foreground dark:text-slate-400" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 px-4 py-4 space-y-5 overflow-y-auto overflow-x-hidden relative z-10 scrollbar-none">
                        
                        {/* AI Greeting - Always Visible */}
                        <div className={`flex items-start gap-2.5 animate-scale-up origin-bottom-left`}>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#60A5FA] to-[#3B82F6] flex items-center justify-center shrink-0 shadow-sm mt-1">
                                <LogoIcon className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
                                <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                                    Hello! I'm ready to help. You can switch models anytime.
                                </p>
                            </div>
                        </div>

                        {/* User Question - Visible from Step 1 */}
                        {chatStep >= 1 && (
                            <div className="flex items-end justify-end animate-scale-up origin-bottom-right">
                                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-3 shadow-md shadow-blue-500/10 max-w-[85%]">
                                    <p className="text-[15px] leading-relaxed">
                                        Write a Python script for stock analysis.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* AI Typing Indicator - Visible at Step 2 only */}
                        {chatStep === 2 && (
                            <div className="flex items-start gap-2.5 animate-scale-up origin-bottom-left">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#60A5FA] to-[#3B82F6] flex items-center justify-center shrink-0 shadow-sm mt-1">
                                    <LogoIcon className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                    <div className="flex gap-1.5 py-1">
                                        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-typing-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-typing-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-typing-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* AI Response - Visible from Step 3 */}
                        {chatStep >= 3 && (
                            <div className="flex items-start gap-2.5 animate-scale-up origin-bottom-left">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#60A5FA] to-[#3B82F6] flex items-center justify-center shrink-0 shadow-sm mt-1">
                                    <LogoIcon className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[90%] w-full">
                                    <div className="flex items-center gap-2 mb-2">
                                         <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/50">
                                            GPT-4o
                                         </span>
                                    </div>
                                    <p className="text-[14px] leading-relaxed text-slate-700 dark:text-slate-200 mb-2.5 px-1">
                                        Sure! Here's a script using <code className="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-xs font-mono text-pink-500">yfinance</code>:
                                    </p>
                                    <div className="bg-slate-900 rounded-xl p-3.5 my-1 border border-slate-800 relative group overflow-hidden shadow-inner">
                                         {/* Code shimmers */}
                                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                         <div className="font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
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
                        )}
                        {/* Spacer for bottom bar */}
                        <div className="h-4"></div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-border/50 dark:border-slate-800/50 z-20 pb-6">
                        <div className="flex items-center gap-2 bg-secondary dark:bg-slate-800 p-1.5 rounded-full border border-border dark:border-slate-700/50 shadow-inner">
                             <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-white dark:hover:bg-slate-700">
                                <ImageIcon size={20} strokeWidth={1.5} />
                             </button>
                             <input 
                                type="text" 
                                placeholder="Message..." 
                                className="flex-1 bg-transparent border-none outline-none text-[15px] text-foreground dark:text-white placeholder:text-muted-foreground px-1"
                             />
                             <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-white dark:hover:bg-slate-700">
                                <Mic size={20} strokeWidth={1.5} />
                             </button>
                             <button className="p-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center w-9 h-9">
                                <Send size={16} className="ml-0.5" />
                             </button>
                        </div>
                        {/* Home Indicator */}
                        <div className="w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-4 mb-1"></div>
                    </div>

                    {/* Overlay Gradient for "Glass" feel */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none rounded-[2.25rem] z-30 ring-1 ring-inset ring-white/10"></div>
                </div>
             </div>

             {/* Floating Elements around phone */}
             
             {/* Card 1: Code Generated - Top Right, moves Left-Down */}
             <div 
                className="absolute top-[20%] right-[-10px] lg:right-[10%] bg-card dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-border dark:border-slate-700 animate-float animation-delay-2000 z-20 transition-transform duration-100 ease-out"
                style={{ transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.1}px)` }}
            >
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Sparkles size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-foreground dark:text-white">Code Generated</p>
                        <p className="text-[10px] text-muted-foreground">0.4s processing</p>
                    </div>
                 </div>
             </div>

             {/* Card 2: Image Created - Bottom Left, moves Right-Up */}
             <div 
                className="absolute bottom-[25%] left-[-10px] lg:left-[5%] bg-card dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-border dark:border-slate-700 animate-float z-0 transition-transform duration-100 ease-out"
                style={{ transform: `translate(${scrollY * 0.1}px, ${-scrollY * 0.1}px)` }}
             >
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400">
                        <ImageIcon size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-foreground dark:text-white">Image Created</p>
                        <p className="text-[10px] text-muted-foreground">1024x1024</p>
                    </div>
                 </div>
             </div>

             {/* Card 3: Context Saved - Top Left, moves Right-Down */}
             <div 
                className="absolute top-[15%] left-0 lg:left-[15%] bg-card dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-border dark:border-slate-700 animate-float animation-delay-4000 z-0 transition-transform duration-100 ease-out hidden md:block"
                style={{ transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)` }}
             >
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                        <Database size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-foreground dark:text-white">Context Saved</p>
                        <p className="text-[10px] text-muted-foreground">Recall enabled</p>
                    </div>
                 </div>
             </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};