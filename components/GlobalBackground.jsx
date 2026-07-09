'use client'

export default function GlobalBackground() {
  return (
    <div className="global-bg" aria-hidden="true">
      <div className="gb-blob gb-1" />
      <div className="gb-blob gb-2" />
      <div className="gb-blob gb-3" />

      <style>{`
        .global-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
          background: var(--color-carbon);
        }
        .gb-blob {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
        }
        .gb-1 {
          width: 75vw; height: 75vw;
          background: radial-gradient(ellipse at center,
            rgba(90,170,105,0.22) 0%, rgba(55,120,65,0.10) 50%, transparent 72%);
          top: -20%; left: -10%;
          filter: blur(90px);
          animation: gbdrift1 32s ease-in-out infinite alternate;
        }
        .gb-2 {
          width: 60vw; height: 60vw;
          background: radial-gradient(ellipse at center,
            rgba(201,169,110,0.16) 0%, rgba(180,130,60,0.07) 50%, transparent 72%);
          top: 35%; right: -15%;
          filter: blur(100px);
          animation: gbdrift2 40s ease-in-out infinite alternate;
        }
        .gb-3 {
          width: 55vw; height: 55vw;
          background: radial-gradient(ellipse at center,
            rgba(148,36,28,0.14) 0%, transparent 68%);
          bottom: -15%; left: 15%;
          filter: blur(110px);
          animation: gbdrift3 36s ease-in-out infinite alternate;
        }
        @keyframes gbdrift1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(60px,50px) scale(1.1); }
        }
        @keyframes gbdrift2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-50px,65px) scale(0.92); }
        }
        @keyframes gbdrift3 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(35px,-45px) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gb-blob { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
