'use client';

import React from 'react';
import { sendEmail, State } from '@/lib/actions';
import { useActionState } from 'react';
import SubmitBtn from '@/components/contact/submit-button';

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
          aria-describedby="email-error"
          className="border-blk my-3 h-14 rounded-lg border px-4"
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>

        {/* Message field */}
        <textarea
          name="message"
          id="message"
          placeholder="Sua mensagem"
          aria-describedby="message-error"
          className="border-blk my-3 h-52 rounded-lg p-4"
        ></textarea>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors.message.map((error: string) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>

        {/* Fields error message */}
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>

        {/* Submit button */}
        <SubmitBtn />
      </form>
    </>
  );
}
