"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import "../scss/sections/_experiences.scss";
const Experience = () => {
  const [selected, setselected] = useState(0);
  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);
  const expereinces = [
    {
      name: "CinemaVerse",
      role: "Front End Developer",
      url: "https://cinemaverseaditya.netlify.app/",
      start: "June 2023",
      end: "Present",
      shortDescription: [
        "CinemaVerse is a dynamic movies website built with React and Redux Toolkit, leveraging the TMDb API for fetching movie data.",
        "It offers a user-friendly interface featuring a homepage with popular and trending movie listings, each accompanied by essential details like release date and ratings. ",
        "Users can explore comprehensive movie information on individual pages, including synopsis, cast, crew, and user reviews. The website includes user authentication, enabling registered users to rate, review, and save their favorite movies. With responsive design and interactive search functionality, CinemaVerse provides an immersive movie-watching experience for cinephiles worldwide.",
      ],
    },
    {
      name: "Shop It",
      role: "Full Stack",
      url: "https://github.com/ImAdityaa12/Shop-It",
      start: "May 2023",
      end: "Present",
      shortDescription: [
        "Shop It is a fully-functional ecommerce website built using React and Strapi, designed to offer a seamless online shopping experience.",
        "The platform features a diverse range of products categorized for easy exploration. Users can browse through detailed product descriptions and images to make informed purchase decisions. ",
        "The integration of the Stripe payment gateway ensures secure and hassle-free transactions during the checkout process. Shop It provides a user-friendly interface that focuses on product presentation and smooth navigation, making it an efficient and enjoyable ecommerce solution for customers.",
      ],
    },
    {
      name: "Expense Tracker",
      role: "Front End",
      url: "https://expense-tracker-aditya.netlify.app/",
      start: "February 2023",
      end: "February 2023",
      shortDescription: [
        "The Expense Tracker web application, built with React and Context API, empowers users to efficiently manage their finances. With a simple and intuitive interface, users can track their expenses, view their current balance, and access a detailed transaction history.",
        "Leveraging the power of Context API, the application seamlessly manages state and ensures smooth data flow throughout the user's interaction. Users can easily add new expenses, categorize transactions, and monitor their spending patterns.",
        "The Expense Tracker is a valuable tool for individuals seeking a convenient and organized way to monitor their financial activities, fostering better money management and financial planning.",
      ],
    },
    {
      name: "Meta Versus",
      role: "Front End Designer",
      url: "https://metaversus-aditya.netlify.app/",
      start: "July 2023",
      end: "Present",
      shortDescription: [
        "MetaVersus is a cutting-edge Next.js 13 website, skillfully crafted with Framer Motion and Tailwind CSS. This modern web application offers a delightful user experience with fluid animations and seamless transitions.",
        "Users can explore a range of interactive features and content, leveraging the power of Next.js 13's latest capabilities.",
        "Framer Motion adds a touch of elegance, enhancing user engagement and interactivity. Tailwind CSS ensures a sleek and responsive design, optimizing the website for various devices. MetaVersus represents a fusion of innovation and style, providing a dynamic platform for users to access and interact with captivating content in a contemporary digital environment.",
      ],
    },
  ];
  return (
    <motion.div id="experience" className="experience"
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay:0.4, }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setselected(index)}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                {" "}
                of{" "}
                <Link
                  href={expereinces[selected].url}
                  target="_blank"
                  className="link"
                >
                  {expereinces[selected].name}{" "}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => {
                  return (
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
