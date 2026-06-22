'use client'

/* Mercury Flow atmospheric mesh — a code-only stand-in for the organic 3D
   renders that carry Monopo's dark immersive frames. Slow-drifting blurred
   blobs in the brand's only chromatic moment: deep green → amber → copper →
   oxblood. Pure transform/opacity animation, screen-blended over ink black,
   pointer-events none. This is the ONLY place color enters the system. */
export default function OrganicMesh({ intensity = 1 }) {
  return (
    <div className="omesh" aria-hidden="true" style={{ opacity: intensity }}>
      <span className="omesh-blob omesh-1" />
      <span className="omesh-blob omesh-2" />
      <span className="omesh-blob omesh-3" />
      <span className="omesh-blob omesh-4" />
      {/* slow conic sheen for liquid depth */}
      <span className="omesh-sheen" />
      {/* grain to break the digital flatness of the gradient */}
      <span className="omesh-grain" />

      <style>{`
        .omesh {
          position: absolute; inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .omesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          mix-blend-mode: screen;
          will-change: transform;
        }
        /* deep forest green — top right */
        .omesh-1 {
          width: 60vw; height: 60vw;
          top: -18%; right: -8%;
          background: radial-gradient(circle at 40% 40%,
            rgba(64, 160, 92, 0.55) 0%,
            rgba(34, 92, 56, 0.30) 42%,
            transparent 70%);
          animation: omesh-drift-a 26s cubic-bezier(0.45,0,0.55,1) infinite;
        }
        /* amber / gold — center-low */
        .omesh-2 {
          width: 52vw; height: 52vw;
          bottom: -16%; left: 16%;
          background: radial-gradient(circle at 50% 50%,
            rgba(255, 172, 46, 0.42) 0%,
            rgba(210, 130, 30, 0.22) 44%,
            transparent 70%);
          animation: omesh-drift-b 32s cubic-bezier(0.45,0,0.55,1) infinite;
        }
        /* warm copper — left */
        .omesh-3 {
          width: 46vw; height: 46vw;
          top: 30%; left: -14%;
          background: radial-gradient(circle at 50% 50%,
            rgba(196, 96, 52, 0.40) 0%,
            rgba(150, 64, 36, 0.20) 46%,
            transparent 70%);
          animation: omesh-drift-c 29s cubic-bezier(0.45,0,0.55,1) infinite;
        }
        /* deep oxblood — bottom right */
        .omesh-4 {
          width: 44vw; height: 44vw;
          bottom: -12%; right: 6%;
          background: radial-gradient(circle at 50% 50%,
            rgba(165, 45, 37, 0.46) 0%,
            rgba(110, 28, 24, 0.22) 46%,
            transparent 70%);
          animation: omesh-drift-a 34s cubic-bezier(0.45,0,0.55,1) infinite reverse;
        }
        .omesh-sheen {
          position: absolute; inset: -30%;
          background: conic-gradient(from 0deg at 55% 45%,
            rgba(64,160,92,0.10),
            rgba(255,172,46,0.12),
            rgba(165,45,37,0.10),
            rgba(196,96,52,0.08),
            rgba(64,160,92,0.10));
          filter: blur(80px);
          mix-blend-mode: screen;
          opacity: 0.7;
          will-change: transform;
          animation: omesh-spin 60s linear infinite;
        }
        .omesh-grain {
          position: absolute; inset: 0;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        /* darken the edges so the frame stays cinematic, not a soft wash */
        .omesh::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 80% at 50% 45%,
            transparent 30%, rgba(0,0,0,0.55) 100%);
        }

        @keyframes omesh-drift-a {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50%      { transform: translate3d(-6vw, 5vh, 0) scale(1.15); }
        }
        @keyframes omesh-drift-b {
          0%, 100% { transform: translate3d(0,0,0) scale(1.1); }
          50%      { transform: translate3d(7vw, -4vh, 0) scale(0.92); }
        }
        @keyframes omesh-drift-c {
          0%, 100% { transform: translate3d(0,0,0) scale(0.95); }
          50%      { transform: translate3d(5vw, 6vh, 0) scale(1.18); }
        }
        @keyframes omesh-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .omesh-blob, .omesh-sheen { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
