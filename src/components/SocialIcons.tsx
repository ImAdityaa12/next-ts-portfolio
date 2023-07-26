"use client"
import React from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/ImAdityaa12" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/@itsandroid",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/aditya-raj-gupta-089393215/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/weird_aditya",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/Me_Aditya_here",
    },
  ];
  return (
    <motion.div className="social-icons"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
        <ul className="social-icons-list">
            {socialLinks.map(({ name, icon, link }) => (
            <li key={name} title={name} className="social-icons-list-item">
                <Link
                href={link}
                className="social-icons-list-item-link"
                target="_blank"
                >
                {icon}
                </Link>
            </li>
            ))}
        </ul>
      </motion.div>
  );
}

export default SocialIcons;