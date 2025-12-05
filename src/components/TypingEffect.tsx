import { useState, useEffect } from 'react'

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
]

export default function TypingEffect() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1))
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setText(currentRole.substring(0, text.length - 1))
          if (text === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-gradient font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
