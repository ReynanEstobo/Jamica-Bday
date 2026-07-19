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

  // Calculate real center position
  function updatePosition() {
    if (!cardRef.current || !containerRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;

    const gap = 20;

    const containerWidth = containerRef.current.offsetWidth;

    const centerOffset = containerWidth / 2 - cardWidth / 2;

    setOffset(centerOffset);
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
      }, 700);

      setTimeout(() => {
        setAnimate(true);
      }, 750);
    }

    if (active <= 0) {
      setTimeout(() => {
        setAnimate(false);

        setActive(start);
      }, 700);

      setTimeout(() => {
        setAnimate(true);
      }, 750);
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
              ? "transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
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



                transition-all

                duration-700



                ${
                  distance === 0
                    ? `
                  scale-110

                  opacity-100

                  border-gold

                  shadow-[0_25px_70px_rgba(212,175,55,.35)]

                  z-20
                  `
                    : distance === 1
                      ? `
                  scale-95

                  opacity-70

                  border-gold/40

                  z-10
                  `
                      : `
                  scale-90

                  opacity-35

                  blur-[1px]

                  border-gold/20
                  `
                }

                `}
              >
                <img
                  src={img}
                  alt="gallery"
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

                  from-black/40

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
          w-10 h-10

          sm:w-12 sm:h-12

          rounded-full

          border

          border-gold/40

          bg-black/20

          backdrop-blur-xl

          text-gold-soft

          text-xl
          "
        >
          ‹
        </button>

        <button
          onClick={next}
          className="
          w-10 h-10

          sm:w-12 sm:h-12

          rounded-full

          border

          border-gold/40

          bg-black/20

          backdrop-blur-xl

          text-gold-soft

          text-xl
          "
        >
          ›
        </button>
      </div>
    </section>
  );
}
