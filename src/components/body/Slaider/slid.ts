import Lemon from '../../../img/body/slider/lemon.png'
import Avocado from '../../../img/body/slider/vac.png'
import Strawberry from '../../../img/body/slider/coc.png'

export interface ISlider{
    text:string
    shop:number
    ml:number
    image:string
}

export const Slid:ISlider[] = [{
    text: "lemon Coca-Cola",
    shop: 125,
    ml: 250,
    image:Lemon
}, {
    text: "Avocado Coca-Cola",
    shop: 205,
    ml: 330,
    image:Avocado
},{
    text:"Strawberry Coca-Cola",
    shop:200,
    ml:500,
    image:Strawberry
    },

]