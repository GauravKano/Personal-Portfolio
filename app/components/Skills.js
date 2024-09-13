import React from "react";

const Skills = ({ skills, skillRef }) => {
  return (
    // Skills Section
    <section className="flex flex-col items-center gap-14 pt-56 pb-32 min-h-screen">
      {/* Skill Title */}
      <h1 className="text-4xl font-semibold" ref={skillRef}>
        Skills
      </h1>
      {/* Display Skills */}
      <div
        className="flex flex-wrap justify-center items-center gap-4"
        style={{ width: "80vw" }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.src;
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2 w-26 h-26 pt-4 pb-3 bg-app-400 rounded-lg "
            >
              {/* Skill Logo */}
              <Icon
                className="w-12 h-12 text-foreground"
                aria-label={`${skill.name} Logo`}
              />
              {/* Skill Name */}
              <span className="text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
