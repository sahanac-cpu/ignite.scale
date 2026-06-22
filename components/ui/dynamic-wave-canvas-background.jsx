"use client";
import React, { useEffect, useRef } from 'react';

const HeroWave = ({ opacity = 0.6 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width, height, imageData, data;
    const SCALE = 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width  = Math.floor(canvas.width  / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const fastSin = (x) => SIN_TABLE[Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023];
    const fastCos = (x) => COS_TABLE[Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023];

    let rafId;
    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width)  / height;
          const u_y = (2 * y - height) / height;

          let a = 0, d = 0;
          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave    = (fastSin(a) + fastCos(d)) * 0.5;
          // Subtler intensity so text stays readable
          const intensity = 0.18 + 0.28 * wave;
          const baseVal   = 0.08 + 0.12 * fastCos(u_x + u_y + time * 0.3);
          const warmAccent = 0.18 * fastSin(a * 1.5 + time * 0.2);
          const shimmer    = 0.12 * fastCos(d * 2 + time * 0.1);

          // Gold / amber palette: #C9A96E ≈ (0.79, 0.66, 0.43)
          // Boost red, moderate green, suppress blue
          const r = Math.max(0, Math.min(1, baseVal * 1.4 + warmAccent * 0.9 + shimmer * 0.4 + 0.06)) * intensity;
          const g = Math.max(0, Math.min(1, baseVal * 0.9 + warmAccent * 0.5 + shimmer * 0.2 + 0.02)) * intensity;
          const b = Math.max(0, Math.min(1, baseVal * 0.35 + shimmer * 0.1)) * intensity;

          const idx = (y * width + x) * 4;
          data[idx]     = r * 255;
          data[idx + 1] = g * 255;
          data[idx + 2] = b * 255;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default HeroWave;
