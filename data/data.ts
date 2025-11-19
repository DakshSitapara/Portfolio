const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Built with Next.js, TypeScript, and Tailwind CSS. Includes dark mode and animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://daksh-sitapara-portfolio.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/Portfolio'
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'Frontend app using React, Next.js, Zustand for state management.',
    tech: ['React', 'Next.js', 'Zustand'],
    demoLink: 'https://e-commerce-website-theta-rust.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/e-commerce-website'
  },
  {
    id: 3,
    title: 'Next.js Starter Kit',
    description: 'Next.js starter kit with React,Next.js, and Shadcn UI. For Quick Start.',
    tech: ['React', 'Next.js', 'Shadcn UI'],
    demoLink: 'https://next-js-starter-kit-self.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/next.js-starter_kit'
  },
  {
    id: 4,
    title: 'Netflix Clone',
    description: 'Fullstack Netflix Clone with React, Next.js, TailwindCSS & Prisma.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    demoLink: 'https://netflix-clone-five-dun-56.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/netflix-clone'
  },
  {
    id: 5,
    title: 'Google Docs Clone',
    description: 'Multiple users can simultaneously edit documents with live synchronization—just like Google Docs!',
    tech: ['Next.js', 'Shadcn UI', 'Convex', 'Clerk', 'Liveblocks'],
    demoLink: 'https://google-docs-clone-iota-ivory.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/google_docs_clone'
  },
  {
    id: 6,
    title: 'Wishlist',
    description: 'A wishlist app built with Next.js, Tailwind CSS, and Shadcn UI.',
    tech: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
    demoLink: 'https://wishlist-silk-eight.vercel.app/',
    githubLink: 'https://github.com/DakshSitapara/wishlist'
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
