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
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactFormEmailProps {
  // name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem do seu site de portfólio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="border-blk my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                Você recebeu a seguinte mensagem:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>O email do remetente é: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
