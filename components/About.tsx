'use client'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>

      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        I’m a passionate <span className="text-primary font-medium">Front-End Developer</span> who loves building
        sleek, high-performance web applications with modern tools like
        <span className="text-primary font-medium"> React.js</span>, <span className="text-primary font-medium">Next.js</span>,
        and <span className="text-primary font-medium">TypeScript</span>.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        I enjoy turning complex problems into intuitive, user-friendly experiences.  
        My focus is on writing clean, efficient, and maintainable code — and always learning new technologies to stay sharp.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Outside of coding, I’m usually exploring UI design trends, reading about software architecture,  
        or working on side projects that help me grow as a developer.
      </p>

      {/* Skills */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {[
          'Next.js',
          'React.js',
          'TypeScript',
          'Tailwind CSS',
          'shadcn/ui',
          'React Query',
          'Zustand',
          'React Hook Form'
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
