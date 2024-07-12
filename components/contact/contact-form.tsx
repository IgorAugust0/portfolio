'use client';

import React from 'react';
import SubmitBtn from '@/components/contact/submit-button';
import { useContactForm/* , handleFormSubmit */ } from '@/lib/hooks';

export default function ContactForm() {
  const { formValues, handleInputChange, formAction, state } = useContactForm();

  return (
    <>
      <p className="-mt-4 text-gray-700">
        Por favor entre em contato diretamente em&nbsp;
        <a href="mailto:augustoigor269@gmail.com" className="underline">
          augustoigor269@gmail.com
        </a>
        ,&nbsp;ou por meio do campo abaixo
      </p>

      <form
        className="mt-9 flex flex-col"
        action={formAction}
        // action={handleFormSubmit}
      >
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
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="Seu email"
          autoComplete="email"
          aria-describedby="email-error"
          className="border-blk my-3 h-14 rounded-lg border px-4"
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>

        {/* Message field */}
        <textarea
          name="message"
          id="message"
          value={formValues.message}
          onChange={handleInputChange}
          placeholder="Sua mensagem"
          aria-describedby="message-error"
          className="border-blk my-3 h-52 rounded-lg p-4"
        ></textarea>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors.message.map((error: string) => (
              <p key={error} className="text-sm text-red-500">
                {error}
              </p>
            ))}
        </div>

        {/* Fields error message */}
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mb-4 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>

        {/* Submit button */}
        <SubmitBtn formValues={formValues} />
      </form>
    </>
  );
}
