// src/variants.js

export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};
