import './index.html';
import './index.scss';
import sponge from './assets/img/jpeg/dell-1o5MZblCP50-unsplash.jpg'
import {mult, sum} from "./modules/calc";

const imgWrap = document.querySelector('.img')

const img = new Image()
img.src = sponge;
img.width = 700
imgWrap.append(img)

console.log(mult(2, 6))
console.log(sum(2, 6))