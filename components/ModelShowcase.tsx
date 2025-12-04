import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, Zap, Brain, Cpu, MessageSquareMore } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';

const models = [
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    color: 'bg-green-500',
    textColor: 'text-green-600',
    description: 'Best for reasoning & coding'
  },
  {
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    color: 'bg-orange-400',
    textColor: 'text-orange-600',
    description: 'Best for writing & nuance'
  },
  {
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    description: 'Best for long context'
  },
  {
    name: 'Llama 3',
    provider: 'Meta',
    color: 'bg-indigo-500',
    textColor: 'text-indigo-600',
    description: 'Open source efficiency'
  },
  {
    name: 'Mistral Large',
    provider: 'Mistral',
    color: 'bg-yellow-400',
    textColor: 'text-yellow-600',
    description: 'European powerhouse'
  }
];

export const ModelShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              <Brain size={14} />
              <span>Multi-Model Orchestration</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Every top model. <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                In a single conversation.
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Don't settle for one intelligence. Switch seamlessly between GPT-4o for logic, Claude for writing, and Gemini for data—all within the same chat thread.
            </p>
          </div>
        </ScrollReveal>

        {/* Model Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {models.map((model, index) => (
            <ScrollReveal key={model.name} delay={index * 100}>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-default group text-center h-full flex flex-col items-center justify-center">
                <div className={`w-10 h-10 rounded-full ${model.color} bg-opacity-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <div className={`w-3 h-3 rounded-full ${model.color}`}></div>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{model.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{model.provider}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Visual Demo of Switching */}
        <ScrollReveal delay={300}>
          <Spotlight className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
            <div className="p-1 bg-slate-100 dark:bg-slate-800 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex gap-1.5 py-3">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">Integen_Studio_v1.0</div>
            </div>

            <div className="p-6 md:p-10 space-y-6">
              {/* Message 1: GPT-4 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0 border border-green-200 dark:border-green-800">
                  <Cpu size={16} className="text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">You</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Generate a React component for a pricing card.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Integen AI</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 font-medium">
                      via GPT-4o
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-400">
                    {`export const PricingCard = ({ title, price }) => (`}<br/>
                    &nbsp;&nbsp;{`<div className="p-6 border rounded-xl">...</div>`}<br/>
                    {`)`}
                  </div>
                </div>
              </div>

              {/* Action: Switching Model */}
              <div className="flex justify-center py-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-800 animate-pulse">
                  <MessageSquareMore size={12} />
                  Switching context to Claude 3.5 Sonnet...
                </div>
              </div>

              {/* Message 2: Claude */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0 border border-green-200 dark:border-green-800">
                  <Cpu size={16} className="text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">You</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Now rewrite the copy on that card to be more persuasive and catchy.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Integen AI</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800 font-medium">
                      via Claude 3.5 Sonnet
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Here is a punchier version focused on value: <br/>
                    <span className="italic text-slate-500">"Unlock your potential today. One simple price, infinite creative power."</span>
                  </p>
                </div>
              </div>

            </div>
          </Spotlight>
        </ScrollReveal>
      </div>
    </section>
  );
};