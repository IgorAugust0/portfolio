import { useActionState, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import type {
  FormValues,
  InputChangeEvent,
  SectionName,
  State,
  StateReactHotToast,
} from '@/lib/types';
import { sendEmail } from '@/lib/actions';
import toast from 'react-hot-toast';
import { useTheme } from '@/context/theme-context';

/**
 * Custom hook for observing a section in the viewport.
 * @param sectionName - The name of the section to observe.
 * @param threshold - The threshold for the intersection observer.
 * @returns A ref to attach to the section element.
 */
export function useSectionObserver({
  sectionName,
  threshold = 0.5,
}: {
  sectionName: SectionName;
  threshold?: number;
}) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClicked, sectionName]); // dependencies array

  return { ref, inView };
}

/**
 * Checks if the form is filled based on the provided form values.
 * @param formValues - The values of the form.
 * @returns A boolean indicating whether the form is filled or not.
 */
export function useFormFilled(formValues: FormValues) {
  return formValues.email.trim() !== '' && formValues.message.trim() !== '';
}

/**
 * Custom hook for handling a contact form using experimental hook `useActionState`.
 * @returns An object containing form values, input change handler, form action, form state, and submit click handler.
 */
export function useContactForm() {
  const initialState: State & StateReactHotToast = {
    message: null,
    errors: {},
    type: 'default',
    toastId: '',
  };
  const [state, formAction] = useActionState(sendEmail, initialState);
  const [formValues, setFormValues] = useState({ email: '', message: '' });

  useEffect(() => {
    if (state.type === 'success') {
      toast.success('Email enviado com sucesso!', { id: state.toastId });
    } else if (state.type === 'error') {
      toast.error('Falha no envio do email.', { id: state.toastId });
    }
  }, [state.type, state.toastId]);

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Clear error for the current field
    state.errors = { ...state.errors, [name]: [] };
    state.message = null;
  };

  const handleSubmitClick = () => {
    state.toastId = toast.loading('Enviando email...');
  };

  return {
    formValues,
    handleInputChange,
    formAction,
    state,
    handleSubmitClick,
  };
}

/**
 * Custom React hook that returns a boolean indicating whether the code is running on the client-side.
 * This hook sets the initial value to `false` and updates it to `true` once the component is mounted.
 *
 * @returns {boolean} A boolean value indicating whether the code is running on the client-side.
 */
export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Experimental custom hook that handles the transition animation when toggling between themes. Not currently used.
 * @returns An object containing the switchRef, toggleTheme, and theme values.
 */
export function useThemeTransition() {
  const { theme, toggleTheme } = useTheme();
  const switchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        { clipPath: theme === 'light' ? clipPath : clipPath.reverse() },
        { duration: 300, easing: 'ease-in' },
      );
    };

    const button = switchRef.current;
    button?.addEventListener('click', handleClick);

    return () => {
      button?.removeEventListener('click', handleClick);
    };
  }, [theme]);

  return { switchRef, toggleTheme, theme };
}
