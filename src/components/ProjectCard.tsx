import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  url?: string
  github?: string
  delay?: number
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  url, 
  github,
  delay = 0 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white border-4 border-black p-6 hover:bg-black transition-all duration-300 group relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-black group-hover:bg-white transition-all duration-300">
            <div className="w-8 h-8 bg-white group-hover:bg-black" />
          </div>
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black group-hover:border-white transition-all"
              >
                <Github className="w-5 h-5 text-black group-hover:text-white transition-all" />
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black group-hover:border-white transition-all"
              >
                <ExternalLink className="w-5 h-5 text-black group-hover:text-white transition-all" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-black group-hover:text-white transition-all">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-300 mb-4 line-clamp-3 transition-colors">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold border-2 border-black group-hover:border-white bg-white group-hover:bg-black text-black group-hover:text-white transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
