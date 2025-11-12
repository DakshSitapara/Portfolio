const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Built with Next.js, TypeScript, and Tailwind CSS. Includes dark mode and animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/0.jpeg',
    demoLink: 'https://portfolio-five-nu-ikvwcqj9lw.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/Portfolio'
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'Frontend app using React, Next.js, Zustand for state management.',
    tech: ['React', 'Zustand'],
    image: '/1.jpeg',
    demoLink: 'https://e-commerce-website-theta-rust.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/e-commerce-website'
  },
  {
    id: 3,
    title: 'Next.js Starter Kit',
    description: 'Next.js starter kit with React,Next.js, and Shadcn UI.',
    tech: ['React', 'Next.js', 'Shadcn UI'],
    image: '/2.jpeg',
    demoLink: 'https://next-js-starter-kit-self.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/next.js-starter_kit'
  },
  {
    id: 4,
    title: 'Netflix Clone',
    description: 'Fullstack Netflix Clone with React, Next.js, TailwindCSS & Prisma.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    image: '/3.jpeg',
    demoLink: 'https://netflix-clone-five-dun-56.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/netflix-clone'
  },
  {
    id: 5,
    title: 'Google Docs Clone',
    description: 'A real-time collaborative document editor built using Next.js 15, React, Tailwind CSS, Shadcn UI, Convex, Clerk, and Liveblocks. Multiple users can simultaneously edit documents with live synchronization—just like Google Docs!',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Convex', 'Clerk', 'Liveblocks'],
    image: '/4.jpeg',
    demoLink: 'https://google-docs-clone-iota-ivory.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/google_docs_clone'
  }
]
export { projects }


const slugs = [
    'react',
    'typescript',
    'tailwindcss',
    'shadcnui',
    'reactquery',
    'reacthookform',
    'vercel',
    'github',
    'eslint',
    'prettier',
    'npm',
    'axios',
    'git',
    'html5',
    'javascript',
    'mongodb',
    'express',
    'redux',
    'nextdotjs',
    'nodedotjs',
    'css',
]

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )
export { images }
