'use client';

import { useEffect } from 'react';
import { setupPwaInstallPrompt } from '@/lib/utils';

export default function PwaInstallPrompt() {
  useEffect(() => {
    const { cleanup } = setupPwaInstallPrompt();

    return cleanup;
  }, []);

  const handleClick = async () => {
    const { triggerInstallPrompt } = setupPwaInstallPrompt();
    await triggerInstallPrompt();
  };

  return <button onClick={handleClick}>Install App</button>;
}
