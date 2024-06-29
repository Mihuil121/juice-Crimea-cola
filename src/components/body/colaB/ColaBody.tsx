import React from 'react'
import { ColaImage, ColaText, ICola, ColaT } from './cola.ts'
import './colaBodcss.css'
import Slider from '../Slaider/Slider.tsx'
import { ISlider, Slid } from '../Slaider/slid.ts'
import { ScrollPilot } from 'scroll-pilot';
import { config } from './seting.js'
import { Link, Element } from 'react-scroll';
import { Fade } from "react-awesome-reveal";

type TColaBody = ICola & ColaT

const ColaBody: React.FC<TColaBody> = () => {


    return (
        <div>
            <div className="cola3d">
                <div className="PColaText">
                    {ColaText.map((text: { text: string }, index) => index === 0 ? (
                        <div key={index} className="textWithImage" style={{ display: 'flex' }}>
                            <img className='ColaImage121' src={ColaImage[1].img} alt="Cola" />
                            <p className='cola'>{text.text}</p>
                        </div>
                    ) : (
                        <div className="shopm">
                            <p key={index} className={index === 1 ? 'colaH1' : 'cola'}>{text.text}</p>
                            <div className="sop">
                                <button className='Shop'>Shop Now</button>
                                <button className='Learm'>Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
                <img className='ColaImage' src={ColaImage[0].img} />
            </div>
            <Link to='sliderse' smooth={true} duration={500} className="scroll-pilot-indicator">
                <ScrollPilot config={config} />
            </Link>

            <Element name="sliderse" className="Sliders" >
                <Fade>
                    <Slider slids={Slid} />
                </Fade>
            </Element>

        </div>
    )
}

export default ColaBody