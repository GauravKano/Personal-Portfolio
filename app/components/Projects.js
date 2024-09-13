import React from "react";

const Projects = ({ projectRef, projects }) => {
  return (
    //  Projects Section
    <section className="flex flex-col justify-center items-center gap-14 pt-56">
      {/* Project Title */}
      <h1 className="text-4xl font-semibold" ref={projectRef}>
        Projects
      </h1>
      {/* Display Projects */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-around gap-10 text-center text-balance"
        style={{ width: "85vw" }}
      >
        {projects.map((item, index) =>
          item.url ? (
            // Display If URL exists
            <a
              key={index}
              href={item.url}
              target="_blank"
              aria-label={`${item.name} Link`}
            >
              <div className="flex flex-col justify-center items-center gap-3.5 bg-app-400 rounded-lg w-full h-full px-10 py-12">
                {/* Title and Date */}
                <div className="flex flex-col items-center gap-0.5">
                  <h3 className="inline-block text-2xl font-bold">
                    {item.name}
                  </h3>
                  <span className="text-base inline-block">{item.date}</span>
                </div>
                {/* Divider */}
                <div className="w-11/12 h-0.5 bg-foreground opacity-50"></div>
                {/* Description */}
                <span className="mb-1 text-base">{item.description}</span>
                {/* Languages */}
                <div className="flex justify-center items-center flex-wrap gap-2 mb-1 mt-3">
                  {item.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-1.5 py-1 bg-app-350 rounded-md"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ) : (
            // Display If No URL Exists
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3.5 bg-app-400 rounded-lg w-full h-full px-10 py-12"
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
              <div className="flex justify-center items-center flex-wrap gap-2 mb-1 mt-3">
                {item.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-1.5 py-1 bg-app-350 rounded-md"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
