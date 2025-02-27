import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  item,
  inView,
  delay,
  viewportEnter,
  animationEnd,
  openModal,
}) => {
  const [threshold, setThreshold] = useState(0.15);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const height = ref.current?.clientHeight;
      const thresholdTemp = height
        ? Math.max(100 / height - 0.25, 0)
        : 0.15 - 0.25;
      setThreshold(thresholdTemp);
    };

    const observer = new ResizeObserver(handleResize);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current]);

  const animationProps = {
    initial: { opacity: 0, translateY: "25%" },
    animate: inView ? { opacity: 1, translateY: "0%" } : {},
    viewport: { once: true, amount: threshold },
    onViewportEnter: viewportEnter,
    transition: {
      duration: 0.25,
      delay: delay || 0,
    },
    onAnimationComplete: animationEnd,
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="w-full lg:w-[calc((100%/2)-20px)] 2xl:w-[calc((100%/3)-24px)] min-h-full cursor-pointer flex flex-col justify-center items-center gap-3.5 bg-app-400 rounded-lg px-10 py-12"
      onClick={openModal}
    >
      {/* Title and Date */}
      <div className="flex flex-col items-center gap-0.5">
        <h3 className="inline-block text-2xl font-bold">{item.name}</h3>
        <span className="text-base inline-block">{item.date}</span>
      </div>
      {/* Divider */}
      <div className="w-11/12 h-0.5 bg-foreground opacity-50"></div>
      {/* Description */}
      <span className="mb-1 text-base">{item.description}</span>
      {/* Languages */}
      <div className="flex justify-center items-center flex-wrap gap-2 mb-2.5 mt-3">
        {item.languages.map((language, index) => (
          <span key={index} className="px-1.5 py-1 bg-app-350 rounded-md">
            {language}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
