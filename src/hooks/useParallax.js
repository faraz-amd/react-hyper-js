import { useEffect, useRef } from 'react';

export function useParallax() {
  const layersRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    let ticking = false;
    let lastScrollY = 0;

    function update() {
      layersRef.current.forEach((layer) => {
        if (!layer) return;
        const speed = parseFloat(layer.dataset.speed) || 0.05;
        const y = lastScrollY * speed;
        layer.style.transform = `translate3d(0,${y}px,0)`;
      });
      ticking = false;
    }

    function onScroll() {
      lastScrollY = window.scrollY || window.pageYOffset;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
    update(); // Initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return layersRef;
}
