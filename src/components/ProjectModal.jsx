import React from "react";
import { FaXmark, FaGithub, FaLink } from "react-icons/fa6";

const ProjectModal = ({ project, closeModal }) => {
  return (
    <div
      className="z-10 bg-black bg-opacity-85 fixed w-full h-dvh overflow-y-auto top-0 flex justify-center items-center px-2 py-3"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="m-auto max-w-[800px] w-[97vw] md:w-[90vw] lg:w-[80vw] bg-app-350 rounded-3xl relative px-14 py-12 md:px-20 md:py-16 flex flex-col gap-6">
        <button
          className="absolute top-10 right-10 px-2.5 py-2 hover:bg-app-375 hover:bg-opacity-50 rounded-full"
          onClick={closeModal}
        >
          <FaXmark className="text-2xl text-white" />
        </button>

        <div className="flex flex-col gap-1 items-start">
          <h4 className="text-2xl font-bold">{project.name}</h4>
          <span className="text-base">{project.date}</span>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {project.languages.map((language, index) => (
              <span key={index} className="bg-app-375 px-1.5 py-1 rounded-md">
                {language}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-white"></div>

        <span className="text-base text-wrap" style={{ lineHeight: "30px" }}>
          {project.description}
        </span>

        <div className="flex justify-center items-center flex-wrap gap-16 mx-6 mb-3 mt-6">
          {project.githubLink && (
            <a
              className="px-2 py-1.5 hover:bg-app-375 hover:bg-opacity-50 rounded-md"
              href={project.githubLink}
              target="_blank"
              title="Github Link"
            >
              <FaGithub className="text-2xl " />
            </a>
          )}

          {project.deployLink && (
            <a
              className="px-2 py-1.5 hover:bg-app-375 hover:bg-opacity-50 rounded-md"
              href={project.deployLink}
              target="_blank"
              title="Website Link"
            >
              <FaLink className="text-2xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
