"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const SERVICES_ARRAY = [
    {
      name: "Sustainability & Ethical Leadership",
      image: "/image/service_1.png",
      des: "Championing sustainability and ethics as core drivers of business success and team culture.",
      id: 1,
    },
    {
      name: "AI & Automation",
      image: "/image/service_2.png",
      des: "I design AI-powered solutions and automation systems that simplify processes and amplify impact.",
      id: 2,
    },
    {
      name: "Digital Product Creation",
      image: "/image/service_3.png",
      des: "Crafting impactful digital products through seamless design and technology integration.",
      id: 3,
    },
    {
      name: "Web & App Development",
      image: "/image/service_4.png",
      des: "Develops responsive websites and scalable apps with seamless performance and user-first design.",
      id: 4,
    },
  ];

  return (
    <section
      id="services"
      className="w-11/12 max-w-6xl mx-auto flex flex-col items-center py-16 px-4"
    >
      <h2 className="text-[#000] font-extrabold text-3xl sm:text-4xl mb-2">
        Services
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mb-10 text-center">
        What I Do — And What I Can Help You Do
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {SERVICES_ARRAY.map((service) => (
          <motion.div
            key={service.id}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onMouseEnter={() => setHoverIndex(service.id)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Image with smooth scale */}
            <motion.img
              src={service.image}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: hoverIndex === service.id ? 1.15 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Overlay content */}
            <div className="absolute bottom-4 w-full flex flex-col items-center z-10">
              {/* Button */}
              <motion.button
                className="bg-white/90 backdrop-blur-sm w-11/12 h-12 rounded-xl text-sm font-bold text-gray-900 shadow-md"
                animate={{
                  y: hoverIndex === service.id ? -30 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {service.name}
              </motion.button>

              {/* Description */}
              <AnimatePresence>
                {hoverIndex === service.id && (
                  <motion.p
                    key="description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-white text-center text-xs sm:text-sm mt-2 w-11/12"
                  >
                    {service.des}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
