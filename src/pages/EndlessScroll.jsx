import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const image1 = new URL('../assets/animoji.jpg', import.meta.url).href;
const image2 = new URL('../assets/animoji.jpg', import.meta.url).href;
const image3 = new URL('../assets/animoji.jpg', import.meta.url).href;

const EndlessScroll = () => {
  const scrollContainerRef = useRef();

  useEffect(() => {
    const images = scrollContainerRef.current.children;

    gsap.to(images, {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "none",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer} ref={scrollContainerRef}>
        {[image1, image2, image3, image1, image2, image3].map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Image ${index + 1}`}
            style={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100vw',
    height: '150px',
    position: 'relative',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover', // Ensures the image covers the 100x100 area without distortion
    marginRight: '10px',
  },
};

export default EndlessScroll;
