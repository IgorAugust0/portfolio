import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { ContactFormEmailProps } from '@/lib/types';

export default function ContactFormEmail({
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container className="mx-auto max-w-3xl">
            <Section className="rounded-t-md bg-indigo-600 py-4 text-center text-white">
              <Heading className="text-2xl font-bold">
                Formulário de Contato
              </Heading>
            </Section>
            <Section className="rounded-md border border-gray-300 bg-white px-10 py-6 shadow-md">
              <Heading className="mb-4 text-xl leading-tight">
                Olá, tudo bem?
                <br />
                Você recebeu a seguinte mensagem:
              </Heading>
              <Text className="mb-6">{message}</Text>
              <Hr className="my-6 border-gray-300" />
              <Text>
                Enviado por: <span className="font-bold">{email}</span>
              </Text>
            </Section>
            <Section className="mt-6 rounded-b-md bg-gray-200 py-4 text-center text-black">
              <Text className="text-sm">
                &copy; 2024&nbsp;
                <Link
                  href="https://igor-augusto.vercel.app/"
                  className="text-indigo-600"
                >
                  Igor Augusto
                </Link>
                .&nbsp;Todos os direitos reservados.
              </Text>
              <Text className="mt-2 text-sm"></Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
