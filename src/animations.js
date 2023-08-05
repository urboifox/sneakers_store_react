export const routesAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.5,
    },
  },
};

export const popupAnimation = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "0",
    position: "fixed",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 150,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};
export const imageAnimationForward = {
  hidden: {
    opacity: 0,
    x: "100%", // Initial position based on prevImageIndex
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.1,
    },
  },
};
export const imageAnimationBackward = {
  hidden: {
    opacity: 0,
    x: "-100%", // Initial position based on prevImageIndex
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0,
    },
  },
};

// export default routesAnimation;
