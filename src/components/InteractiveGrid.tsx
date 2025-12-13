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

      ctx.lineWidth = 2

      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      // Vertical lines - draw each segment separately
      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize
        
        for (let j = 0; j < rows; j++) {
          const y1 = j * gridSize
          const y2 = (j + 1) * gridSize
          
          // Calculate distance from mouse to midpoint of this segment
          const midY = (y1 + y2) / 2
          const dx = mousePos.current.x - x
          const dy = mousePos.current.y - midY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Change color based on proximity
          const maxDistance = 150
          const colorIntensity = distance < maxDistance ? (1 - distance / maxDistance) : 0
          const alpha = 0.05 + colorIntensity * 0.6
          ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`
          
          ctx.beginPath()
          ctx.moveTo(x, y1)
          ctx.lineTo(x, y2)
          ctx.stroke()
        }
      }

      // Horizontal lines - draw each segment separately
      for (let i = 0; i <= rows; i++) {
        const y = i * gridSize
        
        for (let j = 0; j < cols; j++) {
          const x1 = j * gridSize
          const x2 = (j + 1) * gridSize
          
          // Calculate distance from mouse to midpoint of this segment
          const midX = (x1 + x2) / 2
          const dx = mousePos.current.x - midX
          const dy = mousePos.current.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Change color based on proximity
          const maxDistance = 150
          const colorIntensity = distance < maxDistance ? (1 - distance / maxDistance) : 0
          const alpha = 0.05 + colorIntensity * 0.6
          ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`
          
          ctx.beginPath()
          ctx.moveTo(x1, y)
          ctx.lineTo(x2, y)
          ctx.stroke()
        }
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
