import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t-4 border-black bg-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
          
          {/* Quick Links - Left */}
          <div>
            <h3 className="text-sm font-bold mb-3 uppercase tracking-wide text-black">Quick Links</h3>
            <div className="space-y-1">
              <a href="/" className="block text-xs font-semibold text-black hover:underline transition-all">
                Home
              </a>
              <a href="/about" className="block text-xs font-semibold text-black hover:underline transition-all">
                About
              </a>
              <a href="#skills" className="block text-xs font-semibold text-black hover:underline transition-all">
                Skills
              </a>
              <a href="#projects" className="block text-xs font-semibold text-black hover:underline transition-all">
                Projects
              </a>
            </div>
          </div>

          {/* Copyright - Center */}
          <div className="flex items-center justify-center">
            <p className="text-xs font-bold text-black">
              &copy; {new Date().getFullYear()} Nixon See Kok Wai<br/>All rights reserved.
            </p>
          </div>

          {/* Connect - Right */}
          <div>
            <h3 className="text-sm font-bold mb-3 uppercase tracking-wide text-black">Connect</h3>
            <div className="flex gap-2 justify-center">
              <a
                href="https://github.com/NixonSee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black bg-white hover:bg-black transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-black group-hover:text-white transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/in/nixon-see-a8b4a1277/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black bg-white hover:bg-black transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-black group-hover:text-white transition-all" />
              </a>
              <a
                href="mailto:nixonsee2006@gmail.com"
                className="p-2 border-2 border-black bg-white hover:bg-black transition-all group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-black group-hover:text-white transition-all" />
              </a>
            </div>
            <p className="text-xs font-semibold text-black mt-3">
              nixonsee2006@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

