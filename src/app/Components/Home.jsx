"use client";

import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const SOCIAL_LINKS = [
    {
      name: "twitter",
      link: "https://x.com/VamshiKris8918?t=0i652qsfotBdyjEg83ZnCQ&s=08",
      icon: <SiX />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/vamshikrish013?igsh=dDAyNjNiZ21oNjg3",
      icon: <FaInstagram />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/vamshi-krishna-edla-2334a8221/",
      icon: <FaLinkedin />,
    },
    {
      name: "telegram",
      link: "https://web.telegram.org/a/#-1002630400957",
      icon: <FaTelegram />,
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UCXqEQUykoLtWECsUzY2SL9Q",
      icon: <FaYoutube />,
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

      <section className="relative z-10 w-11/12 max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col justify-center"
        >
          <p className="text-base sm:text-lg font-semibold">Hi I’m</p>
          <p className="text-2xl sm:text-4xl font-semibold text-[#A20895] mt-1">
            VAMSHI KRISHNA
          </p>
          <p className="text-3xl font-bold mt-1">
            Co-Founder & Managing Director
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold mt-4 text-gray-800">
            As the Co-Founder and Managing Director of{" "}
            <span className="text-[#42109F] font-bold">VisionTech</span>, I am
            driven by a passion for innovation, leadership, and sustainable
            growth.
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold mt-4 text-gray-800">
            I bring together strategic vision and hands-on execution to guide
            our company from concept to impact. With a strong focus on team
            building, customer satisfaction, and operational excellence.
          </p>
          <button className="text-sm sm:text-base bg-gradient-to-r from-[#9F1089] to-[#593CC2] w-fit px-6 py-3 mt-8 rounded-lg text-white font-semibold hover:opacity-90 transition cursor-pointer">
            Explore Me
          </button>
        </motion.div>

        {/* Image & Social Icons Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center relative w-full"
        >
          {/* Glow Container */}
          <div className="relative w-[350px] h-[350px] rounded-2xl overflow-visible">
            {/* Glow Background Image with blur */}
            <div
              className="absolute inset-0 scale-110 blur-xl opacity-90 z-0 rounded-2xl"
              style={{
                backgroundImage: "url('/image/back1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Foreground Main Image */}
            <img
              src="/image/image_1.jpg"
              alt="Vamshi Krishna"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-4 text-1xl mt-6 z-10">
            {SOCIAL_LINKS.map((social) => (
              <Link
                href={social.link}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition bg-white p-3 rounded-full shadow-lg hover:scale-110 ${
                  social.name === "linkedin"
                    ? "ring-4 text-1xl ring-[#0A66C2]"
                    : "hover:text-[#A20895]"
                }`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
