import { webpackNumbers } from './webpack-numbers'

window.onload = function(){
const element = document.createElement('div');
element.innerHTML = webpackNumbers(1)

document.body.appendChild(element)
}


