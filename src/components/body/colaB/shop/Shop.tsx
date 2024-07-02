import React from 'react';
import { Slid, ISlider } from '../../Slaider/slid.ts'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import baset from '../../../../img/body/shopping-cart.png'
import badge from '../../../../img/body/badge-x.png'
import './Bascet.css'

interface ShopProps {
    useId: number | null
    onSlideClick:(index:null|number)=>void

}

const Shop: React.FC<ShopProps> = ({ useId,onSlideClick }) => {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();

    const data = useId === null ? 1 : useId

    return (
        <div className="wrapper">
            <div className="fact">
                <div className='Bascet' style={{ display: 'flex', justifyContent: 'center', height: "100%", alignItems: "center", flexDirection: "column" }}>
                    <p style={{ display: 'flex', justifyContent: 'center', }} className='StyleBasc'>Basket
                        <img src={baset} style={{ width: "2rem", marginLeft: '1rem' }} />
                        <img src={badge} style={{ width: "2rem", marginLeft: '1rem', }}  onClick={() => onSlideClick(null)} />
                    </p>
                    <div className="flexBasket" style={{ display: 'flex', justifyContent: 'center', height: "100%", alignItems: "center", marginBottom: "1rem" }} >
                        <div style={{ display: 'flex', flexDirection: "column" }} >
                            <p className='BascetText'>{Slid[data].text}</p>
                            <p>{Slid[data].shop}$</p>

                            <PaymentInputsWrapper {...wrapperProps}>
                                <svg {...getCardImageProps({ images })}></svg>
                                <input {...getCardNumberProps()} />
                                <input {...getExpiryDateProps()} />
                                <input {...getCVCProps()} />
                            </PaymentInputsWrapper>
                            <button className='BuyBascet'>Buy</button>
                        </div>
                        <img src={Slid[data].image} style={{ width: "16rem" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
