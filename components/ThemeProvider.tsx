import React, { createContext, useContext, useLayoutEffect } from 'react';

type Theme = 'dark';

interface ThemeProviderProps {
  children?: React.ReactNode;
  defaultTheme?: any; // Ignored
  storageKey?: string; // Ignored
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark';
}

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
  resolvedTheme: 'dark',
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  
  // Strict enforcement of Dark Mode
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
  }, []);

  const value = {
    theme: 'dark' as Theme,
    setTheme: () => null,
    resolvedTheme: 'dark' as 'dark',
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};