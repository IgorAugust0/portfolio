# portfolio

> My personal website <3

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIgorAugust0%2Fportfolio)

## Technology stack

- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Back-end:** [Next.js](https://nextjs.org/)
- **Front-end:** [React](https://react.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/animation/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Tools:** [Resend](https://resend.com/) | [React Email](https://react.email/) | [Zod](https://zod.dev/) | [next-pwa](https://github.com/DuCanhGH/next-pwa)
- **Components:** [react-hot-toast](https://react-hot-toast.com/) | [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline) | [react-tooltip](https://react-tooltip.com/)

## Running locally

1. Clone this repo:

```sh
git clone https://github.com/IgorAugust0/portfolio.git
```

2. Then go to the project's folder:

```sh
cd portfolio
```

3. Install all dependencies:

```sh
pnpm i
```

4. Configure your environment variables and follow the instructions:

```sh
cp .env.example .env.local
```

5. Run locally:

```sh
pnpm dev
```

## File structure

The basic file structure for the project is organized in the following way:

```
.
|-- app
|-- components
|-- context
|-- lib
`-- public
```

### [app](https://github.com/IgorAugust0/portfolio/tree/main/app)

Here you'll find the main page of the website. Considering it's a single page application with a single route, most of the sections were defined in the components folder.

### [components](https://github.com/IgorAugust0/portfolio/tree/main/components)

Here you'll find reusable blocks of React components, separated by their respective section.

### [context](https://github.com/IgorAugust0/portfolio/tree/main/context)

Here you'll find context providers for the website, such as active section and theme context.

### [lib](https://github.com/IgorAugust0/portfolio/tree/main/lib)

Here you'll find a set of utilities, such as server components, hooks, type definitions and local static data.

### [public](https://github.com/IgorAugust0/portfolio/tree/main/public)

Here you'll find all assets, such as manifest files, icons and images.

## License

[MIT License](./LICENSE) © Igor Augusto
