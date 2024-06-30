// Logo.js

import React from 'react';
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className='logo-container'
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
    >
      <h1 className='logo-text'>
        Samitha <span className='logo-highlight'>Dhananjaya</span>
      </h1>
      <p className='logo-subtext'>Full Stack Developer</p>
    </motion.div>
  );


  
};

export default Logo;
