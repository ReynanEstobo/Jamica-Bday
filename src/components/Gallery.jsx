import { useEffect, useRef, useState } from 'react'
import { useReveal, revealClass } from '../hooks/useReveal'

const GAL_COUNT = 8

export default function Gallery() {
  const [headerRef, headerIn] = useReveal()
  const [index, setIndex] = useState(0)
  const frameRefs = useRef([])

  useEffect(() => {
    const target = frameRefs.current[index]
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [index])

  function prev() {
    setIndex((i) => (i - 1 + GAL_COUNT) % GAL_COUNT)
  }
  function next() {
    setIndex((i) => (i + 1) % GAL_COUNT)
  }

  return (
    <section id="gallery">
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">Memories</div>
        <h2 className="sec-title">
          Gallery<span className="font-vibes text-gold-soft text-[1.4em] block mt-1">of Moments</span>
        </h2>
      </div>
      <div className="flex items-center gap-5 overflow-hidden py-5">
        {Array.from({ length: GAL_COUNT }, (_, i) => (
          <div
            key={i}
            ref={(el) => (frameRefs.current[i] = el)}
            className={`flex-none w-[260px] h-[340px] rounded-2xl border
              bg-gradient-to-br from-crimson/40 to-[#140f0a]/90
              flex items-center justify-center font-cinzel text-gold-soft
              transition-all duration-500
              ${i === index ? 'opacity-100 scale-105 border-gold' : 'opacity-50 scale-[0.85] border-gold/35'}`}
          >
            Photo {i + 1}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-5 mt-5">
        <button
          className="w-11 h-11 rounded-full border border-gold/35 bg-white/[0.06] text-gold-soft cursor-pointer text-base transition-colors duration-300 hover:border-gold"
          onClick={prev}
        >
          ‹
        </button>
        <button
          className="w-11 h-11 rounded-full border border-gold/35 bg-white/[0.06] text-gold-soft cursor-pointer text-base transition-colors duration-300 hover:border-gold"
          onClick={next}
        >
          ›
        </button>
      </div>
    </section>
  )
}
