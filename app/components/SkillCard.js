import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillCard = ({ item, delay, viewportEnter, animationComplete }) => {
  const Icon = item.src;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const animationProps = {
    initial: { opacity: 0, translateY: "25%" },
    animate: inView ? { opacity: 1, translateY: "0%" } : {},
    onViewportEnter: viewportEnter,
    transition: {
      duration: 0.25,
      delay: delay || 0,
    },
    onAnimationComplete: animationComplete,
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center gap-2 w-26 h-26 pt-4 pb-3 bg-app-400 rounded-lg"
      {...animationProps}
    >
      {/* Skill Logo */}
      <Icon
        className="w-12 h-12 text-foreground"
        aria-label={`${item.name} Logo`}
      />
      {/* Skill Name */}
      <span className="text-sm">{item.name}</span>
    </motion.div>
  );
};

export default SkillCard;
