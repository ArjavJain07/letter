"use client"

interface FloatingElementProps {
  delay?: number
}

export function FloatingElement({ delay = 0 }: FloatingElementProps) {
  return (
    <div
      className="absolute text-6xl opacity-20 pointer-events-none animate-float"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      ✨
    </div>
  )
}
