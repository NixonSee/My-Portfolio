import { motion } from 'framer-motion'
import ProjectCard from '../ProjectCard'

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    url: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['React', 'Node.js', 'TypeScript', 'Full-Stack']
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered responses, built with WebSocket for instant messaging and OpenAI integration.',
    url: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['React', 'Node.js', 'API']
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Collaborative project management tool with Kanban boards, team collaboration, and progress tracking.',
    githubUrl: 'https://github.com',
    tags: ['React', 'TypeScript', 'Full-Stack']
  },
  {
    id: '4',
    title: 'Weather Analytics Dashboard',
    description: 'Interactive dashboard displaying weather patterns, forecasts, and historical data with beautiful visualizations.',
    url: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['React', 'TypeScript', 'API']
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
