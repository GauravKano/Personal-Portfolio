import React from "react";

const Intro = ({ height }) => {
  return (
    // Intro Section
    <section
      className="flex justify-center items-center"
      style={{
        minHeight: height,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-around gap-12 w-10/12">
        {/* Intro Text */}
        <div className="flex flex-col gap-2 items-center">
          <span className="text-5xl lg:text-7xl mb-3 font-medium">
            Greetings!
          </span>
          <span className="text-3xl lg:text-4xl font-medium">I am</span>
          <span className="text-3xl lg:text-4xl font-medium">
            Gaurav Kanoujia
          </span>
        </div>

        {/* Image of Me */}
        <img
          src="/imgs/me.jpg"
          alt="Picture of Gaurav"
          className="rounded-full max-w-80"
          style={{ width: "75vw" }}
        />
      </div>
    </section>
  );
};

export default Intro;
