'use client';

import React from 'react';
import SubmitBtn from '@/components/contact/submit-button';
import { useContactForm } from '@/lib/hooks';

export default function ContactForm() {
  const {
    formValues,
    handleInputChange,
    formAction,
    state,
    handleSubmitClick,
  } = useContactForm();

  return (
    <>
      <p className="-mt-4 text-gray-700 dark:text-white/80">
        Por favor entre em contato diretamente em&nbsp;
        <a href="mailto:augustoigor269@gmail.com" className="underline">
          augustoigor269@gmail.com
        </a>
        ,&nbsp;ou por meio do campo abaixo
      </p>

      <form
        className="mt-9 flex flex-col"
        action={formAction}
        onSubmit={handleSubmitClick}
      >
        {/* Email field */}
        <div className="relative my-3">
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder=" "
            autoComplete="email"
            aria-describedby="email-error"
            className="border-blk peer h-14 w-full appearance-none rounded-lg px-4 transition duration-300 ease-in-out focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-transparent dark:text-white/70 dark:focus:border-indigo-500"
          />
          <label
            htmlFor="email"
            className="absolute -top-2.5 left-2 z-10 origin-[0] bg-white px-2 text-sm text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-500 dark:bg-gray-950 dark:text-white/70 peer-focus:dark:text-gray-400/90"
          >
            Seu email
          </label>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Message field */}
        <div className="relative my-3">
          <textarea
            name="message"
            id="message"
            value={formValues.message}
            onChange={handleInputChange}
            placeholder=" "
            aria-describedby="message-error"
            className="border-blk peer h-52 w-full appearance-none rounded-lg p-4 transition duration-300 ease-in-out focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-transparent dark:text-white/70 dark:focus:border-indigo-500"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute -top-2.5 left-2 z-10 origin-[0] bg-white px-2 text-sm text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-500 dark:bg-gray-950 dark:text-white/70 peer-focus:dark:text-gray-400/90"
          >
            Sua mensagem
          </label>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {state.errors?.message &&
              state.errors.message.map((error: string) => (
                <p key={error} className="text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>
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
