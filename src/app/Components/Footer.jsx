import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  const NavBar_Array = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#project" },
    { name: "Contact Me", link: "#contact" },
  ];

  const SOCIAL_LINKS = [
    {
      name: "facebook",
      link: "https://www.facebook.com/people/VisionTech-Group/61576090701067/",
      icon: <FaFacebook />,
    },
    {
      name: "twitter",
      link: "https://x.com/GroupVisiontech",
      icon: <SiX />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/vinayteja_19/",
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
    <footer className="bg-[#F8F8F8] mt-10">
      <div className="w-11/12 max-w-6xl mx-auto py-10 px-4 flex flex-col items-center gap-6">
        {/* Logo */}
        <p className="text-2xl sm:text-3xl font-bold">
          <span className="bg-[#BA22A3D9] text-white px-2 mr-1">V</span>AMSHI KRISHNA
        </p>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-5 text-sm sm:text-base font-medium text-[#333]">
          {NavBar_Array.map((navlink) => (
            <Link href={navlink.link} key={navlink.name}>
              <button className="cursor-pointer hover:text-[#BA22A3] transition">
                {navlink.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-2xl text-[#333] mt-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BA22A3] transition"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-[#545454] text-white text-center py-4 text-sm sm:text-base">
        © 2024 Vamshi krishna. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
