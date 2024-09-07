
import {styles} from './pimp-my-style.data.js';

let index = 0;
let removing = false;

export function pimp(){
    // add each styles array element as classes
    const button =  document.querySelector('button');

    if (!removing){
        if (index < styles.length){
            button.classList.add(styles[index]);
            index++;
        }
        if (index === styles.length){
            removing = true;
            button.classList.add('unpimp');
        }
    } else{
        if (index > 0){ 
            index--;
            button.classList.remove(styles[index])
        }

        if (index === 0){
            removing = false;
            button.classList.remove('unpimp')
        }
    }    
}