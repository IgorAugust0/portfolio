import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import type { FormValues, SectionName } from '@/lib/types';

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
