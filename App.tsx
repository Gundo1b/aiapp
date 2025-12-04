import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Advantages } from './components/Advantages';
import { Pricing } from './components/Pricing';
import { Roadmap } from './components/Roadmap';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FBFF] dark:bg-slate-950 selection:bg-[#64E1FF] selection:text-white transition-colors duration-300 relative">
      
      {/* Global Animated Backgrounds */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20 h-[200%] animate-[float_20s_linear_infinite]"></div>
        
        {/* Twinkling Stars (Dark Mode Only) */}
        <div className="absolute inset-0 stars"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Advantages />
          <Pricing />
          <Roadmap />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;