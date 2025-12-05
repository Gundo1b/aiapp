import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { Spotlight } from './ui/Spotlight';

const tiers: PricingTier[] = [
  {
    name: "Pro",
    price: "$25",
    audience: "Creators, developers, startups",
    features: [
      "Chat, Code, Image Generation",
      "Memory & Context",
      "Refinement Loops",
      "Priority Compute",
      "Ensemble Reasoning"
    ]
  },
  {
    name: "Ultra",
    price: "$60",
    audience: "Teams, professionals, studios",
    features: [
      "All Pro features",
      "Ensemble Reasoning+",
      "4K Visuals",
      "Collaboration tools",
      "Priority Support"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    audience: "Organizations & education",
    features: [
      "Private Hosting",
      "Team Management & RBAC",
      "API & SDK Access",
      "Analytics Dashboard",
      "White Labelling"
    ]
  }
];

export const Pricing: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] translate-x-1/2 animate-blob animation-delay-2000 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Simple, unified pricing</h2>
            <p className="text-lg text-slate-400 font-light">Replace multiple subscriptions with one smart plan.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={index * 150} className="h-full">
              <Spotlight 
                className={`h-full rounded-2xl transition-transform duration-300 ${
                  tier.isPopular 
                    ? 'scale-105 z-10' 
                    : ''
                }`}
                spotlightColor={tier.isPopular ? "rgba(59, 130, 246, 0.15)" : "rgba(255, 255, 255, 0.05)"}
              >
                <div 
                  className={`relative p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 group border backdrop-blur-md
                    ${tier.isPopular 
                        ? 'bg-slate-900/60 border-primary/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]' 
                        : 'bg-slate-900/40 border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Popular Tier Gradient Border Effect */}
                  {tier.isPopular && (
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-100"></div>
                  )}
                  {tier.isPopular && (
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-100"></div>
                  )}
                  
                  {tier.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(59,130,246,0.6)] uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-slate-400 mb-4 h-10 font-light">{tier.audience}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                      {tier.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1 relative z-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${tier.isPopular ? 'bg-primary/20' : 'bg-white/10'}`}>
                          <Check className={`w-3 h-3 ${tier.isPopular ? 'text-primary' : 'text-slate-300'}`} strokeWidth={3} />
                        </div>
                        <span className="text-slate-300 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-auto">
                     <Button 
                      variant={tier.isPopular ? 'primary' : 'outline'}
                      className={`w-full ${tier.isPopular ? 'shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' : 'border-white/10 text-white hover:bg-white/5'}`}
                      onClick={scrollToCTA}
                    >
                      {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </Button>
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