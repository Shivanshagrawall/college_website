import React from "react";
import "./Program.css";
import { program } from "../../Assests/Assests";
const Program = () => {
  return (
    <section className="program_section" id="program">
      <div className="program_heading" id="admission">
        <h3>Our Programs</h3>
      </div>
      <div className="program_cards">
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
      </div>
    </section>
  );
};

export default Program;
