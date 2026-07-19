import { useReveal, revealClass } from "../hooks/useReveal";

export default function Invitation() {
  const [headerRef, headerIn] = useReveal();
  const [cardRef, cardIn] = useReveal();

  return (
    <section id="invitation">
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">The Invitation</div>
        <h2 className="sec-title">
          With Joyful Hearts
          <span className="font-vibes text-gold-soft text-[1.4em] block mt-1">
            We Invite You
          </span>
        </h2>
      </div>
      <div
        ref={cardRef}
        className={`glass-card relative overflow-hidden text-center px-[8%] py-[60px]
          before:content-['❧'] before:absolute before:top-5 before:left-6 before:text-gold before:text-[50px] before:opacity-35
          after:content-['❧'] after:absolute after:bottom-5 after:right-6 after:text-gold after:text-[50px] after:opacity-35 after:rotate-180
          ${revealClass(cardIn)}`}
      >
        <p className="text-xl leading-[1.7] max-w-[640px] mx-auto">
          Together with our families, we joyfully welcome you to witness the
          milestone that marks the passage from girlhood to womanhood.
        </p>
        <div className="font-cinzel text-[clamp(24px,4vw,34px)] text-white my-4">
          Jamaica Tyfany Julongbayan
        </div>
        <p className="opacity-80">Daughter of Mr. &amp; Mrs. Julongbayan</p>
        <div className="flex gap-10 justify-center flex-wrap mt-8">
          <div>
            <span className="font-poppins text-[11px] tracking-[2px] uppercase text-gold-soft">
              Date
            </span>
            <p className="font-garamond text-xl text-white mt-1.5">
              August 22, 2026
            </p>
          </div>
          <div>
            <span className="font-poppins text-[11px] tracking-[2px] uppercase text-gold-soft">
              Time
            </span>
            <p className="font-garamond text-xl text-white mt-1.5">3:00 PM</p>
          </div>
          <div>
            <span className="font-poppins text-[11px] tracking-[2px] uppercase text-gold-soft">
              Venue
            </span>
            <p className="font-garamond text-xl text-white mt-1.5">
              Dao Julongbayan Residence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
