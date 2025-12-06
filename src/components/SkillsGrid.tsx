import { motion } from 'framer-motion'
import { Moon, Pencil, Box, Code2, Palette, Flame, Wrench, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Moon,
    step: 'Step 1',
    title: 'Imagine it',
    emoji: '🌙',
    description: 'Dream up wild ideas at 3 AM',
  },
  {
    icon: Pencil,
    step: 'Step 2',
    title: 'Sketch it',
    emoji: '✏️',
    description: 'Put ideas on paper (or napkin)',
  },
  {
    icon: Box,
    step: 'Step 3',
    title: 'Break it down',
    emoji: '🧱',
    description: 'Plan the architecture',
  },
  {
    icon: Code2,
    step: 'Step 4',
    title: 'Make it real',
    emoji: '💻',
    description: 'Write the code',
  },
  {
    icon: Palette,
    step: 'Step 5',
    title: 'Make it pretty',
    emoji: '🎨',
    description: 'Design & styling magic',
  },
  {
    icon: Flame,
    step: 'Step 6',
    title: 'Break it accidentally',
    emoji: '🔥',
    description: 'Find all the bugs',
  },
  {
    icon: Wrench,
    step: 'Step 7',
    title: 'Fix it for real',
    emoji: '🛠️',
    description: 'Debug & refactor',
  },
  {
    icon: Rocket,
    step: 'Step 8',
    title: 'Deploy and celebrate',
    emoji: '🚀🎉',
    description: 'Ship it to the world',
  },
]

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white border-4 border-black p-6 hover:bg-black transition-all duration-300 group cursor-pointer relative"
        >
          <div className="absolute top-4 right-4 text-xs font-bold text-black group-hover:text-white transition-all">
            {step.step}
          </div>
          <div className="p-3 bg-black group-hover:bg-white w-fit mb-4 transition-all duration-300">
            <step.icon className="w-6 h-6 text-white group-hover:text-black transition-all" />
          </div>
          <div className="text-2xl mb-2">{step.emoji}</div>
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-black group-hover:text-white transition-all">
            {step.title}
          </h3>
          <p className="text-sm text-black group-hover:text-white transition-all">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
