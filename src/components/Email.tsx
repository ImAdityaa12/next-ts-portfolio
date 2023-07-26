"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import "../scss/components/_email.scss"
const Email = () => {
  return (
    <motion.div className='email'
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <Link href="mailto:adityagupta1291@gmail.com" className='email-link'>adityagupta1291@gmail.com</Link>
    </motion.div>
  )
}

export default Email