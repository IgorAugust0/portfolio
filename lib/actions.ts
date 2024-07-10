'use server';

import { z } from 'zod';
import { Resend } from 'resend';
// import { getErrorMessage } from "./utils";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'augustoigor269@gmail.com',
      subject: 'Contato do portfólio',
      reply_to: email,
      html: `<p>You have a new message:</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });
    return { ...prevState, message: 'Email sent!' };
  } catch (error) {
    console.error('Error sending email:', error);
    // return { error: getErrorMessage(error) };
    return { ...prevState, message: 'Failed to send email, try again later.' };
  }
}
