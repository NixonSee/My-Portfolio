import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { Filter } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  url?: string
  githubUrl?: string
  tags: string[]
}

// Static project data
const staticProjects: Project[] = [
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

const filterTags = ['All', 'React', 'Node.js', 'TypeScript', 'Full-Stack', 'API']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? staticProjects
    : staticProjects.filter(p => p.tags?.includes(activeFilter))

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter:</span>
          </div>
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeFilter === tag
                  ? 'bg-tech-blue text-background'
                  : 'bg-white/5 border border-white/10 hover:border-tech-blue/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-2xl text-muted-foreground mb-4">No projects found</p>
              <p className="text-muted-foreground">
                Try selecting a different filter or check back later
              </p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags || []}
                url={project.url}
                delay={index * 0.1}
              />
            ))
          )}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, shopping cart, and secure checkout.',
                tags: ['React', 'Node.js', 'TypeScript', 'Full-Stack'],
              },
              {
                title: 'Task Management App',
                description: 'Real-time collaborative task management tool with drag-and-drop interface, built with React and WebSockets.',
                tags: ['React', 'TypeScript', 'WebSocket', 'API'],
              },
              {
                title: 'Portfolio CMS',
                description: 'Content management system for portfolio websites with authentication, file upload, and markdown support.',
                tags: ['Node.js', 'Express', 'API', 'Full-Stack'],
              },
            ].map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
