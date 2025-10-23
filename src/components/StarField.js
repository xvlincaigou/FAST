import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars = [];
    const numStars = 200;
    const shootingStars = [];
    const maxShootingStars = 3;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.8 ? '#FFD700' : Math.random() > 0.6 ? '#00D4FF' : '#FFFFFF'
      });
    }

    // Create shooting star
    const createShootingStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 10 + 15,
        angle: Math.random() * Math.PI / 4 + Math.PI / 6,
        opacity: 1,
        life: 1
      };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();

        // Add glow effect for brighter stars
        if (star.radius > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.opacity * 0.2;
          ctx.fill();
        }
      });

      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const shootingStar = shootingStars[i];
        
        // Update position
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.life -= 0.02;
        shootingStar.opacity = shootingStar.life;

        // Draw shooting star
        const gradient = ctx.createLinearGradient(
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length,
          shootingStar.x,
          shootingStar.y
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`);

        ctx.beginPath();
        ctx.moveTo(
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        );
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Remove dead shooting stars
        if (shootingStar.life <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStars.splice(i, 1);
        }
      }

      // Add new shooting stars randomly
      if (Math.random() < 0.005 && shootingStars.length < maxShootingStars) {
        shootingStars.push(createShootingStar());
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star-field-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarField;