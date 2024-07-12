'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';
import { FormValues } from '@/lib/types';
import { useFormFilled } from '@/lib/hooks';
import { Tooltip } from 'react-tooltip';

export default function SubmitBtn(/*{ formValues }: { formValues: FormValues }*/) {
  const { pending } = useFormStatus();
  // const isFormFilled = useFormFilled(formValues);
  const isDisabled = pending /*|| !isFormFilled*/;

  return (
    <div>
      <button
        type="submit"
        disabled={isDisabled}
        data-tooltip-id="submit-btn-tooltip"
        data-tooltip-content={isDisabled ? 'Preencha todos os campos' : ''}
        className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 
        rounded-full bg-gray-900 text-white outline-none transition-all 
        hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-100 
        disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-70"
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
          backgroundColor: '#333',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
}
