import { useEffect, useRef } from 'react'

interface InteractiveGridProps {
  children: React.ReactNode
  className?: string
}

export default function InteractiveGrid({ children, className = '' }: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
    container.addEventListener('mousemove', handleMouseMove)

    // Animation
    const gridSize = 50
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.lineWidth = 1

      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize

        ctx.beginPath()
        for (let j = 0; j <= rows; j++) {
          const y = j * gridSize
          
          // Calculate distance from mouse to this point
          const dx = mousePos.current.x - x
          const dy = mousePos.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Calculate displacement based on proximity
          const maxDistance = 150
          const displacement = distance < maxDistance ? (1 - distance / maxDistance) * 25 : 0
          
          // Apply displacement perpendicular to line direction (horizontally for vertical lines)
          const offsetX = distance > 0 ? (dx / distance) * displacement : 0
          
          if (j === 0) {
            ctx.moveTo(x + offsetX, y)
          } else {
            ctx.lineTo(x + offsetX, y)
          }
        }
        ctx.stroke()
      }

      // Horizontal lines
      for (let i = 0; i <= rows; i++) {
        const y = i * gridSize

        ctx.beginPath()
        for (let j = 0; j <= cols; j++) {
          const x = j * gridSize
          
          // Calculate distance from mouse to this point
          const dx = mousePos.current.x - x
          const dy = mousePos.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Calculate displacement based on proximity
          const maxDistance = 150
          const displacement = distance < maxDistance ? (1 - distance / maxDistance) * 25 : 0
          
          // Apply displacement perpendicular to line direction (vertically for horizontal lines)
          const offsetY = distance > 0 ? (dy / distance) * displacement : 0
          
          if (j === 0) {
            ctx.moveTo(x, y + offsetY)
          } else {
            ctx.lineTo(x, y + offsetY)
          }
        }
        ctx.stroke()
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      container.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
