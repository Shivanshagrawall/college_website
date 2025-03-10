import React from "react";
import "./Contact.css";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <motion.div className="quick_link"
      initial={{opacity:0.2,y:50}}
      transition={{duration:0.8,delay:0.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      >
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Admission</li>
          <li>Contact Us</li>
        </ul>
      </motion.div>
      <motion.div className="program"
      initial={{opacity:0.2,y:50}}
      transition={{duration:0.8,delay:0.4}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
        <h4>Programs</h4>
        <ul>
          <li>Computer Science & Engineering</li>
          <li>Information Technology</li>
          <li>Electrical Engineering</li>
          <li>Chemical Engineering</li>
          <li>BioTechnology Engineering</li>
        </ul>
      </motion.div>
      <motion.div className="contactus"
      initial={{opacity:0.2,y:50}}
      transition={{duration:0.8,delay:0.6}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
        <h4>Contact Us</h4>
        <ul>
          <li>Dr. Ambedkar Institute of Technology <br /> for Handicapped <br /> Kanpur, UttarPradesh, India</li>
          <li>Phone: +91 123 456 7890</li>
          <li>Email: info@aithkanpur.edu</li>
        </ul>
      </motion.div>
      <motion.div className="follow_us"
      initial={{opacity:0.2,y:50}}
      transition={{duration:0.8,delay:0.8}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
        <h4>Follow Us</h4>
        <ul>
            <li>Twitter</li>
            <li>FaceBook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Contact;
