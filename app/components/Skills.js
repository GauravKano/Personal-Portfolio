import React, { useRef, useState } from "react";
import { animationEnd, calcDelay } from "../util/staggerAnimation";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = ({ skills, skillRef }) => {
  const currAnimation = useRef(0);
  const [delays, setDelays] = useState({});

  const onViewportEnter = (index) => {
    const delay = calcDelay(currAnimation, 0.05);
    setDelays((prev) => ({ ...prev, [index]: delay }));
  };

  return (
    // Skills Section
    <section className="flex flex-col items-center gap-14 pt-56 pb-32 min-h-screen">
      {/* Skill Title */}
      <motion.h1
        className="text-4xl font-semibold"
        ref={skillRef}
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.25 }}
      >
        Skills
      </motion.h1>
      {/* Display Skills */}
      <div
        className="flex flex-wrap justify-center items-center gap-4"
        style={{ width: "80vw" }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            item={skill}
            delay={delays[index]}
            viewportEnter={() => onViewportEnter(index)}
            animationComplete={() => {
              animationEnd(currAnimation);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
