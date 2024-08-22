import { Dispatch } from 'react';
import { BeforeInstallPromptEvent } from './types';

// get env variable while checking if it exists, providing a default value if it doesn't
export const getEnvVariable = (name: string, defaultValue?: string): string => {
  const value = process.env[name];

  if (!value) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`${name} environment variable is not set`);
  }

  // return value ?? defaultValue;
  // console.log('value: ', value);
  return value;
};

// type SetStateAction<S> = S | ((prevState: S) => S);

// export function setupPwaInstallPrompt(
//   setInstallPrompt: Dispatch<SetStateAction<Event | null>>,
// ): void {
//   window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     setInstallPrompt(e);
//   });
// }

export function setupPwaInstallPrompt() {
  let deferredPrompt: BeforeInstallPromptEvent | null = null;

  const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
    e.preventDefault();
    deferredPrompt = e;
  };

  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  const triggerInstallPrompt = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User ${outcome} the install prompt.`);
      } catch (error) {
        console.error('Error triggering the install prompt:', error);
      } finally {
        deferredPrompt = null;
      }
    } else {
      console.warn('No deferred install prompt available.');
    }
  };

  const cleanup = () => {
    window.removeEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt,
    );
  };

  return { triggerInstallPrompt, cleanup };
}
