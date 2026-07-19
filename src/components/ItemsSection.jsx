import { useReveal, revealClass } from "../hooks/useReveal";

function ItemCard({ index, roleLabel, message }) {
  const [ref, revealed] = useReveal();

  return (
    <div
      ref={ref}
      className={`
        glass-card

        text-center

        px-4

        py-5

        sm:px-5

        sm:py-6


        transition-opacity

        duration-500


        ${revealClass(revealed)}
      `}
    >
      {/* Number Circle */}

      <div
        className="
          w-14

          h-14


          sm:w-[70px]

          sm:h-[70px]


          rounded-full


          mx-auto


          mb-3


          sm:mb-4


          border

          border-gold/35


          bg-[radial-gradient(circle_at_35%_30%,rgba(212,175,55,0.35),rgba(122,0,25,0.4))]


          flex

          items-center

          justify-center


          font-cinzel


          text-lg


          sm:text-xl


          text-gold-soft
        "
      >
        {index}
      </div>

      {/* Label */}

      <div
        className="
          font-poppins


          text-[9px]


          sm:text-[10px]


          tracking-[1.5px]


          sm:tracking-[2px]


          uppercase


          text-gold-soft


          opacity-80


          mb-1
        "
      >
        {roleLabel} {index}
      </div>

      {/* Name */}

      <div
        className="
          font-cinzel


          text-base


          sm:text-lg


          text-white


          mb-2
        "
      >
        Placeholder Name
      </div>

      {/* Message */}

      <div
        className="
          text-sm


          sm:text-base


          leading-relaxed


          opacity-85
        "
      >
        {message}
      </div>
    </div>
  );
}

/**
 * id: section id
 * eyebrow / titleMain / titleScript: heading text
 * roleLabel: card label
 * messages: message list
 */

export default function ItemsSection({
  id,
  eyebrow,
  titleMain,
  titleScript,
  roleLabel,
  messages,
}) {
  const [headerRef, headerIn] = useReveal();

  return (
    <section
      id={id}
      className="
      w-full

      py-12

      sm:py-16

      md:py-20
      "
    >
      {/* Header */}

      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">{eyebrow}</div>

        <h2
          className="
          sec-title

          text-center
          "
        >
          {titleMain}

          <span
            className="
              font-vibes

              text-gold-soft


              text-[1.15em]


              sm:text-[1.4em]


              block


              mt-1
            "
          >
            {titleScript}
          </span>
        </h2>
      </div>

      {/* Cards */}

      <div
        className="
          grid


          grid-cols-1


          min-[400px]:grid-cols-2


          lg:grid-cols-3


          xl:grid-cols-4



          gap-4


          sm:gap-5


          md:gap-6



          mt-8


          max-w-6xl


          mx-auto
        "
      >
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
  );
}
