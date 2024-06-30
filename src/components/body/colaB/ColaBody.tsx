import React, { useState } from 'react';
import { ColaImage, ColaText, ICola, ColaT, colaImg2, ColaIImg, button, Lern } from './cola.ts';
import './colaBodcss.css';
import Slider from '../Slaider/Slider.tsx';
import { ISlider, Slid } from '../Slaider/slid.ts';
import { ScrollPilot } from 'scroll-pilot';
import { config } from './seting.js';
import { Link, Element } from 'react-scroll';
import { Fade } from "react-awesome-reveal";
import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';

type TColaBody = ICola & ColaT & ColaIImg & DefaultTheme;

const ColaBody: React.FC<TColaBody> = () => {
    const [useId, setUserId] = useState<number | null>(null);

    const handerClock = (index: number) => {
        setUserId(index);
    };

    function ColaCola(useId: number | null) {
        if (useId === null) {
            return ColaImage[0].img;
        } else {
            return colaImg2[useId].PhotoCola;
        }
    }

    let GlobalStyle = createGlobalStyle`
        body {
            background: ${useId === null ? `
                linear-gradient(to bottom right, #e6bbba, #efd7d7, #ebc7c7, #d79b99);
                linear-gradient(to bottom left, #e6bbba, #efd7d7, #ebc7c7, #d79b99);
            ` : colaImg2[useId]?.color || '#d79b99'};
        }
        .Shop {
            background: linear-gradient(to bottom, ${useId === null ? '#e28280, #b74b49' : button[useId]?.color || '#e28280, #b74b49'});
        }
        .Learm {
            color:${useId === null ? '#e28280' : Lern[useId]?.color || '#e28280'};
            border: 1px solid ${useId === null ? '#e28280' : Lern[useId]?.color || '#e28280'};
        }
        .Shop:hover {
            background: linear-gradient(to bottom, ${useId === null ? '#e28280, #b74b49' : button[useId]?.color || '#e28280, #b74b49'});
        }
    `;

    const ColaImageWrapper = styled.div`
        img {
            transition: opacity 0.5s ease-in-out;
        }
    `;

    const TextWrapper = styled.div`
        transition: opacity 0.5s ease-in-out;
    `;

    const img: string = ColaCola(useId);

    return (
        <div>
            <div className="cola3d">
                <TextWrapper >
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
                </TextWrapper>
                <ColaImageWrapper>
                    <img className='ColaImage' src={img} alt="Cola" />
                </ColaImageWrapper>
            </div>
            <Link to='sliderse' smooth={true} duration={500} className="scroll-pilot-indicator">
                <ScrollPilot config={config} />
            </Link>

            <Element name="sliderse" className="Sliders">
                <Fade>
                    <Slider slids={Slid} onSlideClick={handerClock} />
                </Fade>
            </Element>
            <GlobalStyle />
        </div>
    );
}

export default ColaBody;
