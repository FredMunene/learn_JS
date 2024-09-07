import {colors} from './fifty-shades-of-cold.data.js'

export function generateClasses(){

    const head = document.head;

    // creates a <style> tag inside the <head>
    const style = document.createElement('style')
    // create one class for each color in color array
    style.className = 'standardcolor';

    // Generate CSS rulea for each color
    let cssRules = '';

    colors.forEach(color => {
        // set background atribute 
        cssRules += `.${color} { background: ${color};}\n`;
    });
    
    style.textContent = cssRules;

    head.append(style)
}

export function generateColdShades(){

    const body = document.querySelector('body')
    // creates a div for each color of colors array
    // whose name contain aqua, blue, turqoise, green, cyan, navy or purple.

    const coldShades = ['aqua','blue','turquoise','green','cyan','navy','purple']

    colors.forEach(color => {
        if (coldShades.some(shade => color.includes(shade))){
            const div = document.createElement('div')
            // each div to have corresponding generated class and dispaly name of color
            div.className = `${color}`
            div.textContent = `${color}`

            body.append(div);
        }
        
    });

    
}

export function choseShade(shade){

    // replaces all classes of all other elements by the chosen shade.

    const divs = Array.from(document.querySelectorAll('div'))

    divs.forEach(div => {
        div.className = shade        
    }); 
}
