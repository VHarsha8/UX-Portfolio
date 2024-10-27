// CustomCursor.jsx
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [cursorHeight, setCursorHeight] = useState(40); // Default cursor height

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Select all text elements once
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');

    textElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        setIsHoveringText(true);
        const fontSize = window.getComputedStyle(element).fontSize;
        setCursorHeight(parseFloat(fontSize) * 1.2); // Adjust cursor height based on font size
      });

      element.addEventListener('mouseleave', () => {
        setIsHoveringText(false);
        setCursorHeight(40); // Reset to default height for non-text areas
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      textElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => setIsHoveringText(true));
        element.removeEventListener('mouseleave', () => setIsHoveringText(false));
      });
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHoveringText ? '2px' : '40px',
        height: isHoveringText ? `${cursorHeight}px` : '40px',
        backgroundColor: '#007bff',
        borderRadius: isHoveringText ? '0' : '50%',
        position: 'fixed',
        transition: 'all 0.05s ease',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        boxShadow: isHoveringText
          ? '0 0 8px rgba(0, 123, 255, 0.6), 0 0 12px rgba(0, 123, 255, 0.4)' // Glow effect when on text
          : 'none',
      }}
    ></div>
  );
};

export default CustomCursor;
