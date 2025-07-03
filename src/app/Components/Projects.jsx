import React from "react";

const Projects = () => {
  return (
    <section
      id="project"
      className="w-11/12 max-w-6xl mx-auto flex flex-col items-center my-16 pt-16 px-4"
    >
      {/* Heading */}
      <h2 className="text-black font-extrabold text-3xl sm:text-4xl text-center mb-4">
        My Projects
      </h2>

      {/* Subtext */}
      <p className="text-center text-base sm:text-lg md:text-xl font-semibold max-w-3xl">
        VisionTech is a career-building platform offering hands-on training,
        internships, and placement support in tech, content, design, and
        healthcare.
      </p>

      {/* Project Showcase */}
      <div className="mt-10 w-full my-10 border border-[#EE09CB] border-x-4 sm:border-x-8 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/image/visiontech_website.png"
          alt="VisionTech Website"
          className="w-full object-cover"
        />
      </div>

      {/* Quote */}
      <p
        className="text-center text-[#42109F] font-bold text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mt-10"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
      >
        Start with clarity, stay consistent, and trust the process — that’s the
        formula I follow.
      </p>
    </section>
  );
};

export default Projects;
