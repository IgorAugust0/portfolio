import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Igor Augusto. Todos os direitos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este website:</span> desenvolvido
        com Next.js (App router e Server Actions) | TypeScript | Tailwind CSS |
        React Email e Resend
      </p>
    </footer>
  );
}
