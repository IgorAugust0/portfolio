import { useActionState, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import type { FormValues, InputChangeEvent, SectionName } from '@/lib/types';
import { State, sendEmail } from './actions';

export function useSectionObserver({
  sectionName,
  threshold = 0.5,
}: {
  sectionName: SectionName;
  threshold?: number;
}) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  // Set the active section if the section is in view
  // and the last click was more than 1 second ago
  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClicked, sectionName]); // dependencies array

  return ref;
}

/**
 * Checks if the form is filled based on the provided form values.
 * @param formValues - The values of the form.
 * @returns A boolean indicating whether the form is filled or not.
 */
export function useFormFilled(formValues: FormValues) {
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    const isFilled =
      formValues.email.trim() !== '' && formValues.message.trim() !== '';
    setIsFormFilled(isFilled);
  }, [formValues]);

  return isFormFilled;
}

/**
 * Custom hook for handling a contact form using experimental hook `useActionState`.
 * @returns An object containing form values, input change handler, form action, and state.
 */
export function useContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendEmail, initialState);
  const [formValues, setFormValues] = useState({ email: '', message: '' });

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Clear error for the current field
    state.errors = { ...state.errors, [name]: [] };
    state.message = null;
  };

  return {
    formValues,
    handleInputChange,
    formAction,
    state,
  };
}
