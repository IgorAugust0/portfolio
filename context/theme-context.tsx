'use client';

import type {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType,
} from '@/lib/types';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const getInitialTheme = (): Theme => {
    const savedTheme = window.localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    return userMedia.matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const applyTheme = (theme: Theme) => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      applyTheme(newTheme);
    };

    applyTheme(theme);
    userMedia.addEventListener('change', handleChange);

    return () => {
      userMedia.removeEventListener('change', handleChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}
