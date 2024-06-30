import photoCola from '../../../img/body/121.png'
import icon from '../../../img/body/icoCola.jpeg'
import lemon from '../../../img/body/lemon.png'
import avakado from '../../../img/body/avacada.png'
import coc from '../../../img/body/coc.png'

export interface ICola {
    img: string
}

export const ColaImage: ICola[] = [
    {
        img: photoCola
    }, {
        img: icon
    }
]

export interface ColaT {
    text: string
}

export const ColaText: ColaT[] = [
    {
        text: `Refreshing Cola Taste Relax and Enjoy!`
    },
    {
        text: `Black Sea Zest in Crimean Cola!`
    }
]

export interface ColaIImg {
    PhotoCola: string
    color: string
}

export const colaImg2: ColaIImg[] = [
    {
        PhotoCola: lemon,
        color: `background: linear-gradient(to bottom right, #fbd9b6, #fce2c7, #fce3c7, #fadbac);
            background: linear-gradient(to bottom left, #fbe1a7, #fbddc2, #f3dbbe, #f9cc9f);`
    },
    {
        PhotoCola: avakado,
        color: `background: linear-gradient(to bottom right, #dfe4c2, #e7ebcf, #e3e7cc, #e3e7cc);
            background: linear-gradient(to bottom left, #eff2c1, #ffc, #cfc, #cc9);`
    },
    {
        PhotoCola: coc,
        color: `background: linear-gradient(to bottom right, #e6bbba, #efd7d7, #ebc7c7, #d79b99);
                    background: linear-gradient(to bottom left, #e6bbba, #efd7d7, #ebc7c7, #d79b99);`
    },
]

export const button: { color: string }[] = [
    {
        color: ` #fdd552, #f78b3e`
    },
    {
        color: ` #dce073, #996`
    },
    {
        color: ` #e6bbba, #d79b99`
    },

]

export const Lern: { color: string }[] = [
    {
        color: ` #fdd552, `
    },
    {
        color: ` #dce073, `
    },
    {
        color: ` #e6bbba, `
    },

]