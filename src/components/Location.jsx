import { useReveal, revealClass } from '../hooks/useReveal'

export default function Location() {
  const [headerRef, headerIn] = useReveal()
  const [mapRef, mapIn] = useReveal()

  return (
    <section id="location">
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">Find Us</div>
        <h2 className="sec-title">
          Venue<span className="font-vibes text-gold-soft text-[1.4em] block mt-1">Dao Julongbayan Residence</span>
        </h2>
      </div>
      <div
        className={`relative aspect-[16/7] rounded-2xl overflow-hidden border border-gold/35
          flex flex-col items-center justify-center gap-2.5
          bg-[repeating-linear-gradient(45deg,rgba(212,175,55,0.06)_0_2px,transparent_2px_40px),linear-gradient(160deg,#241016,#120a0a)]
          ${revealClass(mapIn)}`}
      >
        <div className="text-4xl text-crimson [filter:drop-shadow(0_0_10px_rgba(212,175,55,0.5))]">📍</div>
        <div className="font-poppins text-[13px] tracking-wide opacity-80">Map preview placeholder</div>
        <button className="ghost-btn" onClick={() => window.open('https://maps.google.com', '_blank')}>
          Get Directions
        </button>
      </div>
    </section>
  )
}
