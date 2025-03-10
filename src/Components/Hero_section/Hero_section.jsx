import React from "react";
import "./Hero_section.css";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

const Hero_section = () => {
  return (
    <section className="hero_section" id="home">
      <motion.h2
        initial={{ opacity: 0.2, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <ReactTypingEffect
          text={["Emporwering Through Education"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          cursor="|"
        />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0.2, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Dr. Ambedkar Institute of Technology for Divyangjan is dedicated to
        providing quality education and equal opportunities for
        differently-abled students.
      </motion.p>
      <motion.button initial={{opacity:0.2,y:50}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.6,duration:0.8}}
      >Explore Program</motion.button>
    </section>
  );
};

export default Hero_section;
