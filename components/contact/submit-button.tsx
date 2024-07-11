'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';
import { FormValues } from '@/lib/types';
import { useFormFilled } from '@/lib/hooks';

export default function SubmitBtn({ formValues }: { formValues: FormValues }) {
  const { pending } = useFormStatus();
  const isFormFilled = useFormFilled(formValues);

  return (
    <button
      type="submit"
      disabled={pending || !isFormFilled}
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 
          rounded-full bg-gray-900 text-white outline-none transition-all 
          hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-100 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-70"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
