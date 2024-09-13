import React, { useEffect, useState } from "react";

const About = ({ message, aboutRef, isMobile }) => {
  const [visible, setVisible] = useState(false);

  // Handle PopOut Animation only when About Section Scrolled To
  useEffect(() => {
    const handleAnimation = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(aboutRef.current); // Remove observer from further use
      }
    };

    // create observers
    const observer = new IntersectionObserver(handleAnimation, {
      threshold: isMobile ? 0.275 : 0.375,
    });

    // Add observer
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Remove observer on dismount
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [aboutRef.current]);

  return (
    // About Section
    <section className="flex justify-center items-center box-border pt-40 tall:pt-36">
      <div
        ref={aboutRef}
        className={`rounded-xl ${visible ? "animate-popOut" : "opacity-0"}`}
        style={{
          width: isMobile ? "90vw" : "80vw",
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
      </div>
    </section>
  );
};

export default About;
