import React from 'react';
import { appText, AppText, icon, IconT ,logo} from './headr.ts';
import './Headr.css';

type HeadrType = AppText & IconT;

const Headr: React.FC<HeadrType> = () => {
    return (
        <div className="headr-container">
            <img className='logo left-fixed' src={logo} alt="" />
            <div className="textBut">
                {appText.map((textMap: { text: string, id: number }, index) => (
                    <p className='PtextBut' key={textMap.id}>{textMap.text}</p>
                ))}
                <div className="colorRaed"/>
            </div>
            <div className="image">
                {icon.map((iconMap: { image: any, id: number }, index) => (
                    <img className='imageBot right-fixed' src={iconMap.image} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Headr;
