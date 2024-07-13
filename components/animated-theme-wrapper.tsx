'use client';

import { ReactNode } from 'react';
import { useTheme } from '@/context/theme-context';
import { motion, AnimatePresence } from 'framer-motion';

// note: this component is not used in the project, it's just a snippet of an idea
export default function AnimatedThemeWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { theme } = useTheme();

  const variants = {
    light: { backgroundColor: '#f8fafc', color: '#111827' },
    dark: { backgroundColor: '#111827', color: '#f8fafc' },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={theme}
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        exit={{ y: '100vh' }}
        transition={{ duration: 0.5 }}
        variants={variants}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
