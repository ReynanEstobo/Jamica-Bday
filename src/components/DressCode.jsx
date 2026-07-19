import { useReveal, revealClass } from '../hooks/useReveal'

const SWATCHES = [
  ['#D4AF37', 'Gold'],
  ['#7A0019', 'Crimson Red'],
  ['#121212', 'Matte Black'],
  ['#ffffff', 'White'],
]

export default function DressCode() {
  const [headerRef, headerIn] = useReveal()
  const [cardRef, cardIn] = useReveal()

  return (
    <section id="dresscode">
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">Attire</div>
        <h2 className="sec-title">
          Dress Code<span className="font-vibes text-gold-soft text-[1.4em] block mt-1">Regal Elegance</span>
        </h2>
      </div>
      <div className={`glass-card text-center p-10 ${revealClass(cardIn)}`}>
        <div className="flex gap-7 justify-center my-[34px] flex-wrap">
          {SWATCHES.map(([color, label]) => (
            <div className="text-center" key={label}>
              <div
                className="w-[60px] h-[60px] rounded-full mx-auto mb-2.5 border-2 border-white/15 shadow-[0_6px_20px_rgba(0,0,0,0.4)]"
                style={{ background: color }}
              />
              <div className="font-poppins text-[11px] tracking-wide uppercase opacity-80">{label}</div>
            </div>
          ))}
        </div>
        <p className="opacity-85 text-lg max-w-[520px] mx-auto">
          Guests are kindly invited to dress in formal attire, gowns and suits are encouraged,
          in the palette above. Let&apos;s make the evening shimmer together.
        </p>
      </div>
    </section>
  )
}
