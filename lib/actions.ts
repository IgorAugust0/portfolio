'use server';

import React from 'react';
import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/contact/contact-form-email';
import { getEnvVariable } from './utils';

const resend = new Resend(process.env.RESEND_API_KEY);
const [sendTo, provider] = ['CONTACT_EMAIL', 'EMAIL_PROVIDER'].map((name) =>
  getEnvVariable(name),
);

export type State = {
  errors?: {
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(5, { message: 'Email must be at least 5 characters long' })
    .max(50, { message: 'Email must be at most 50 characters long' }),
  message: z
    .string()
    .min(1, { message: 'Message cannot be empty' })
    .max(500, { message: 'Message must be at most 500 characters long' }),
});

export async function sendEmail(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  });

  if (!validatedFields.success) {
    console.log('Error sending email...');
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields',
    };
  }

  // using shorthand syntax since names of properties and variables are the same
  const { email, message } = validatedFields.data; //

  try {
    await resend.emails.send({
      from: `Contact Form <${provider}>`,
      to: sendTo,
      subject: 'Contato do portfólio',
      reply_to: email,
      react: React.createElement(ContactFormEmail, { email, message }),
    });
    return { ...prevState, message: 'Email sent!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { ...prevState, message: 'Failed to send email, try again later.' };
  }
}
