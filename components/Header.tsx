import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

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

  // Handle Scroll Appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Click Outside for Language Menu
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

  // Handle Active Section Detection (ScrollSpy)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Activate when section is in middle of viewport
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

    // Observe all sections
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-4 md:py-5'
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
              className={`text-sm font-medium transition-colors relative group ${
                activeSection === link.id 
                  ? 'text-[#009DFF] dark:text-[#64E1FF]' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#009DFF] dark:hover:text-[#64E1FF]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#009DFF] transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
           {/* Theme Toggle (Desktop) */}
           <ThemeToggle />

          {/* Language Selector (Desktop) */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#009DFF] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-all duration-200"
            >
              <Globe size={16} />
              <span className="hidden lg:inline">{currentLang}</span>
              <span className="lg:hidden">{currentLang.substring(0,2)}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden animate-fade-in-up">
                <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-between ${
                        currentLang === lang 
                          ? 'text-[#009DFF] bg-blue-50/50 dark:bg-blue-900/20' 
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {lang}
                      {currentLang === lang && <div className="w-1.5 h-1.5 rounded-full bg-[#009DFF]"></div>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button size="sm" onClick={scrollToPricing}>Get Early Access</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all duration-200 active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-4 shadow-lg animate-fade-in-up duration-300 origin-top h-[calc(100vh-64px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-lg font-medium py-2 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 ${
                activeSection === link.id
                  ? 'text-[#009DFF] dark:text-[#64E1FF]'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
            
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between px-2 mb-4">
                <span className="text-slate-600 dark:text-slate-300 font-medium">Appearance</span>
                <ThemeToggle />
            </div>

            {/* Mobile Language Collapsible */}
            <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <button 
                    onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 text-left font-medium text-slate-700 dark:text-slate-200 active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
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
                    <div className="bg-slate-50 dark:bg-slate-900 p-2 overflow-y-auto max-h-60 border-t border-slate-100 dark:border-slate-800">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    setCurrentLang(lang);
                                    setIsMobileLangOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm mb-1 ${
                                    currentLang === lang
                                    ? 'bg-[#009DFF] text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
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