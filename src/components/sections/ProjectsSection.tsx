import { motion } from 'framer-motion'
import ProjectCard from '../ProjectCard'

const projects = [
  {
    id: '1',
    title: 'Expense-Tracker',
    description: 'A simple and responsive web app that lets users add, filter, and visualize their daily expenses.',
    githubUrl: 'https://github.com/NixonSee/Expense-Tracker',
    tags: ['HTML', 'CSS', 'JavaScript','JQuery']
  },
  {
    id: '2',
    title: 'U.Defuse',
    description: 'U.Defuse is an innovative hybrid game system that integrates physical card mechanics with real-time digital quiz challenges to create an interactive multiplayer experience.',
    url: 'https://u-defuse.vercel.app',
    githubUrl: 'https://github.com/NixonSee/U.Defuse',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Socket.IO', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Rest API']
  },
  {
    id: '3',
    title: 'AWSGen-AI',
    description: 'A real-time disaster monitoring dashboard that visualizes global emergencies using live GDACS data.',
    githubUrl: 'https://github.com/LeowJianYang/AWSGenAI-R',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Leaflet', 'GDACS API', 'Axios', 'AWS Bedrock Runtime']
  },
  {
    id: '4',
    title: 'My-Portfolio',
    description: 'A personal portfolio website to showcase my projects, skills, and experiences.',
    url: 'https://example.com',
    githubUrl: 'https://github.com/NixonSee/My-Portfolio',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: '5',
    title: 'Portfolio Generator',
    description: 'SaaS platform that helps developers create stunning portfolio websites with customizable templates.',
    url: 'https://example.com',
    tags: ['React', 'Node.js', 'Full-Stack']
  },
  {
    id: '6',
    title: 'Code Snippet Manager',
    description: 'Organize and share code snippets with syntax highlighting, tagging system, and search functionality.',
    githubUrl: 'https://github.com',
    tags: ['React', 'TypeScript']
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-6 text-black"
          >
            MY PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Showcasing my projects and technical innovations
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              url={project.url}
              github={project.githubUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
