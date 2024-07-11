import { links } from '@/lib/data';
import { ChangeEvent } from 'react';

export type SectionName = (typeof links)[number]['name'];
export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

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
