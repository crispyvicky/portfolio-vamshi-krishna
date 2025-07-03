"use client"; // if using Next.js App Router

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-11/12 max-w-6xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
    >
      {/* Left Side: Image with animation and hover effect */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="/image/image_2.png" // replace with actual person photo path
          alt="Vinay Teja"
          className="w-full max-w-[400px] rounded-3xl  hover:scale-105 transition-transform duration-300 object-cover"
        />
      </motion.div>

      {/* Right Side: Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center text-center lg:text-left"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
          VisionTech was built with a clear purpose to transform how we learn,
          grow, and lead in a world defined by constant change. It stands as a
          space where innovation shapes education, and knowledge evolves into
          real-world impact.
        </p>
        <p className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
          Through a powerful blend of technology, mentorship, and human
          connection, VisionTech cultivates future-ready minds equipped with
          clarity, confidence, and creativity. This journey reflects a deeper
          commitment to empower individuals to rise with purpose and lead with
          vision.
        </p>
        <p
          className="text-xl font-bold text-[#42109F] mt-8"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Learning becomes power when it’s driven by vision and lived with
          purpose.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
