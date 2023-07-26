"use client"
import Navbar from "@/section/Navbar"
import SocialIcons from "@/components/SocialIcons"
import Email from "@/components/Email"
import Hero from "@/section/Hero"
import About from "@/section/About"
import Experience from "@/section/Experience"
import Projects from "@/section/Projects"
import Contact from "@/section/Contact"
import Head from "next/head"
import { useState } from "react"
import Loader from "@/components/Loader"
export default function Home() {

  return (
    <div className="app">
      <Head>
        <title>Aditya Raj Gupta</title>
        <h2>Portfolio</h2>
      </Head>
      <Navbar  />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
