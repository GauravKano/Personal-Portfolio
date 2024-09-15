import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const About = ({ message, aboutRef, isMobile }) => {
  const inView = useInView(aboutRef, {
    once: true,
    amount: 0.2,
  });

  return (
    // About Section
    <section className="flex justify-center items-center box-border pt-40 tall:pt-36">
      <div
        ref={aboutRef}
        style={{
          width: isMobile ? "90vw" : "80vw",
        }}
      >
        <motion.div
          className="w-full rounded-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.25,
          }}
        >
          {/* Mac Buttons */}
          <div className=" flex flex-row justify-start items-center gap-2 bg-app-300 rounded-t-xl px-3 py-2 ">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-300"></div>
            <div className="w-3 h-3 rounded-full bg-green-300"></div>
          </div>
          <div className="flex flex-col gap-5 bg-app-400 px-10p lg:px-12p pt-11 pb-16 rounded-b-xl">
            {/* About Title */}
            <h2 className="text-center text-3xl font-bold mb-2.5 text-balance">
              About Me
            </h2>
            {/* About Message */}
            {message.map((item, index) => (
              <p key={index} className="text-base sm:text-lg font-normal">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
