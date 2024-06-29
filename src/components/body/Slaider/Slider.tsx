import React from 'react'
import { Slid,ISlider } from './slid.ts'
import './slider.css'

interface PropsIslids{
    slids:ISlider[]
}

const Slider:React.FC<PropsIslids> = ({slids}) => {
    return (
        <div>
            <div className="slider">
                {slids.map((Slide: { text: string, shop: number, ml: number, image: string }, index) => (
                    <div className="index" key={index} style={{display:'flex',justifyContent:'center',height:'10rem',alignItems:'center'}}>
                        <img src={Slide.image} alt={Slide.text} className='imageSlid'/>
                        <div className="textSlider">
                            <p>${Slide.shop}</p>
                            <p>{Slide.text}</p>
                            <p className='ml'>{Slide.ml} ml</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider