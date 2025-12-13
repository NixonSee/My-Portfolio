import { motion, AnimatePresence } from 'framer-motion'
import { Code, Sparkles, Zap, Terminal, Lightbulb, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Secret() {
  const [showRoadmap, setShowRoadmap] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'command' | 'output', text: string }>>([
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: '> nixon' },
    { type: 'command', text: '$ skills' },
    { type: 'output', text: '> frontend | react | typescript | next.js' },
  ])

  // Scroll to top when component mounts
  useEffect(() => {
    // Use setTimeout to ensure it runs after render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)
  }, [])

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    let output = ''

    // Add command to history
    setTerminalHistory(prev => [...prev, { type: 'command', text: `$ ${cmd}` }])

    switch (command) {
      case 'whoami':
        output = '> nixon'
        break
      case 'skills':
        output = '> frontend | react | typescript | next.js'
        break
      case 'dream':
        output = '> Initializing world-shocking app roadmap... 🚀'
        setTimeout(() => setShowRoadmap(true), 800)
        break
      case 'help':
        output = '> Available commands: whoami, skills, clear'
        break
      case 'clear':
        setTerminalHistory([])
        setShowRoadmap(false)
        return
      default:
        output = `> command not found: ${command}. Type 'help' for available commands.`
    }

    // Add output to history
    setTerminalHistory(prev => [...prev, { type: 'output', text: output }])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && terminalInput.trim()) {
      executeCommand(terminalInput)
      setTerminalInput('')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20 overflow-auto">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl pt-24">

        {/* Main Title */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex gap-4">
            <Code className="w-16 h-16 text-green-400" />
            <Sparkles className="w-16 h-16 text-yellow-400" />
            <Zap className="w-16 h-16 text-blue-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
        >
          🎉 YOU FOUND IT! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 text-center"
        >
          Welcome to the secret developer zone!
        </motion.p>

        {/* Developer Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500 p-8 rounded-lg mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-blue-400">My Dev Belief</h2>
          </div>
          <div className="space-y-3 text-lg text-gray-300">
            <p className="flex items-start gap-2">
              <span className="text-green-400 mt-1">▸</span>
              Build things that matter.
            </p>
            <p className="flex items-start gap-2">
              <span className="text-green-400 mt-1">▸</span>
              Optimize later, understand first.
            </p>
            <p className="flex items-start gap-2">
              <span className="text-green-400 mt-1">▸</span>
              Clean code scales better than clever code.
            </p>
          </div>
        </motion.div>

        {/* Fake Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden mb-8"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="text-sm text-green-400 font-mono">nixon@portfolio:~$</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 font-mono text-sm h-64 overflow-auto">
            {terminalHistory.map((line, index) => (
              <div
                key={index}
                className={line.type === 'command' ? 'text-green-400 mb-1' : 'text-white mb-3'}
              >
                {line.text}
              </div>
            ))}
            
            <div className="flex items-center gap-2 text-green-400">
              <span>$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent outline-none flex-1 text-white caret-white"
                placeholder="Type a command... (try 'help' or 'dream')"
                autoFocus
              />
            </div>
          </div>
        </motion.div>

        {/* Roadmap (shown after typing 'dream') */}
        <AnimatePresence>
          {showRoadmap && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring' }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500 p-8 rounded-lg mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-purple-400">My Future World-Shocking App</h2>
              </div>
              
              <div className="space-y-6">
                {/* Phase 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-purple-500/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="text-xl font-bold text-purple-300 mb-2">Phase 1: Foundation</h3>
                    <p className="text-gray-400">[ Your idea and initial planning goes here ]</p>
                  </div>
                </motion.div>

                {/* Phase 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="w-0.5 h-full bg-blue-500/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">Phase 2: Development</h3>
                    <p className="text-gray-400">[ Tech stack and development milestones ]</p>
                  </div>
                </motion.div>

                {/* Phase 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="w-0.5 h-full bg-green-500/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="text-xl font-bold text-green-300 mb-2">Phase 3: Testing & Refinement</h3>
                    <p className="text-gray-400">[ Beta testing and improvements ]</p>
                  </div>
                </motion.div>

                {/* Phase 4 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Phase 4: Launch 🚀</h3>
                    <p className="text-gray-400">[ The big reveal - BOOM! 💥 ]</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 p-4 bg-black/30 rounded border border-purple-500/30">
                <p className="text-sm text-purple-300 italic">
                  "The best way to predict the future is to create it." - Keep building, Nixon! 🌟
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-400 text-sm"
        >
          <p>Press ESC or click below to go back</p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            BACK TO HOMEPAGE
          </motion.a>
        </motion.div>

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                opacity: Math.random()
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800)],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
