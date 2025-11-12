const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Built with Next.js, TypeScript, and Tailwind CSS. Includes dark mode and animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/0.jpeg',
    demoLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio'
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'Full-stack app using React, Zustand, and Stripe API for payments.',
    tech: ['React', 'Zustand', 'Stripe API'],
    image: '/1.jpeg',
    demoLink: 'https://yourshop.com',
    githubLink: 'https://github.com/yourusername/ecommerce-app'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Weather forecast app using React Query and OpenWeather API.',
    tech: ['React', 'React Query', 'API Integration'],
    image: '/2.jpeg',
    demoLink: 'https://yourweatherapp.com',
    githubLink: 'https://github.com/yourusername/weather-app'
  },
  {
    id: 4,
    title: 'Blog Website',
    description: 'Blog website built with Next.js, TypeScript, and Tailwind CSS. Includes dark mode and animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/3.jpeg',
    demoLink: 'https://yourblog.com',
    githubLink: 'https://github.com/yourusername/blog'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Built with Next.js, TypeScript, and Tailwind CSS. Includes dark mode and animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/4.jpeg',
    demoLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio'
  },
  {
    id: 6,
    title: 'E-commerce App',
    description: 'Full-stack app using React, Zustand, and Stripe API for payments.',
    tech: ['React', 'Zustand', 'Stripe API'],
    image: '/5.jpeg',
    demoLink: 'https://yourshop.com',
    githubLink: 'https://github.com/yourusername/ecommerce-app'
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
