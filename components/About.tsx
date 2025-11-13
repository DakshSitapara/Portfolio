'use client'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight">
        About Me
      </h2>
    
      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
        I’m a passionate <span className="text-primary font-semibold">Front-End Developer</span> dedicated to crafting
        sleek, high-performance web applications using modern tools like
        <span className="text-primary font-semibold"> React.js</span>, 
        <span className="text-primary font-semibold"> Next.js</span>, and 
        <span className="text-primary font-semibold"> TypeScript</span>.
      </p>

      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
        I transform complex challenges into intuitive, user-friendly experiences. My work emphasizes clean, maintainable code,
        performance optimization, and staying ahead with the latest web technologies.
      </p>

      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
        Beyond coding, I explore modern UI design trends, delve into software architecture, and build side projects
        that sharpen my skills and expand my creativity.
      </p>
    </section>
  )
}
