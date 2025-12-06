import { motion } from 'framer-motion'
import SkillsGrid from '../SkillsGrid'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-6 text-black"
          >
            HOW I BUILD A PROJECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black max-w-2xl mx-auto"
          >
            My creative process from idea to deployment
          </motion.p>
        </motion.div>

        <SkillsGrid />
      </div>
    </section>
  )
}
