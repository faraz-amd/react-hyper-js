import React from 'react';
import { useParallax } from '../hooks/useParallax';

function Parallax() {
  const layersRef = useParallax();

  return (
    <div className="parallax" aria-hidden="true">
      <div
        ref={(el) => (layersRef.current[0] = el)}
        className="parallax-layer layer-1"
        data-speed="0.18"
      />
      <div
        ref={(el) => (layersRef.current[1] = el)}
        className="parallax-layer layer-2"
        data-speed="0.08"
      />
      <div
        ref={(el) => (layersRef.current[2] = el)}
        className="parallax-layer layer-3"
        data-speed="0.03"
      />
    </div>
  );
}

export default Parallax;
