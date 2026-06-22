"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate    = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale     = useTransform(scrollYProgress, [0, 1], isMobile ? [0.8, 1] : [1.1, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      ref={containerRef}
      style={{
        height: isMobile ? '100svh' : '130svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          perspective: '1200px',
        }}
      >
        {titleComponent && (
          <Header translate={translate} titleComponent={titleComponent} />
        )}
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => (
  <motion.div style={{ translateY: translate }} className="shell">
    {titleComponent}
  </motion.div>
);

export const Card = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      transformOrigin: 'top center',
      boxShadow: '0 40px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(201,169,110,0.12)',
    }}
    className="scroll-card"
  >
    {children}
    <style>{`
      .scroll-card {
        max-width: 1320px;
        margin: clamp(24px,4vh,48px) auto 0;
        width: calc(100% - clamp(32px,6vw,96px));
        height: clamp(340px,50vh,640px);
        overflow: hidden;
        border-radius: 0;
        border: 1px solid rgba(201,169,110,0.14);
      }
    `}</style>
  </motion.div>
);
