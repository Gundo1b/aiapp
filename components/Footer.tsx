import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { ScrollReveal } from './ScrollReveal';
import { GradientWaves } from './ui/BackgroundEffects';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 dark:bg-black text-slate-300 pt-24 pb-16 transition-colors duration-300">
      {/* Wave transition at top */}
      <GradientWaves />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-6">
                <Logo iconClassName="w-8 h-8" className="text-white" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Connected creative intelligence for everyone. One platform, infinite possibilities.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Chat Intelligence</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Image Generation</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Code Assistant</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Video & Voice</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#64E1FF] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Integen AI. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
};