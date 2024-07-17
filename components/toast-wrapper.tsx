'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastWrapper() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className:
          '!bg-gray-100 dark:!bg-gray-900 text-sm !text-gray-900 dark:!text-white border !border-gray-300/10 dark:!border-gray-700',
        style: {
          padding: '10px 15px',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          fontSize: '16px',
        },
        success: {
          iconTheme: {
            primary: 'rgb(34,197,94)', // Tailwind class: bg-green-500
            secondary: 'white',
          },
        },
        error: {
          iconTheme: {
            primary: 'rgb(244,63,94)', // Tailwind class: bg-rose-500
            secondary: 'white',
          },
        },
      }}
    />
  );
}
