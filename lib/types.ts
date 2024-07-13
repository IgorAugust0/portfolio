import { experiencesData, links } from '@/lib/data';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

// Type definitions

export type SectionName = (typeof links)[number]['name'];
export type ExperienceItemProps = (typeof experiencesData)[number];
export type Theme = 'light' | 'dark';
export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

// Context types and props

export interface ActiveSectionContextType {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  lastClicked: number;
  setLastClicked: Dispatch<SetStateAction<number>>;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ActiveSectionContextProviderProps {
  children: ReactNode;
}

export interface ThemeContextProviderProps {
  children: ReactNode;
}

// Form types

export type State = {
  errors?: {
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export interface FormValues {
  email: string;
  message: string;
}
