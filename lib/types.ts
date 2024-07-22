import { experiencesData, links, projectsData } from '@/lib/data';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

// Type definitions

export type Theme = 'light' | 'dark';
export type SectionName = (typeof links)[number]['name'];
export type ProjectCardProps = (typeof projectsData)[number];
export type ExperienceItemProps = (typeof experiencesData)[number];
export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface IntroButtonsSocialsProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  rel?: string;
}

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

export interface ContactFormEmailProps {
  // name: string;
  email: string;
  message: string;
}

export interface SectionHeadingProps {
  children: React.ReactNode;
}

// Form types

export type State = {
  errors?: {
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export type StateReactHotToast = {
  type: 'default' | 'loading' | 'success' | 'error';
  toastId: string;
};

export interface FormValues {
  email: string;
  message: string;
}
