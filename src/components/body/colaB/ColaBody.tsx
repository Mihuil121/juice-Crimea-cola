import React from 'react'
import { ColaImage, ColaText } from './cola.ts'
import './colaBodcss.css'

const ColaBody: React.FC = () => {
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
                            <button className='Learm'>Learm More</button>
                        </div>
                        </div>
                    ))}
                </div>
                <img className='ColaImage' src={ColaImage[0].img} />
            </div>
        </div>
    )
}

export default ColaBody