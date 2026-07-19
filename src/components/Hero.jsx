import { useCountdown } from "../hooks/useCountdown";

export default function Hero() {
  const { days, hours, mins, secs } = useCountdown();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center
        bg-[radial-gradient(ellipse_at_50%_20%,rgba(122,0,25,0.5),transparent_60%),linear-gradient(180deg,rgba(10,6,6,0.4),rgba(10,6,6,0.85)),radial-gradient(circle_at_50%_40%,#3a1418,#120909_75%)]"
    >
      <div className="text-gold text-[34px] mb-4 animate-floaty">♛</div>
      <div className="font-poppins tracking-[3px] uppercase text-xs text-beige opacity-80 mb-4">
        Countdown to August 22, 2026
      </div>
      <h1 className="text-[clamp(38px,7vw,74px)] text-white leading-[1.05] [text-shadow:0_0_40px_rgba(212,175,55,0.25)]">
        Jamaica Tyfany
        <br />
        <span className="text-gold-soft">Julongbayan</span>
      </h1>
      <div className="font-vibes text-[clamp(24px,4vw,38px)] text-gold-soft mt-2.5">
        Celebrating 18 Beautiful Years
      </div>
      <div className="flex gap-4 mt-11 flex-wrap justify-center">
        <div className="glass-card w-24 py-4.5 text-center">
          <div className="font-cinzel text-[34px] text-gold-soft">{days}</div>
          <div className="font-poppins text-[10px] tracking-[2px] uppercase opacity-70 mt-1">
            Days
          </div>
        </div>
        <div className="glass-card w-24 py-4.5 text-center">
          <div className="font-cinzel text-[34px] text-gold-soft">{hours}</div>
          <div className="font-poppins text-[10px] tracking-[2px] uppercase opacity-70 mt-1">
            Hours
          </div>
        </div>
        <div className="glass-card w-24 py-4.5 text-center">
          <div className="font-cinzel text-[34px] text-gold-soft">{mins}</div>
          <div className="font-poppins text-[10px] tracking-[2px] uppercase opacity-70 mt-1">
            Minutes
          </div>
        </div>
        <div className="glass-card w-24 py-4.5 text-center">
          <div className="font-cinzel text-[34px] text-gold-soft">{secs}</div>
          <div className="font-poppins text-[10px] tracking-[2px] uppercase opacity-70 mt-1">
            Seconds
          </div>
        </div>
      </div>
      <button
        className="gold-btn mt-[50px]"
        onClick={() =>
          document
            .getElementById("invitation")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        View Invitation
      </button>
    </section>
  );
}
