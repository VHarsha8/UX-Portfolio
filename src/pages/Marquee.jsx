import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://source.unsplash.com/random/200x200?sig=1",
  "https://source.unsplash.com/random/200x200?sig=2",
  "https://source.unsplash.com/random/200x200?sig=3",
  "https://source.unsplash.com/random/200x200?sig=4",
  "https://source.unsplash.com/random/200x200?sig=5",
  "https://source.unsplash.com/random/200x200?sig=6",
];

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, // Adjust duration for scroll speed
        }}
      >
        {/* Two sets of images to create seamless loop */}
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`marquee-${index}`}
            className="object-cover w-32 h-32"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
