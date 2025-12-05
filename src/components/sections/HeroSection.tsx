import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-white -mt-14">
      <div className="w-full mx-auto text-center">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 px-4"
        >
          <img 
            src="/hero-name.png" 
            alt="Nixon See Kok Wai" 
            className="w-full max-w-6xl mx-auto"
          />
        </motion.div>

        {/* CTA Buttons at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.08, rotate: -1 }}
              whileTap={{ scale: 0.92 }}
              className="px-10 py-4 bg-white border-4 border-black text-black text-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              &lt;ABOUT ME&gt;
            </motion.button>
          </Link>
          
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.92 }}
              className="px-10 py-4 bg-white border-4 border-black text-black text-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              &lt;MY WORK&gt;
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
