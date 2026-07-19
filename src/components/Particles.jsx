import { useMemo } from 'react'

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => {
      const size = 2 + Math.random() * 4
      return {
        key: i,
        style: {
          width: size + 'px',
          height: size + 'px',
          left: Math.random() * 100 + 'vw',
          animationDuration: 10 + Math.random() * 14 + 's',
          animationDelay: Math.random() * 14 + 's',
        },
      }
    })
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.key}
          className="absolute -bottom-2.5 rounded-full opacity-70 bg-[radial-gradient(circle,theme(colors.gold-soft),transparent_70%)] animate-rise"
          style={p.style}
        />
      ))}
    </div>
  )
}
