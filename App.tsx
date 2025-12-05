import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ModelShowcase } from './components/ModelShowcase';
import { Advantages } from './components/Advantages';
import { Pricing } from './components/Pricing';
import { Roadmap } from './components/Roadmap';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300 relative">
      
      {/* Global Animated Backgrounds - Dark Mode Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020617]">
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-20 h-[200%] animate-[float_20s_linear_infinite]"></div>
        
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <ModelShowcase />
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