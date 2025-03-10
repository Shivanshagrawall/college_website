import React from "react";
import "./Achievement.css";
import { achievement } from "../../Assests/Assests.jsx";
import { motion } from "framer-motion";
const Achievement = () => {
  return (
    <section className="achievement-section">
      <div className="container">
        <div className="grid">
          <motion.div className="title-section"
          initial={{opacity:0.2,y:50}}
          transition={{duration:0.8}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          >
            <div className="title-wrapper">
              <h3 className="title">Our Achievements</h3>
              <span className="subtitle">Milestones & Recognitions</span>
            </div>
          </motion.div>

          <div className="timeline">
            {achievement.map(({ id, title, date, description }) => (
              <motion.div className="timeline-item" key={id}
              initial={{opacity:0.2,y:50}}
              transition={{duration:0.8}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              >
                <h3 className="timeline-title">{title}</h3>
                <time className="timeline-date">{date}</time>
                <p className="timeline-text">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
