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
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Simple, unified pricing</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Replace multiple subscriptions with one smart plan.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={index * 150} className="h-full">
              <Spotlight 
                className={`h-full rounded-2xl ${
                  tier.isPopular 
                    ? 'shadow-2xl scale-105 z-10' 
                    : 'border border-slate-200 dark:border-slate-800 shadow-lg'
                }`}
                spotlightColor={tier.isPopular ? "rgba(0, 157, 255, 0.2)" : "rgba(0, 157, 255, 0.1)"}
              >
                <div 
                  className={`relative bg-white dark:bg-slate-900 p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 group`}
                >
                  {/* Popular Tier Gradient Border */}
                  {tier.isPopular && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#64E1FF] to-[#009DFF] rounded-2xl p-[2px] -z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl"></div>
                    </div>
                  )}
                  
                  {tier.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 animate-pulse-slow">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-10">{tier.audience}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{tier.price}</span>
                      {tier.price !== 'Custom' && <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1 relative z-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 p-0.5 shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" strokeWidth={3} />
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-auto">
                     <Button 
                      variant={tier.isPopular ? 'primary' : 'outline'}
                      className={`w-full ${tier.isPopular ? 'shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' : ''}`}
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