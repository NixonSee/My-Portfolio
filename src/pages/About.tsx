import { motion } from 'framer-motion'
import { Code2, Rocket, Zap, Award, Calendar, Briefcase } from 'lucide-react'

const experiences = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovation Inc.',
    description: 'Leading development of enterprise applications using React, Node.js, and cloud technologies.',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    description: 'Built scalable web applications and REST APIs, worked with cross-functional teams.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Creative Studio',
    description: 'Developed responsive user interfaces and implemented modern design systems.',
  },
]

const achievements = [
  {
    icon: Award,
    title: 'Open Source Contributor',
    description: 'Active contributor to popular open-source projects with 500+ GitHub stars',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Reduced application load time by 60% through advanced optimization techniques',
  },
  {
    icon: Rocket,
    title: 'Project Delivery',
    description: '20+ successful projects delivered on time and within budget',
  },
]

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'Prisma', 'REST API', 'GraphQL'],
  'Database': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'Tools': ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
}

export default function About() {
  return (
    <div className="min-h-screen bg-white grid-background pt-20">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-black uppercase tracking-tight">
            About Me
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
            Software engineer dedicated to building clean, scalable solutions.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white border-4 border-black p-8 mb-16 hover:bg-black hover:text-white transition-all duration-300 group"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-black group-hover:bg-white transition-all">
              <Code2 className="w-6 h-6 text-white group-hover:text-black transition-all" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide text-black group-hover:text-white transition-all">My Journey</h2>
              <p className="text-black group-hover:text-white leading-relaxed mb-4 transition-all">
                I'm a passionate software engineer with expertise in full-stack development. 
                With years of experience building scalable web applications, I specialize in 
                creating elegant solutions to complex problems.
              </p>
              <p className="text-black group-hover:text-white leading-relaxed transition-all">
                My focus is on writing clean, maintainable code and staying current with the 
                latest technologies. I believe in continuous learning and sharing knowledge 
                with the developer community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-black uppercase tracking-tight">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-4 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-black group-hover:text-white transition-all">
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm font-semibold text-black group-hover:text-white transition-all"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-black uppercase tracking-tight">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-4 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black group-hover:bg-white shrink-0 transition-all">
                    <Briefcase className="w-5 h-5 text-white group-hover:text-black transition-all" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-black group-hover:text-white transition-all" />
                      <span className="text-sm font-bold uppercase tracking-wide text-black group-hover:text-white transition-all">
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 uppercase tracking-wide text-black group-hover:text-white transition-all">{exp.title}</h3>
                    <p className="text-black group-hover:text-white mb-3 font-semibold transition-all">{exp.company}</p>
                    <p className="text-black group-hover:text-white transition-all">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-black uppercase tracking-tight">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-4 border-black p-6 text-center hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <div className="inline-flex p-4 bg-black group-hover:bg-white mb-4 transition-all">
                    <Icon className="w-8 h-8 text-white group-hover:text-black transition-all" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-black group-hover:text-white transition-all">{achievement.title}</h3>
                  <p className="text-sm text-black group-hover:text-white transition-all">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
