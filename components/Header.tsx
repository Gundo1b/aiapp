import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

const LANGUAGES = [
  "English", "Español", "Français", "Deutsch", "中文 (Chinese)", "日本語 (Japanese)", "Русский (Russian)",
  "Português", "Italiano", "한국어 (Korean)", "Nederlands", "Türkçe", "العربية (Arabic)",
  "हिन्दी (Hindi)", "বাংলা (Bengali)", "اردو (Urdu)", "Bahasa Indonesia", "Tiếng Việt", "ไทย (Thai)",
  "Polski", "Українська", "Română", "Ελληνικά (Greek)", "Magyar", "Čeština",
  "Svenska", "Dansk", "Suomi", "Norsk", "עברית (Hebrew)", "Bahasa Melayu",
  "فارسی (Persian)", "Kiswahili", "தமிழ் (Tamil)", "తెలుగు (Telugu)"
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Language Menu State
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Advantages', href: '#advantages', id: 'advantages' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Audience', href: '#audience', id: 'audience' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="hover:opacity-90 transition-opacity hover:scale-105 duration-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo iconClassName="w-8 h-8" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-sm font-medium transition-colors relative group tracking-wide ${
                activeSection === link.id 
                  ? 'text-[#009DFF]' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#009DFF] transition-all duration-300 ${
                activeSection === link.id ? 'w-full shadow-[0_0_10px_#009DFF]' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector (Desktop) */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              <Globe size={16} />
              <span className="hidden lg:inline">{currentLang}</span>
              <span className="lg:hidden">{currentLang.substring(0,2)}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up backdrop-blur-xl">
                <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors flex items-center justify-between ${
                        currentLang === lang 
                          ? 'text-[#009DFF] bg-blue-900/20' 
                          : 'text-slate-300'
                      }`}
                    >
                      {lang}
                      {currentLang === lang && <div className="w-1.5 h-1.5 rounded-full bg-[#009DFF] shadow-[0_0_5px_#009DFF]"></div>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button size="sm" onClick={scrollToPricing} className="shadow-[0_0_15px_-3px_rgba(59,130,246,0.6)]">Get Early Access</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:bg-white/10 rounded-full transition-all duration-200 active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-fade-in-up duration-300 origin-top h-[calc(100vh-64px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-lg font-medium py-3 px-2 rounded-lg hover:bg-white/5 ${
                activeSection === link.id
                  ? 'text-[#009DFF] bg-blue-900/10'
                  : 'text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="border-t border-white/10 pt-4 mt-2">
            {/* Mobile Language Collapsible */}
            <div className="rounded-lg overflow-hidden border border-white/10">
                <button 
                    onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-slate-900/50 text-left font-medium text-slate-300 active:bg-slate-800 transition-colors"
                >
                    <span className="flex items-center gap-2">
                        <Globe size={18} className="text-[#009DFF]" />
                        {currentLang}
                    </span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Collapsible Content */}
                <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isMobileLangOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="bg-slate-900 p-2 overflow-y-auto max-h-60 border-t border-white/10">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    setCurrentLang(lang);
                                    setIsMobileLangOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm mb-1 ${
                                    currentLang === lang
                                    ? 'bg-[#009DFF]/20 text-[#009DFF]'
                                    : 'text-slate-400 hover:bg-white/5'
                                }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          <Button className="w-full mt-2" onClick={scrollToPricing}>Get Early Access</Button>
        </div>
      )}
    </header>
  );
};