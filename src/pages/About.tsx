import { motion } from 'framer-motion'
import { Code2, Award, Calendar, Briefcase } from 'lucide-react'
import InteractiveGrid from '../components/InteractiveGrid'

const experiences = [
  {
    year: '2020 - Present',
    title: 'Part-Time Fiber Optic Technician',
    company: 'REDSUN ENGINEERING SDN BHD',
    description: 'Assisted in installing, maintaining, and troubleshooting fiber optic networks, gaining hands-on technical and problem-solving experience.',
  },
  {
    year: '2022 - 2023',
    title: 'Part-Time Mathematics Tutor',
    company: 'Eye Level',
    description: 'Guided groups of primary and secondary students in mathematics, improving their understanding through structured lessons and clear explanations.',
  }
]

const achievements = [
  {
    icon: Award,
    title: 'Great Malaysia AI Hackathon (2025)',
    description: 'Developed an AI-powered disaster response mapping tool using React and AWS services to visualize rescue zones and improve response efficiency',
  },
  {
    icon: Award,
    title: 'DevMatch Web3 Hackathon (2025)',
    description: 'Built a blockchain-based scholarship platform using Next.js, Solidity, and Scaffold-eth2, integrating smart contracts and IPFS for secure data handling',
  },
  {
    icon: Award,
    title: 'COMING SOON...',
    description: '---',
  },
]

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express', 'REST API'],
  'Database': ['PostgreSQL', 'MySQL'],
  'Tools': ['Git', 'Vercel', 'Figma', 'Canva'],
}

export default function About() {
  return (
    <InteractiveGrid className="min-h-screen bg-white pt-20">
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
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide text-black group-hover:text-white transition-all">My Journey</h2>
              <p className="text-black group-hover:text-white leading-relaxed mb-4 transition-all">
                I’m <b>Nixon See</b>, a starter pack developer who enjoys creating clean, simple, and meaningful digital experiences.
                I started my coding journey during college times <b>[and that's where I started to get suffer as well]</b>, and since then I’ve explored everything from UI design to creating frontend websites then to backend development, I started to get to know more with React, TypeScript, and modern web tools.
                I’m always curious, constantly learning, and eager to build things that make life easier or more enjoyable.
              </p>
              <p className="text-black group-hover:text-white leading-relaxed mb-4 transition-all">
                Except for coding every day, I love to play badminton with friends, watch YouTube, and definitely games is also part of my daily dose of entertainment.
              </p>
              <p className="text-black group-hover:text-white leading-relaxed mb-6 transition-all">
                <b>ONE DAY!! TRUST ME ONE DAY...,</b> I'm hoping that I can create an app which can shock the world <b>[BOOM]</b> with my unique ideas and with the help of AI coding. But I’m not that rushing, I’m just started to build up my foundation, improving my craft, and preparing for that moment. <b>[wait for my good news]</b> :D
              </p>
              <p className="text-black text-xs group-hover:text-white leading-relaxed mb-4 transition-all">
                <b>I'm MALAYSIAN btw. 🇲🇾</b>
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
            Technical Tools
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
            Work Experience
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
    </InteractiveGrid>
  )
}
