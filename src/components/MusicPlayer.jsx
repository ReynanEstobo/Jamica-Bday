import { useEffect, useRef, useState } from "react";
import { createAudioEngine } from "../utils/audio";

export default function MusicPlayer({ show, autoStart }) {
  const engineRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const startedRef = useRef(false);

  useEffect(() => {
    // Always max volume
    engineRef.current = createAudioEngine(1);

    // Force max volume
    engineRef.current.setVolume(1);

    return () => {
      engineRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    async function startMusic() {
      if (autoStart && !startedRef.current && engineRef.current) {
        startedRef.current = true;

        await engineRef.current.start();

        // Ensure volume stays max
        engineRef.current.setVolume(1);

        setPlaying(true);
      }
    }

    startMusic();
  }, [autoStart]);

  async function toggle() {
    if (!engineRef.current) return;

    engineRef.current.init();

    if (engineRef.current.getIsPlaying()) {
      engineRef.current.stop();

      setPlaying(false);
    } else {
      await engineRef.current.start();

      // Always max volume
      engineRef.current.setVolume(1);

      setPlaying(true);
    }
  }

  return (
    <div
      className={`
      fixed

      bottom-6

      right-6

      z-[150]

      flex

      items-center

      gap-2.5

      bg-white/[0.06]

      backdrop-blur-xl

      border

      border-gold/35

      rounded-full

      px-4

      py-2.5

      transition-all

      duration-500


      ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }
      `}
    >
      <button
        className="
        bg-transparent
        border-none
        text-gold-soft
        cursor-pointer
        w-[30px]
        h-[30px]
        flex
        items-center
        justify-center
        text-[15px]
        "
        title="Play / Pause"
        onClick={toggle}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <div className="flex gap-0.5 items-end h-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`
            w-0.5
            bg-gold

            ${playing ? "animate-eqBounce" : "h-1"}
            `}
            style={
              playing
                ? {
                    animationDelay: `${i * 0.2}s`,
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
