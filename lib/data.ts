import { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaLaptopCode } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { GrCertificate } from 'react-icons/gr';
import dividImg from '@/public/assets/divid.png';
import heinc from '@/public/assets/heinc.png';
import timecapsuleImg from '@/public/assets/timecapsule.png';

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
    id: 1,
    title: 'Graduação em Sistema de Informação',
    url: 'https://www.ufu.br/',
    location: 'Uberlândia, MG',
    description:
      'Atualmente cursando o 8º período de Sistemas de Informação na Universidade Federal de Uberlândia, onde tenho aprendido sobre diversas áreas da computação, como programação, banco de dados, redes, engenharia de software, entre outras.',
    icon: createElement(LuGraduationCap),
    date: '2021-Atualmente',
  },
  {
    id: 2,
    title: 'Participante Maratona SBC - ICPC',
    url: 'https://maratona.sbc.org.br/',
    location: 'Uberlândia, MG',
    description:
      'Participei da Maratona de Programação da Sociedade Brasileira de Computação, onde tive a oportunidade de competir com outros estudantes de computação, resolvendo problemas de lógica e algoritmos em equipe.',
    icon: createElement(FaLaptopCode),
    date: '2021/2022',
  },
  {
    id: 3,
    title: 'Aluno do HackaTruck MakerSpace',
    url: 'https://hackatruck.com.br/',
    location: 'Uberlândia, MG',
    description:
      'Fui selecionado para participar do HackaTruck MakerSpace, um projeto de capacitação profissional tecnológica, onde aprendi com criatividade a desenvolver protótipos de aplicativos e soluções utilizando as tecnologias mais atuais de linguagem de programação Swift, Internet das Coisas e de serviços cognitivos em nuvem.',
    icon: createElement(GrCertificate),
    date: '2023',
  },
  {
    id: 4,
    title: 'Back-end Developer Intern',
    url: 'https://mottu.com.br/',
    location: 'Uberlândia, MG',
    description:
      'Atualmente atuo como estagiário de desenvolvimento back-end na Mottu, contribuindo para o desenvolvimento de novas funcionalidades e manutenção de sistemas. Minha stack principal é .NET Core, C#, SQL Server.',
    icon: createElement(CgWorkAlt),
    date: '2025-Atualmente',
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: 'Divid',
    description:
      'Aplicativo de divisão de despesas, onde é possível criar grupos de despesas, adicionar membros e registrar as despesas do grupo. Fui desenvolvedor front-end, responsável pelas telas de login, cadastro, homepage e detalhes do usuário.',
    tags: ['SwiftUI', 'Node-RED', 'IBM Cloud', 'Cloudant', 'Figma'],
    imageUrl: dividImg,
    repoUrl: 'https://github.com/IgorAugust0/DiviD',
    demoUrl: '',
  },
  {
    id: 2,
    title: 'H&I Inc.',
    description:
      'Aplicação web full-stack de portal de anúncios de produtos com sistema de login e cadastro. Com seções de acesso público (homepage com anúncios) e privado (dashboard do usuário com CRUD de anúncios e do usuário, além de mensagens de interesse).',
    tags: ['PHP', 'Axios', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: heinc,
    repoUrl: 'https://github.com/IgorAugust0/hieinc',
    demoUrl: 'http://hieinc.infinityfreeapp.com/',
  },
  {
    id: 3,
    title: 'TimeCapsule',
    description:
      'Aplicação full-stack do back-end ao mobile, que funciona como uma cápsula do tempo guardando memórias passadas numa timeline, onde o usuário poderá adicionar textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano.',
    tags: [
      'Next.js',
      'React',
      'PostgreSQL',
      'Tailwind',
      'React Native',
      'Expo',
    ],
    imageUrl: timecapsuleImg,
    repoUrl: 'https://github.com/IgorAugust0/nlw-spacetime',
    demoUrl: '',
  },
] as const;

// export const skillsData = [
//   'Java',
//   'Spring Boot',
//   'TypeScript',
//   'React',
//   'Next.js',
//   'Node.js',
//   'Design Patterns',
//   'Tailwind',
//   'Hibernate',
//   'PostgreSQL',
//   'Python',
//   'SwiftUI',
//   'Framer Motion',
// ] as const;

export const skillsData = [
  'C#',
  '.NET',
  'PostgreSQL',
  'SQL Server',
  'Entity Framework',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Next.js',
  'React',
  'Python',
  'SwiftUI',
  'Design Patterns',
] as const;