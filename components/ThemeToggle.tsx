import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Switch } from './ui/Switch';

export const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  // The switch is "checked" if the resolved theme is dark
  const isDark = resolvedTheme === 'dark';

  const handleCheckedChange = (checked: boolean) => {
    // If user checks the switch (true), they want Dark mode
    // If user unchecks the switch (false), they want Light mode
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-4 w-4 transition-colors ${!isDark ? 'text-[#009DFF]' : 'text-slate-400'}`} />
      <Switch 
        checked={isDark} 
        onCheckedChange={handleCheckedChange} 
        aria-label="Toggle Dark Mode"
      />
      <Moon className={`h-4 w-4 transition-colors ${isDark ? 'text-[#009DFF]' : 'text-slate-400'}`} />
    </div>
  );
};