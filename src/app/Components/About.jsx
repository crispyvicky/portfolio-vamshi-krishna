"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const About = () => {
  const ratings = [
    {
      name: "AmbitionBox",
      link: "https://www.ambitionbox.com/reviews/visiontech-academy-reviews",
      rating: 4.6,
      logo: "/logos/ambitionboxlogo.jpg",
    },
    {
      name: "Crunchbase",
      link: "https://www.crunchbase.com/organization/visiontech-academy",
      rating: 4.0,
      logo: "/logos/crunchbaselogo.jpg",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.3 && rating % 1 <= 0.7;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-lg" />);
    }
    if (half) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-lg" />);
    }
    for (let i = 0; i < empty; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-lg" />);
    }

    return stars;
  };

  return (
    <section
      id="about"
      className="w-11/12 max-w-6xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
    >
      {/* Left Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="/image/image_2.png"
          alt="Vinay Teja"
          className="w-full max-w-[400px] rounded-3xl hover:scale-105 transition-transform duration-300 object-cover"
        />
      </motion.div>

      {/* Right Side: Text + Ratings */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center text-center lg:text-left"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-sm sm:text-base lg:text-lg font-semibold mt-4 text-gray-700">
          VisionTech was built with a clear purpose to transform how we learn,
          grow, and lead in a world defined by constant change. It stands as a
          space where innovation shapes education, and knowledge evolves into
          real-world impact.
        </p>

        <p className="text-sm sm:text-base lg:text-lg font-semibold mt-4 text-gray-700">
          Through a powerful blend of technology, mentorship, and human
          connection, VisionTech cultivates future-ready minds equipped with
          clarity, confidence, and creativity. This journey reflects a deeper
          commitment to empower individuals to rise with purpose and lead with
          vision.
        </p>

        {/* Stats Text */}
        <p className="text-center text-base font-semibold text-gray-700 mt-6">
          <span className="text-[#42109F] font-bold">VisionTech</span> is recognized as one of the
          <span className="text-[#42109F] font-bold"> fastest-growing EdTech companies</span> in India.
        </p>
        <p className="text-center text-base font-semibold text-gray-700">
          It is currently growing <span className="text-[#A20895] font-bold">46% faster</span> than most startups in the industry.
        </p>

        {/* Ratings (Side by Side Cards) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
          {ratings.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white p-4 w-[300px] rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#42109F] transition-all"
            >
              {/* Left 1/3: Logo */}
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Right 2/3: Name & Rating */}
              <div className="w-2/3 pl-4">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  {platform.name}
                </p>
                <div className="flex gap-1">{renderStars(platform.rating)}</div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
