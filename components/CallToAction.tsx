import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CallToAction: React.FC = () => {
  const handleJoin = () => {
    alert("Thank you for your interest! We've registered your request for Early Access.");
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FBFF] to-blue-50 dark:from-slate-950 dark:to-slate-900 -z-10 transition-colors duration-300"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <ScrollReveal duration="1000ms">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl border border-blue-100 dark:border-slate-800 relative overflow-hidden group transition-colors duration-300">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#64E1FF] to-[#009DFF] opacity-10 dark:opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 dark:bg-purple-900 opacity-20 dark:opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000"></div>

             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
               Ready to shape the future of <br/>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">
                 Connected Creative Intelligence?
               </span>
             </h2>
             
             <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
               Integen AI invites creators, developers, and innovators to join early access. 
               Empowering everyone to build and express faster than ever before.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
               <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-200/50 dark:shadow-none hover:scale-105 transition-transform" onClick={handleJoin}>
                 Join Early Access
                 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
               <Button variant="secondary" size="lg" className="w-full sm:w-auto hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-transform">
                 Contact Sales
               </Button>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};