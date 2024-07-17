'use client';

import type {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType,
} from '@/lib/types';
import { createContext, useContext, useEffect, useState } from 'react';
import { useIsClient } from '@/lib/hooks';

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const isClient = useIsClient();

  // Get initial theme from local storage or user media
  const getInitialTheme = (): Theme => {
    const savedTheme = window.localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    return userMedia.matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>('light'); // Default initial theme

  // Set theme on client side only
  useEffect(() => {
    if (isClient) {
      setTheme(getInitialTheme());
    }
  }, [isClient]);

  // Apply theme and listen for OS theme changes
  useEffect(() => {
    if (!isClient) return;

    const applyTheme = (theme: Theme) => {
      window.localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    };

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
  }, [theme, isClient]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (isClient) {
      window.localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

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
