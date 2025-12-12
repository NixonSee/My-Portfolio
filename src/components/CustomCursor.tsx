import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    const mousePos = { x: -100, y: -100 }
    const cursorPos = { x: -100, y: -100 }
    const dotPos = { x: -100, y: -100 }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    // Smooth cursor follow animation
    let animationId: number
    const animate = () => {
      // Outer cursor follows with delay
      const dx = mousePos.x - cursorPos.x
      const dy = mousePos.y - cursorPos.y
      cursorPos.x += dx * 0.15
      cursorPos.y += dy * 0.15

      // Inner dot follows faster
      const dotDx = mousePos.x - dotPos.x
      const dotDy = mousePos.y - dotPos.y
      dotPos.x += dotDx * 0.3
      dotPos.y += dotDy * 0.3

      cursor.style.left = `${cursorPos.x}px`
      cursor.style.top = `${cursorPos.y}px`
      cursorDot.style.left = `${dotPos.x}px`
      cursorDot.style.top = `${dotPos.y}px`

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Outer circle */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ${
          isPointer ? 'w-16 h-16' : 'w-10 h-10'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-full h-full border-2 border-black rounded-full transition-all duration-300 ${
            isPointer ? 'bg-black/10' : 'bg-transparent'
          }`}
        />
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
