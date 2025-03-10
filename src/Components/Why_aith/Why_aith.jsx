import React from 'react'
import './Why_aith.css'
import {card1} from './../../Assests/Assests'
import {motion} from 'framer-motion'

const Why_aith = () => {
  return (
    <section className='why_aith_section' id="about">
        <motion.div className="why_aith_heading"
        initial={{opacity:0.2,y:50}}
        transition={{duration:0.8}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
            <h3>Why Choose AITH?</h3>
        </motion.div>
        <motion.div className="why_aith_cards"
        initial={{opacity:0.2,y:100}}
        transition={{duration:0.8}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
            {card1.map((item)=>{
                return(
                    <div className="card" id={item.id}>
                        <h4>{item.heading}</h4>
                        <p>{item.paragraph}</p>
                    </div>
                )
            })}
        </motion.div>
    </section>
  )
}

export default Why_aith