import { useReveal, revealClass } from '../hooks/useReveal'

function ItemCard({ index, roleLabel, message }) {
  const [ref, revealed] = useReveal()
  return (
    <div
      ref={ref}
      className={`glass-card text-center px-5 py-[26px]
        transition-transform duration-400 hover:-translate-y-2.5 hover:shadow-item
        ${revealClass(revealed)}`}
    >
      <div
        className="w-[78px] h-[78px] rounded-full mx-auto mb-4 border border-gold/35
          bg-[radial-gradient(circle_at_35%_30%,rgba(212,175,55,0.35),rgba(122,0,25,0.4))]
          flex items-center justify-center font-cinzel text-gold-soft"
      >
        {index}
      </div>
      <div className="font-poppins text-[10px] tracking-[2px] uppercase text-gold-soft opacity-80 mb-1.5">
        {roleLabel} {index}
      </div>
      <div className="font-cinzel text-lg text-white mb-2">Placeholder Name</div>
      <div className="text-base opacity-85">{message}</div>
    </div>
  )
}

/**
 * id: section id ("roses" | "candles" | "treasures")
 * eyebrow / titleMain / titleScript: heading text
 * roleLabel: label used per card ("Rose" | "Candle" | "Treasure")
 * messages: array of messages cycled across the 18 cards
 */
export default function ItemsSection({ id, eyebrow, titleMain, titleScript, roleLabel, messages }) {
  const [headerRef, headerIn] = useReveal()

  return (
    <section id={id}>
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="sec-title">
          {titleMain}
          <span className="font-vibes text-gold-soft text-[1.4em] block mt-1">{titleScript}</span>
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[26px] mt-5">
        {Array.from({ length: 18 }, (_, i) => i + 1).map((i) => (
          <ItemCard
            key={i}
            index={i}
            roleLabel={roleLabel}
            message={messages[(i - 1) % messages.length]}
          />
        ))}
      </div>
    </section>
  )
}
