import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Secret from './pages/Secret'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const [, setKeySequence] = useState('')

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeySequence(prev => {
        const newSequence = (prev + e.key).slice(-3)
        if (newSequence.toLowerCase() === 'dev') {
          navigate('/secret-dev-zone')
          return ''
        }
        return newSequence
      })
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && window.location.pathname === '/secret-dev-zone') {
        navigate('/')
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [navigate])

  const isSecretPage = location.pathname === '/secret-dev-zone'

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/secret-dev-zone" element={<Secret />} />
        </Routes>
      </main>
      {!isSecretPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
