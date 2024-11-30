import React from 'react'
import './Why_aith.css'
import {card1} from './../../Assests/Assests'
const Why_aith = () => {
  return (
    <section className='why_aith_section' id="about">
        <div className="why_aith_heading">
            <h3>Why Choose AITH?</h3>
        </div>
        <div className="why_aith_cards">
            {card1.map((item)=>{
                return(
                    <div className="card" id={item.id}>
                        <h4>{item.heading}</h4>
                        <p>{item.paragraph}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Why_aith