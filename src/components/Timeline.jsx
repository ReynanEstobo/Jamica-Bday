import { useReveal, revealClass } from '../hooks/useReveal'

const TIMELINE_DATA = [
  ['3:00 PM', 'Guest Arrival'],
  ['3:30 PM', 'Opening Prayer'],
  ['4:00 PM', 'Grand Entrance'],
  ['4:30 PM', '18 Roses Ceremony'],
  ['5:15 PM', '18 Candles Ceremony'],
  ['6:00 PM', 'Dinner'],
  ['7:00 PM', '18 Treasures Ceremony'],
  ['8:00 PM', 'Birthday Dance'],
  ['9:00 PM', 'Closing Message'],
]

function TimelineItem({ time, title }) {
  const [ref, revealed] = useReveal()
  return (
    <div
      ref={ref}
      className={`relative pb-[38px]
        before:content-[''] before:absolute before:-left-[34px] before:top-1
        before:w-3 before:h-3 before:rounded-full before:bg-gold before:shadow-[0_0_12px_rgba(212,175,55,0.7)]
        ${revealClass(revealed)}`}
    >
      <div className="font-poppins text-[11px] tracking-[2px] text-gold-soft uppercase">{time}</div>
      <div className="font-cinzel text-xl text-white mt-1">{title}</div>
    </div>
  )
}

export default function Timeline() {
  const [headerRef, headerIn] = useReveal()

  return (
    <section id="timeline">
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">Program</div>
        <h2 className="sec-title">
          Celebration<span className="font-vibes text-gold-soft text-[1.4em] block mt-1">Timeline</span>
        </h2>
      </div>
      <div
        className="relative mt-10 pl-[34px]
          before:content-[''] before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-px
          before:bg-gradient-to-b before:from-gold before:to-transparent"
      >
        {TIMELINE_DATA.map(([time, title]) => (
          <TimelineItem key={time + title} time={time} title={title} />
        ))}
      </div>
    </section>
  )
}
