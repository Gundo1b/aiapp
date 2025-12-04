import React, { useEffect, useRef } from 'react';

// Animated Gradient Waves (SVG)
export const GradientWaves = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[99%] z-0 pointer-events-none opacity-30 dark:opacity-10">
      <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#009DFF" className="animate-[pulse_4s_ease-in-out_infinite] opacity-50"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#64E1FF" className="animate-[pulse_6s_ease-in-out_infinite] opacity-30"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#a78bfa" className="animate-[pulse_5s_ease-in-out_infinite] opacity-30"></path>
      </svg>
    </div>
  );
};

// Fluid Morphing Blob
export const FluidBlob = ({ className = "", color1 = "#64E1FF", color2 = "#009DFF" }: { className?: string, color1?: string, color2?: string }) => {
  return (
    <div 
      className={`absolute rounded-full blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen filter animate-morph ${className}`}
      style={{
        background: `linear-gradient(to right, ${color1}, ${color2})`,
      }}
    />
  );
};

// Particle Canvas for tech effect
export const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let w = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let h = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    
    const particles: {x: number, y: number, r: number, dx: number, dy: number, a: number}[] = [];
    const count = 40; // Number of particles
    
    for(let i=0; i<count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.5 + 0.1
      });
    }
    
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0,0,w,h);
      
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        
        // Bounce off edges (or wrap)
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // Using brand colors for particles
        ctx.fillStyle = `rgba(100, 225, 255, ${p.a})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      if (!canvas.parentElement) return;
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40" />;
}