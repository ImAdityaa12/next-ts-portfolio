"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import "../scss/sections/_about.scss"
const About = () => {
  return (
    <motion.div className="about" id="about"
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Hello! I am a highly skilled and creative front-end developer with expertise in React, Next.js, Redux Toolkit, Figma, and other modern web technologies. Over the course of my career, I have successfully developed and launched a diverse range of web applications
          </p>
          <p className="about-grid-info-text">
          One of my most notable projects is the "Cinemaverse" web app, where I have passionately crafted a platform that provides comprehensive details about cinemas, movies, and related information.Click here to view {" "}
            <Link href="https://cinemaverseaditya.netlify.com/" className="link" target="_blank">
              CinemaVerse
            </Link>
          </p>

          <p className="about-grid-info-text">
          Additionally, I ventured into the realm of e-commerce and integrated a secure and reliable payment gateway into an e-commerce web app. 
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://metaversus-aditya.netlify.app/"
            >
              MetaVersus,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next js</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Tailwind Css</li>
            <li className="about-grid-info-list-item">Scss</li>
            <li className="about-grid-info-list-item">Figma</li>
            <li className="about-grid-info-list-item">After Effects</li>
            <li className="about-grid-info-list-item">Premiere Pro</li>
          </ul>
          </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/aditya.jpeg" alt="profile" fill/>
          </div>
        </div>
        </div>
      </motion.div>
  );
};

export default About;
