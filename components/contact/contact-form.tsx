'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { sendEmail, State } from '@/lib/actions';
import { useActionState } from 'react';

export default function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <>
      <p className="-mt-4 text-gray-700">
        Por favor entre em contato diretamente em&nbsp;
        <a href="mailto:augustoigor269@gmail.com" className="underline">
          augustoigor269@gmail.com
        </a>
        ,&nbsp;ou por meio do campo abaixo
      </p>

      <form className="mt-9 flex flex-col" action={formAction}>
        {/* Name field */}
        {/* <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome/empresa"
          autoComplete="name"
          className="border-blk h-14 rounded-lg border px-4"
        /> */}
        {/* Email field */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu email"
          autoComplete="email"
          className="border-blk my-3 h-14 rounded-lg border px-4"
        />
        {/* Message field */}
        <textarea
          name="message"
          id="message"
          placeholder="Sua mensagem"
          className="border-blk my-3 h-52 rounded-lg p-4"
        ></textarea>
        {/* Submit button */}
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 
          rounded-full bg-gray-900 text-white outline-none transition-all 
          hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-100"
        >
          Enviar
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </>
  );
}
