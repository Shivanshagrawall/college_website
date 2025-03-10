import React from "react";
import "./Program.css";
import { program } from "../../Assests/Assests";
import {motion} from 'framer-motion'

const Program = () => {
  return (
    <section className="program_section" id="program">
      <motion.div className="program_heading" id="admission"
      initial={{opacity:0.2,y:50}}
      transition={{duration:0.8}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      >
        <h3>Our Programs</h3>
      </motion.div>

      <motion.div className="program_cards"
      initial={{opacity:0.2,y:100}}
      transition={{duration:0.8}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      >
        {program.map((item) => {
          return (
            <div className="program_card" id={item.id}>
              <img src={item.image} alt="image" />
              <div className="program_card_content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button>Learn More</button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Program;
