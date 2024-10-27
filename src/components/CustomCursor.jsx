// CustomCursor.jsx
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [cursorHeight, setCursorHeight] = useState(40);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);

    if (isDesktop) {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
      textElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          setIsHoveringText(true);
          const fontSize = window.getComputedStyle(element).fontSize;
          setCursorHeight(parseFloat(fontSize) * 1.2);
        });
        element.addEventListener('mouseleave', () => {
          setIsHoveringText(false);
          setCursorHeight(40);
        });
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        textElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setIsHoveringText(true));
          element.removeEventListener('mouseleave', () => setIsHoveringText(false));
        });
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  // Don't render the cursor on non-desktop devices
  if (!isDesktop) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHoveringText ? '2px' : '33px',
        height: isHoveringText ? `${cursorHeight}px` : '33px',
        backgroundColor: '#007bff',
        borderRadius: isHoveringText ? '0' : '50%',
        position: 'fixed',
        transition: 'transform 0.03s ease', // Faster, smoother transition
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        boxShadow: isHoveringText
          ? '0 0 8px rgba(0, 123, 255, 0.6), 0 0 12px rgba(0, 123, 255, 0.4)'
          : 'none',
      }}
    ></div>
  );
};

export default CustomCursor;
