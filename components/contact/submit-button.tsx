'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';
import { FormValues } from '@/lib/types';
import { useFormFilled } from '@/lib/hooks';
import { Tooltip } from 'react-tooltip';
import { useTheme } from '@/context/theme-context';

export default function SubmitBtn({ formValues }: { formValues: FormValues }) {
  const { pending } = useFormStatus();
  const isFormFilled = useFormFilled(formValues);
  const isDisabled = pending || !isFormFilled;
  const { theme } = useTheme();

  return (
    <div>
      <button
        type="submit"
        disabled={isDisabled}
        data-tooltip-id="submit-btn-tooltip"
        data-tooltip-content={isDisabled ? 'Preencha todos os campos' : ''}
        aria-label="Enviar mensagem de contato"
        className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-indigo-800 text-white 
        outline-none transition-all hover:scale-105 hover:bg-indigo-700 focus:scale-105 active:scale-100 disabled:scale-100 
        disabled:cursor-not-allowed disabled:bg-opacity-50 dark:bg-indigo-800 dark:bg-opacity-90 dark:hover:bg-indigo-600 disabled:dark:hover:bg-indigo-900 disabled:hover:bg-indigo-800/70 disabled:dark:bg-opacity-40"
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Enviar
            <FaPaperPlane
              className={`text-xs opacity-70 transition-all ${!isDisabled ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : ''}`}
            />
          </>
        )}
      </button>
      <Tooltip
        id="submit-btn-tooltip"
        place="bottom"
        style={{
          backgroundColor:
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(243, 244, 246, 1)',
          color:
            theme === 'dark'
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(55, 65, 81, 1)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.2s ease-in-out',
        }}
      />
    </div>
  );
}
