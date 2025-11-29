"use client"

export function AnimatedHeart() {
  return (
    <div className="flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="animate-heart-beat">
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M100,170 C30,130 10,100 10,75 C10,55 25,40 45,40 C60,40 75,50 100,70 C125,50 140,40 155,40 C175,40 190,55 190,75 C190,100 170,130 100,170 Z"
          fill="url(#heartGradient)"
          filter="url(#glow)"
          style={{
            transition: "all 0.3s ease",
          }}
        />
      </svg>
    </div>
  )
}
