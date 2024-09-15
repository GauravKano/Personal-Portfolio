import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { animationEnd, calcDelay } from "../util/staggerAnimation";
import ProjectCard from "./ProjectCard";

const Projects = ({ projectRef, projects }) => {
  const currAnimation = useRef(0);
  const [delays, setDelays] = useState({});
  const [inView, setInView] = useState({});

  const onViewportEnter = (index) => {
    if (!inView[index]) {
      const delay = calcDelay(currAnimation, 0.1);
      setDelays((prev) => ({ ...prev, [index]: delay }));
      setInView((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    //  Projects Section
    <section className="flex flex-col justify-center items-center gap-14 pt-56">
      {/* Project Title */}
      <motion.h1
        className="text-4xl font-semibold"
        ref={projectRef}
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.25 }}
      >
        Projects
      </motion.h1>
      {/* Display Projects */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-around gap-10 text-center text-balance"
        style={{ width: "85vw" }}
      >
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              item={item}
              inView={inView[index]}
              delay={delays[index]}
              viewportEnter={() => {
                onViewportEnter(index);
              }}
              animationEnd={() => {
                animationEnd(currAnimation);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
