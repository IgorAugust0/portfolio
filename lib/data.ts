import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import dividImg from '@/public/divid.png';
import heinc from '@/public/heinc.png';
import timecapsuleImg from '@/public/timecapsule.png';

export const links = [
  { name: 'Início', hash: '#inicio' },
  { name: 'Sobre', hash: '#sobre' },
  { name: 'Projetos', hash: '#projetos' },
  { name: 'Habilidades', hash: '#habilidades' },
  { name: 'Experiência', hash: '#experiencia' },
  { name: 'Contato', hash: '#contato' },
] as const;

export const experiencesData = [
  {
    title: 'Graduando em Sistema de Informação',
    location: 'Uberlândia, MG',
    description:
      'Estou atualmente cursando o 7º período de Sistema de Informação na Universidade Federal de Uberlândia, onde tenho aprendido sobre diversas áreas da computação, como programação, banco de dados, redes, engenharia de software, entre outras.',
    icon: React.createElement(LuGraduationCap),
    date: '2021-Atualmente',
  },
] as const;

export const projectsData = [
  {
    title: 'Divid',
    description:
      'Aplicativo de divisão de despesas, onde é possível criar grupos de despesas, adicionar membros e registrar as despesas do grupo. Fui desenvolvedor front-end, responsável pelas telas de login, cadastro, homepage e detalhes do usuário. Desenvolvida como projeto final do curso Hackatruck',
    tags: ['SwiftUI', 'Node-RED', 'IBM Cloud', 'Cloudant', 'Figma'],
    imageUrl: dividImg,
  },
  {
    title: 'H&I Inc.',
    description:
      'Aplicação web full-stack de portal de anúncios de produtos com sistema de login e cadastro. Com seções de acesso público (homepage com anúncios) e privado (dashboard do usuário com CRUD de anúncios e do usuário, além de mensagens de interesse).',
    tags: ['PHP', 'Axios', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: heinc,
  },
  {
    title: 'TimeCapsule',
    description:
      'Aplicação full-stack do back-end ao mobile, que funciona como uma cápsula do tempo guardando memórias passadas numa timeline, onde o usuário poderá adicionar textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano. Desenvolvida durante o evento NLW Spacetime da Rocketseat',
    tags: [
      'TypeScript',
      'Next.js',
      'React',
      'PostgreSQL',
      'Tailwind',
      'Fastify',
      'React Native',
      'Expo',
    ],
    imageUrl: timecapsuleImg,
  },
] as const;

export const skillsData = [
  'Java',
  'Spring Boot',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Design Patterns',
  'Tailwind',
  'Prisma',
  'PostgreSQL',
  'Python',
  'SwiftUI',
  'Framer Motion',
] as const;
