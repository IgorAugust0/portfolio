import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import type { SectionName } from '@/lib/types';

export default function useSectionObserver({
  sectionName,
  threshold = 0.5,
}: {
  sectionName: SectionName;
  threshold?: number;
}) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  // Set the active section if the section is in view and the last click was more than 1 second ago
  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClicked, sectionName]); // dependencies array

  return ref;
}

// check whether the form fields are filled and return a boolean to enable/disable the submit button
// NOTE: currently not working as intended, the form is always considered to be not filled, therefore, this hook is not being used.
export const useFormFilled = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  const checkFormFilled = () => {
    const formFields = document.querySelectorAll('input, textarea');
    let allFilled = true;
    formFields.forEach((field) => {
      const inputField = field as HTMLInputElement | HTMLTextAreaElement;
      if (!inputField.value) {
        allFilled = false;
      }
    });
    setIsFormFilled(allFilled);
  };

  useEffect(() => {
    checkFormFilled();
    const formFields = document.querySelectorAll('input, textarea');
    formFields.forEach((field) => {
      field.addEventListener('input', checkFormFilled);
    });
    return () => {
      formFields.forEach((field) => {
        field.removeEventListener('input', checkFormFilled);
      });
    };
  }, []);

  return isFormFilled;
};
