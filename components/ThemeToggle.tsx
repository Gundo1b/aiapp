import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Switch } from './ui/Switch';

export const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  // The switch is "checked" if the resolved theme is dark
  const isDark = resolvedTheme === 'dark';

  const handleCheckedChange = (checked: boolean) => {
    if (checked) {
      setTheme('dark');
    }
  };

  return (
    <div className="flex items-center gap-2 group" role="group" aria-label="Theme toggle">
      <button 
        type="button"
        onClick={() => {}}
        className="focus:outline-none focus:ring-2 focus:ring-[#009DFF] rounded-full p-0.5"
        aria-label="Switch to Light Mode"
      >
        <Sun 
          className={`h-4 w-4 transition-all duration-300 ${
            !isDark 
              ? 'text-[#009DFF] scale-110 drop-shadow-[0_0_8px_rgba(0,157,255,0.5)]' 
              : 'text-slate-400 scale-90 opacity-50 hover:text-slate-600 dark:hover:text-slate-300'
          }`} 
          aria-hidden="true"
        />
      </button>

      <Switch 
        checked={isDark} 
        onCheckedChange={handleCheckedChange} 
        aria-label="Toggle Dark Mode"
        title="Toggle Dark Mode"
        disabled={true}
      />
      
      <button 
        type="button"
        onClick={() => setTheme('dark')}
        className="focus:outline-none focus:ring-2 focus:ring-[#009DFF] rounded-full p-0.5"
        aria-label="Switch to Dark Mode"
      >
        <Moon 
          className={`h-4 w-4 transition-all duration-300 ${
            isDark 
              ? 'text-[#009DFF] scale-110 drop-shadow-[0_0_8px_rgba(0,157,255,0.5)]' 
              : 'text-slate-400 scale-90 opacity-50 hover:text-slate-600 dark:hover:text-slate-300'
          }`} 
          aria-hidden="true"
        />
      </button>
    </div>
  );
};