import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <div className="quick_link">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Admission</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="program">
        <h4>Programs</h4>
        <ul>
          <li>Computer Science & Engineering</li>
          <li>Information Technology</li>
          <li>Electrical Engineering</li>
          <li>Chemical Engineering</li>
          <li>BioTechnology Engineering</li>
        </ul>
      </div>
      <div className="contactus">
        <h4>Contact Us</h4>
        <ul>
          <li>Dr. Ambedkar Institute of Technology <br /> for Handicapped <br /> Kanpur, UttarPradesh, India</li>
          <li>Phone: +91 123 456 7890</li>
          <li>Email: info@aithkanpur.edu</li>
        </ul>
      </div>
      <div className="follow_us">
        <h4>Follow Us</h4>
        <ul>
            <li>Twitter</li>
            <li>FaceBook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
