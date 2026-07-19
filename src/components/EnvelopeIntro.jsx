import { useEffect, useMemo, useState } from "react";

export default function EnvelopeIntro({ onOpened }) {
  const [opening, setOpening] = useState(false);
  const [cardMoving, setCardMoving] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Lock scrolling while envelope intro is active
  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [hidden]);

  // Generate particles only once
  const particles = useMemo(
    () =>
      [...Array(14)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${4 + Math.random() * 8}px`,
        duration: `${10 + Math.random() * 8}s`,
        delay: `${Math.random() * 6}s`,
      })),
    [],
  );

  function handleOpen() {
    if (opening) return;

    // Start opening
    setOpening(true);

    // Card starts moving sooner
    setTimeout(() => {
      setCardMoving(true);
    }, 700);

    // Envelope transition
    setTimeout(() => {
      setLaunching(true);
    }, 1800);

    // Reveal website
    setTimeout(() => {
      setHidden(true);

      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      onOpened?.();
    }, 2700);
  }

  return (
    <>
      {" "}
      <style>{`
        @keyframes floatParticle {
          0%{
            transform:
              translateY(25px)
              translateX(0px)
              scale(.7);
            opacity:0;
          }

          20%{
            opacity:.85;
          }

          50%{
            transform:
              translateY(-25px)
              translateX(12px)
              scale(1);
          }

          100%{
            transform:
              translateY(-90px)
              translateX(-12px)
              scale(.8);
            opacity:0;
          }
        }


        .floating-particle{
          position:absolute;

          border-radius:9999px;

          background:
          radial-gradient(circle,
          rgba(255,245,215,1) 0%,
          rgba(212,175,55,.85) 55%,
          rgba(212,175,55,0) 100%);

          animation:
          floatParticle
          linear
          infinite;
        }
      `}</style>
      <div
        className={`
        fixed

        inset-0

        z-[999]

        flex

        flex-col

        items-center

        justify-center

        overflow-hidden


        bg-[radial-gradient(circle_at_top,#3a0c15_0%,#18070a_45%,#090505_100%)]


        transition-opacity

        duration-[800ms]


        ${
          hidden
            ? "opacity-0 invisible pointer-events-none"
            : "opacity-100 visible"
        }
        `}
      >
        {/* Ambient Glow */}

        <div
          className="
          absolute

          w-[550px]

          h-[550px]

          rounded-full

          bg-gold/10

          blur-[150px]
          "
        />

        {/* Floating Particles */}

        <div
          className="
          absolute

          inset-0

          pointer-events-none

          overflow-hidden
          "
        >
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="floating-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDuration: particle.duration,
                animationDelay: particle.delay,
              }}
            />
          ))}

          <span className="absolute left-[18%] top-[20%] text-gold/30 text-xl animate-pulse">
            ✦
          </span>

          <span className="absolute right-[20%] top-[18%] text-gold/25 text-lg animate-pulse delay-300">
            ✧
          </span>

          <span className="absolute left-[25%] bottom-[18%] text-gold/30 text-lg animate-pulse delay-700">
            ✦
          </span>

          <span className="absolute right-[22%] bottom-[25%] text-gold/25 text-xl animate-pulse delay-1000">
            ✧
          </span>
        </div>

        {/* Envelope */}

        <div
          className={`
          relative

          w-[min(400px,88vw)]

          aspect-[1.55/1]

          [perspective:1800px]


          ${launching ? "animate-zoomAway" : ""}
          `}
        >
          {/* Envelope Base */}

          <div
            className="
            absolute

            inset-0

            rounded-2xl


            border

            border-[#d5bb7a]


            bg-gradient-to-br

            from-[#f9f3e7]

            via-[#efe3c7]

            to-[#dcc8a3]


            shadow-[0_35px_70px_rgba(0,0,0,.35)]

            overflow-hidden
            "
          >
            {/* Decorative Border */}

            <div
              className="
              absolute

              inset-3

              rounded-xl

              border

              border-gold/25
              "
            />

            {/* Invitation Card */}

            <div
              className={`
              absolute


              left-[7%]

              right-[7%]


              top-[18%]


              bottom-[8%]


              z-[5]


              rounded-xl


              bg-gradient-to-b

              from-[#fffefb]

              to-[#f7f2e7]


              border

              border-gold/25



              shadow-[0_20px_50px_rgba(0,0,0,.25)]


              flex

              flex-col

              justify-center

              items-center


              text-center



              transition-all


              duration-[1100ms]


              ease-[cubic-bezier(.18,.9,.28,1)]


              ${
                cardMoving
                  ? "-translate-y-[18%] scale-[1.02]"
                  : "translate-y-[30%]"
              }

              `}
            >
              <p
                className="
                uppercase

                tracking-[0.45rem]

                text-[10px]

                text-[#9b7a38]
                "
              >
                You're Invited
              </p>

              <div
                className="
                w-16

                h-px

                bg-gold/40

                my-4
                "
              />

              <h2
                className="
                font-cinzel

                text-[2.25rem]

                uppercase

                tracking-[0.42rem]

                text-[#73182b]
                "
              >
                Jamaica
              </h2>

              <p
                className="
                mt-2

                uppercase

                tracking-[0.4rem]

                text-[12px]

                text-[#65584b]
                "
              >
                XVIII
              </p>

              <div
                className="
                w-16

                h-px

                bg-gold/40

                my-4
                "
              />

              <p
                className="
                uppercase

                tracking-[0.32rem]

                text-[11px]

                text-[#65584b]
                "
              >
                Debut Celebration
              </p>
            </div>

            {/* Front Pocket */}

            <div
              className="
              absolute

              bottom-0

              left-0


              w-full


              h-[55%]


              z-10


              rounded-b-2xl


              bg-gradient-to-b

              from-[#f3e8cf]

              via-[#e6d4af]

              to-[#d8c096]


              border-t

              border-[#d5bb7a]


              shadow-[inset_0_10px_15px_rgba(255,255,255,.2)]
              "
            >
              <div
                className="
                absolute

                inset-x-5

                top-0

                h-px

                bg-white/30
                "
              />
            </div>
            {/* Flap */}

            <div
              className={`
              absolute

              top-0

              left-0


              w-full

              h-[60%]


              z-20


              rounded-t-2xl


              bg-gradient-to-br

              from-[#f5ebd5]

              to-[#dec89d]


              border-b

              border-gold/20


              shadow-[0_15px_30px_rgba(0,0,0,.18)]


              [clip-path:polygon(0_0,100%_0,50%_100%)]


              [transform-origin:top_center]


              transition-transform


              duration-[1000ms]


              ease-[cubic-bezier(.22,1,.36,1)]


              ${opening ? "[transform:rotateX(120deg)]" : ""}

              `}
            />

            {/* Wax Seal */}

            <button
              onClick={handleOpen}
              className={`
              absolute


              left-1/2


              top-[55%]


              -translate-x-1/2


              -translate-y-1/2



              z-30



              w-16


              h-16



              rounded-full



              border-2


              border-gold/60



              bg-[radial-gradient(circle_at_30%_30%,#a32842,#6b1223)]



              shadow-[0_10px_30px_rgba(0,0,0,.4)]



              flex


              items-center


              justify-center



              transition-all



              duration-400



              ease-[cubic-bezier(.22,1,.36,1)]



              hover:scale-105



              ${
                opening
                  ? "scale-75 opacity-0 translate-y-2 pointer-events-none"
                  : ""
              }

              `}
            >
              <span
                className="
                font-cinzel

                text-[28px]

                text-gold-soft
                "
              >
                J
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Text */}

        <div
          className={`
          mt-10


          text-center



          transition-all



          duration-500




          ${launching ? "opacity-0 translate-y-5" : "opacity-100"}

          `}
        >
          <h3
            className="
            font-vibes

            text-[34px]

            text-gold-soft
            "
          >
            An Evening to Remember
          </h3>

          <p
            className="
            mt-3

            uppercase

            tracking-[0.35rem]

            text-[11px]

            text-white/60
            "
          >
            Touch the wax seal to reveal your invitation
          </p>
        </div>
      </div>
    </>
  );
}
