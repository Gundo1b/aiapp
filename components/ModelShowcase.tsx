import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, MessageSquareMore, Brain, User } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';

// Official Brand Icons
const OpenAIIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9723V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.3829a.7948.7948 0 0 0-.3927-.6813V.9701l-2.0298-1.1851a.0757.0757 0 0 1-.038-.052v5.5873a4.504 4.504 0 0 1 4.4945 4.4944 4.4755 4.4755 0 0 1 2.8764 1.0456zM13.4834 6.392l5.8069 3.3543-5.8069 3.3543-5.8069-3.3543a.7664.7664 0 0 0-.3879-.6765V1.2801a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1 1.2965 2.3206z" />
  </svg>
);

const AnthropicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.4 18.9H18.8L13 3.5H10.2L4.4 18.9H6.8L8.6 13.8H14.6L16.4 18.9ZM11.6 5.9L13.8 11.9H9.4L11.6 5.9Z" />
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.35 11.1H12v3.08h5.65c-.46 2.07-2.23 3.53-4.65 3.53-2.76 0-5-2.24-5-5s2.24-5 5-5c1.19 0 2.29.41 3.16 1.1l2.42-2.42C17.15 4.9 14.73 4 12 4 7.58 4 4 7.58 4 12s3.58 8 8 8c4.61 0 7.68-3.23 7.68-7.85 0-.7-.07-1.38-.33-2.05z" />
  </svg>
);

const MetaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 5.9C13.16 5.9 14.2 6.32 15.03 7.13C15.86 7.96 16.28 8.99 16.28 10.18C16.28 11.33 15.86 12.33 15.07 13.12C14.29 13.9 13.29 14.32 12.15 14.32C10.99 14.32 9.95 13.9 9.12 13.09C8.29 12.26 7.87 11.23 7.87 10.04C7.87 8.89 8.29 7.89 9.08 7.1C9.86 6.32 10.86 5.9 12 5.9M12 4C10.35 4 8.85 4.65 7.7 5.8C6.55 6.95 5.9 8.44 5.9 10.1C5.9 11.75 6.55 13.25 7.7 14.4C8.85 15.55 10.35 16.2 12 16.2C13.65 16.2 15.15 15.55 16.3 14.4C17.45 13.25 18.1 11.75 18.1 10.1C18.1 8.45 17.45 6.96 16.3 5.81C15.15 4.66 13.65 4 12 4M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
  </svg>
);

const MistralIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M3 4.5V19.5H7.5V13.5L12 18L16.5 13.5V19.5H21V4.5H16.5L12 9L7.5 4.5H3Z" />
  </svg>
);

const models = [
  {
    name: 'GPT-4o',
    icon: OpenAIIcon,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    description: 'Best for reasoning & coding'
  },
  {
    name: 'Claude 3.5',
    icon: AnthropicIcon,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    description: 'Best for writing & nuance'
  },
  {
    name: 'Gemini 1.5 Pro',
    icon: GoogleIcon,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    description: 'Best for long context'
  },
  {
    name: 'Llama 3',
    icon: MetaIcon,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    description: 'Open source efficiency'
  },
  {
    name: 'Mistral Large',
    icon: MistralIcon,
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
    description: 'European powerhouse'
  }
];

export const ModelShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {models.map((model, index) => (
            <ScrollReveal key={model.name} delay={index * 100}>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default group text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                <div className={`w-16 h-16 rounded-2xl ${model.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <model.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{model.name}</h3>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                   Provider
                </span>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
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
              {/* Message 1: User Request */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">You</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Generate a React component for a pricing card.</p>
                </div>
              </div>

              {/* Message 1 Response: Integen via GPT-4o */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Integen AI</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 font-medium flex items-center gap-1">
                      <OpenAIIcon className="w-3 h-3" /> via GPT-4o
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

              {/* Message 2: User Request */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                   <User className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">You</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Now rewrite the copy on that card to be more persuasive and catchy.</p>
                </div>
              </div>

              {/* Message 2 Response: Integen via Claude */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Integen AI</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800 font-medium flex items-center gap-1">
                      <AnthropicIcon className="w-3 h-3" /> via Claude 3.5 Sonnet
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