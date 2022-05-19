import _ from 'lodash';
import myName from './myName';
import './style.css';
import Scissors from './ScissorsII.png'; 

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['hello', 'webpack'], '' ) +' '+ myName('Ryuk');
    element.classList.add('hello');

    //Image demo practice
    const myIcon = new Image();
    myIcon.src = Scissors;
    element.appendChild(myIcon);

    return element;   
}
document.body.appendChild(component());



// TOP extra tutorial

function componentTOP() {
    const element = document.createElement('div');
    // use your function!
    element.textContent = myName('Cody');
    return element;
  }
document.body.appendChild(componentTOP());