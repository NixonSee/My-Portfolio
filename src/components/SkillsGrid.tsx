import { motion } from 'framer-motion'
import { Code2, Database, Server, Smartphone } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'tech-blue',
  },
  {
    icon: Server,
    title: 'Backend Development',
    techs: ['Node.js', 'Express', 'RESTful API'],
    color: 'tech-purple',
  },
  {
    icon: Database,
    title: 'Database',
    techs: ['MySQL', 'PostgreSQL'],
    color: 'tech-green',
  },
  {
    icon: Smartphone,
    title: 'Tools & Others',
    techs: ['Git', 'VS Code'],
    color: 'tech-pink',
  },
]

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white border-4 border-black p-6 hover:bg-black transition-all duration-300 group cursor-pointer"
        >
          <div className="p-3 bg-black group-hover:bg-white w-fit mb-4 transition-all duration-300">
            <skill.icon className="w-6 h-6 text-white group-hover:text-black transition-all" />
          </div>
          <h3 className="text-lg font-bold mb-3 uppercase tracking-wide text-black group-hover:text-white transition-all">{skill.title}</h3>
          <div className="flex flex-wrap gap-2">
            {skill.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold border-2 border-black group-hover:border-white bg-white group-hover:bg-black text-black group-hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
