'use server';

import React from 'react';
import { z } from 'zod';
import { Resend } from 'resend';
import { getEnvVariable } from '@/lib/utils';
import type { State, StateReactHotToast } from '@/lib/types';
import ContactFormEmail from '@/components/contact/contact-form-email';
import { randomUUID as uuid } from 'crypto';

const resend = new Resend(getEnvVariable('RESEND_API_KEY'));
const sendTo = getEnvVariable('CONTACT_EMAIL');
const provider = getEnvVariable('EMAIL_PROVIDER');

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Endereço de email inválido' })
    .min(5, { message: 'Email deve ter no mínimo 5 caracteres' })
    .max(50, { message: 'Email deve ter no máximo 50 caracteres' }),
  message: z
    .string()
    .min(1, { message: 'Mensagem não pode estar vazia' })
    .max(500, { message: 'Mensagem deve ter no máximo 500 caracteres' }),
});

export async function sendEmail(
  prevState: State & StateReactHotToast, // intersection type
  formData: FormData,
): Promise<State & StateReactHotToast> {
  const validatedFields = FormSchema.safeParse({
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  });

  if (!validatedFields.success) {
    console.log('Error sending email...');
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Dados faltando ou incorretos. Preencha os campos corretamente.',
      type: 'error',
      toastId: prevState.toastId,
    };
  }

  // using shorthand syntax since names of properties and variables are the same
  const { email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: `Portfolio <${provider}>`,
      to: [sendTo],
      subject: '📧 Nova mensagem!',
      reply_to: email,
      react: React.createElement(ContactFormEmail, { email, message }),
      headers: {
        'X-Entity-Ref-ID': uuid(), // unique identifier for the email to prevent thread in gmail
      },
    });
    return { ...prevState, type: 'success' };
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return {
      ...prevState,
      message: 'Failed to send email, try again later.',
      type: 'error',
    };
  }
}
