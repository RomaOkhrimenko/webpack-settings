import './index.html';
import './index.scss';
// @ts-ignore
import sponge from './assets/img/jpeg/dell-1o5MZblCP50-unsplash.jpg'
import {mult, sum} from "./modules/calc";

const imgWrap = document.querySelector('.img')

interface iObj {
    one: {
        two: {
            three: string
        }
    }
}

const obj: iObj = {
    one: {
        two: {
            three: "awoooooo"
        }
    }
}

const img = new Image()
img.src = sponge;
img.width = 700

const woof = (obj: iObj) => {
    console.log(obj)
}

woof(obj)
imgWrap?.append(img)

console.log(mult(2, 6))
console.log(sum(2, 6))