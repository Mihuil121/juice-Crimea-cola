import photoCola from '../../../img/body/121.png'
import icon from '../../../img/body/icoCola.jpeg'

export interface ICola {
    img:string
}

export const ColaImage:ICola[] = [
    {
        img:photoCola
    },{
        img:icon
    }
]

export interface ColaT{
    text:string
}

export const ColaText:ColaT[]=[
    {
        text:`Refreshing Cola Taste Relax and Enjoy!`
    },
    {
        text:`Black Sea Zest in Crimean Cola!`
    }
]