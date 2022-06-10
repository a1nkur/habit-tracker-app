export const backdropAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transitiion: {
      type: "tween",
      duration: 1,
    },
  },
};

export const ModalSlideAnimation = {
  hidden: { opacity: 0, x: 5000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98],
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    x: 5000,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98],
      type: "tween",
    },
  },
};
