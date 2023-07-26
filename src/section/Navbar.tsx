"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import "../scss/sections/_navbar.scss"
import React, { useState ,useEffect } from 'react'
import { GiDuration, GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { delay } from 'framer-motion/dom'

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    {name: "About", link:"/#about"},
    {name: "Experience", link:"/#experience"},
    {name: "Work", link:"/#work"},
    {name: "Contact", link:"/#contact"} ,  
  ]
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);
  return (
    <nav>
        <div className={`wrapper ${navbarVisible ? "blur-nav": ""}`}>
            <motion.div 
            className="brand"
            initial={{ opacity : 0}}
            animate={{ opacity : 1}}
            transition={{
              duration:0.3,
              ease: "easeInOut",
            }}
            >
                <Link href="https://www.linkedin.com/in/aditya-raj-gupta-089393215/">
                    Portfolio
                </Link>
            </motion.div>
            <motion.div 
            className="nav-responsive-toggle"
            initial={{ opacity : 0}}
            animate={{ opacity : 1}}
            transition={{
              duration:0.3,
              ease: "easeInOut",
            }}
            >
            {responsiveNavVisible ? (
            <CgClose
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
            </motion.div>
            <div className={`${responsiveNavVisible && "nav-responsive"} nav-items`}>
              <ul className="nav-items-list">
                {sectionLinks.map(({name, link}, index)=> (
                  <motion.li 
                  key={name} 
                  className='nav-items-list-item'
                  initial = {{opacity:0, y: -25}}
                  animate = {{opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,       
                    ease: "easeInOut",
                    delay: 0.3 + index * 0.1,           
                  }}
                  >
                    <Link href={link} className='nav-items-list-item-link'>{name}</Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
              className="nav-items-button"
              initial = {{opacity:0, y: -25}}
                  animate = {{opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,       
                    ease: "easeInOut",
                    delay: 0.6,           
                  }}
              >
                <Button text="Resume" link="http://localhost:3000/resume.pdf" />
              </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar