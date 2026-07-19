import { useEffect, useRef, useState } from "react";
import { useReveal, revealClass } from "../hooks/useReveal";

const IMAGES = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
];

const LOOP_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES];

export default function Gallery() {
  const [headerRef, headerIn] = useReveal();

  const start = IMAGES.length;

  const [active, setActive] = useState(start);

  const [animate, setAnimate] = useState(true);

  const [offset, setOffset] = useState(0);

  const cardRef = useRef(null);

  const containerRef = useRef(null);

  function next() {
    setActive((prev) => prev + 1);
  }

  function prev() {
    setActive((prev) => prev - 1);
  }

  function updatePosition() {
    if (!cardRef.current || !containerRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;

    const containerWidth = containerRef.current.offsetWidth;

    setOffset(containerWidth / 2 - cardWidth / 2);
  }

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  useEffect(() => {
    if (active >= IMAGES.length * 2) {
      setTimeout(() => {
        setAnimate(false);

        setActive(start);
      }, 900);

      setTimeout(() => {
        setAnimate(true);
      }, 950);
    }

    if (active <= 0) {
      setTimeout(() => {
        setAnimate(false);

        setActive(start);
      }, 900);

      setTimeout(() => {
        setAnimate(true);
      }, 950);
    }
  }, [active]);

  return (
    <section
      id="gallery"
      className="
      w-full

      overflow-hidden

      py-12

      sm:py-16
      "
    >
      {/* HEADER */}

      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">Memories</div>

        <h2
          className="
          sec-title

          text-center
          "
        >
          Gallery
          <span
            className="
            font-vibes

            text-gold-soft

            text-[1.2em]

            sm:text-[1.35em]

            block

            mt-1
            "
          >
            of Moments
          </span>
        </h2>
      </div>

      {/* CAROUSEL */}

      <div
        ref={containerRef}
        className="
        relative

        w-full

        overflow-hidden

        py-8

        sm:py-10
        "
      >
        <div
          className={`
          flex

          items-center

          justify-start

          gap-5


          ${
            animate
              ? "transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]"
              : ""
          }

          `}
          style={{
            transform: `
            translateX(
              ${offset - active * (cardRef.current?.offsetWidth + 20 || 0)}px
            )
            `,
          }}
        >
          {LOOP_IMAGES.map((img, index) => {
            const distance = Math.abs(index - active);

            return (
              <div
                key={index}
                ref={index === active ? cardRef : null}
                onClick={() => setActive(index)}
                className={`
                relative

                flex-none


                w-[180px]

                h-[250px]


                sm:w-[260px]

                sm:h-[350px]



                rounded-3xl


                overflow-hidden


                border


                cursor-pointer



                transition-all

                duration-[900ms]

                ease-[cubic-bezier(.22,1,.36,1)]



                ${
                  distance === 0
                    ? `
                  scale-105

                  opacity-100


                  border-gold/80


                  shadow-[0_20px_50px_rgba(212,175,55,.25)]


                  z-20
                  `
                    : distance === 1
                      ? `
                  scale-95

                  opacity-75


                  border-gold/40


                  z-10
                  `
                      : distance === 2
                        ? `
                  scale-90

                  opacity-50


                  border-gold/20


                  z-0
                  `
                        : `
                  scale-85

                  opacity-30


                  blur-[2px]


                  border-transparent


                  z-0
                  `
                }

                `}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="
                  w-full

                  h-full

                  object-cover

                  object-center
                  "
                />

                <div
                  className="
                  absolute

                  inset-0


                  bg-gradient-to-t

                  from-black/30

                  via-transparent

                  to-transparent
                  "
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* BUTTONS */}

      <div
        className="
        flex

        justify-center

        gap-5

        mt-4
        "
      >
        <button
          onClick={prev}
          className="
          w-10

          h-10


          sm:w-12

          sm:h-12


          rounded-full


          border

          border-gold/40


          bg-black/20


          backdrop-blur-xl


          text-gold-soft


          text-xl

          transition-all

          duration-300


          hover:border-gold
          "
        >
          ‹
        </button>

        <button
          onClick={next}
          className="
          w-10

          h-10


          sm:w-12

          sm:h-12


          rounded-full


          border

          border-gold/40


          bg-black/20


          backdrop-blur-xl


          text-gold-soft


          text-xl

          transition-all

          duration-300


          hover:border-gold
          "
        >
          ›
        </button>
      </div>
    </section>
  );
}
