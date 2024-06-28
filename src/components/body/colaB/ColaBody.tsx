import React from 'react'
import { ColaImage, ColaText } from './cola.ts'
import './colaBodcss.css'

const ColaBody: React.FC = () => {
    return (
        <div>
            <div className="cola3d">
                <div className="PColaText">
                    {ColaText.map((text: { text: string }, index) => index === 2 ? (
                        <div key={index} className="textWithImage">
                            <img className='ColaImage' src={ColaImage[1].img} alt="Cola" />
                            <p className='cola'>{text.text}</p>
                        </div>
                    ) : (
                        <p key={index} className={index === 1 ? 'colaH1' : 'cola'}>{text.text}</p>
                    ))}
                </div>
                <img className='ColaImage' src={ColaImage[0].img} />
            </div>
        </div>
    )
}

export default ColaBody