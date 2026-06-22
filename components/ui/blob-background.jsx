'use client'

export default function BlobBackground() {
  return (
    <div className="gscene" aria-hidden="true">
      <div className="blob b-green" />
      <div className="blob b-amber" />
      <div className="blob b-red"   />
      <div className="blob b-bronze"/>

      <style>{`
        .gscene {
          position: absolute; inset: 0;
          overflow: hidden; pointer-events: none;
        }
        .blob {
          position: absolute; border-radius: 50%;
          will-change: transform;
        }
        .b-green {
          width: 72%; height: 65%;
          background: radial-gradient(ellipse at center,
            rgba(90,170,105,0.95) 0%, rgba(55,120,65,0.40) 55%, transparent 75%);
          top: -8%; left: -12%;
          filter: blur(56px);
          animation: bd1 26s ease-in-out infinite alternate;
        }
        .b-amber {
          width: 58%; height: 68%;
          background: radial-gradient(ellipse at center,
            rgba(255,162,36,0.92) 0%, rgba(210,130,20,0.38) 55%, transparent 75%);
          top: 18%; left: 32%;
          filter: blur(52px);
          animation: bd2 21s ease-in-out infinite alternate;
        }
        .b-red {
          width: 65%; height: 58%;
          background: radial-gradient(ellipse at center,
            rgba(148,36,28,0.96) 0%, rgba(110,28,22,0.38) 55%, transparent 75%);
          top: 28%; right: -8%;
          filter: blur(60px);
          animation: bd3 30s ease-in-out infinite alternate;
        }
        .b-bronze {
          width: 38%; height: 42%;
          background: radial-gradient(ellipse at center,
            rgba(185,88,32,0.80) 0%, transparent 72%);
          bottom: 5%; left: 22%;
          filter: blur(72px);
          animation: bd4 19s ease-in-out infinite alternate;
        }
        @keyframes bd1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(55px,38px) scale(1.1); }
        }
        @keyframes bd2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-38px,50px) scale(0.94); }
        }
        @keyframes bd3 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-44px,-30px) scale(1.06); }
        }
        @keyframes bd4 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(28px,-22px) scale(1.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
