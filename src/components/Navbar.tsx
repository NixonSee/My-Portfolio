import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT ME', path: '/about' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-black"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="transition-opacity hover:opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-black text-2xl font-black tracking-tighter">NS</span>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">NIXON SEE PORTFOLIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative"
              >
                <span className={`text-base font-bold tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white" />
              <span className="w-full h-0.5 bg-white" />
              <span className="w-full h-0.5 bg-white" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
