'use client';

import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from 'react';
import { SectionName } from '@/lib/types';

interface ActiveSectionContextType {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  lastClicked: number;
  setLastClicked: Dispatch<SetStateAction<number>>;
}

interface ActiveSectionContextProviderProps {
  children: ReactNode;
}

// Create the context with a default value of null
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Início'); // State to hold the active section
  const [lastClicked, setLastClicked] = useState(0); // State to hold the last clicked time, so the observer can temporarily be disabled

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, lastClicked, setLastClicked }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Custom hook to use the active section context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext); // Get the context value
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }
  return context;
}
