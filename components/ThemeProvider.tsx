import React, { createContext, useContext, useLayoutEffect, useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children?: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  resolvedTheme: 'light',
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'integen-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Use useLayoutEffect to prevent FOUC (Flash of Unstyled Content)
  useLayoutEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (targetTheme: 'light' | 'dark') => {
      root.classList.remove('light', 'dark');
      root.classList.add(targetTheme);
      setResolvedTheme(targetTheme);
    };

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemChange = () => {
        applyTheme(mediaQuery.matches ? 'dark' : 'light');
      };

      // Initial check
      handleSystemChange();

      // Listen for system changes
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    } else {
      // Manual theme
      applyTheme(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};