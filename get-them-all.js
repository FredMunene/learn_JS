// Exporting declarations
// Importing 

import { people } from './get-them-all.data.js';
// returns an array containing 2 arrays of HTML elements:
// the first array contains the architects, all corresponding to a <a> tag
// the second array contains all the non-architects people

export function getArchitects(){
    console.log('Architect button clicked!');
    const architects = people.filter(person => person.tag === 'a').map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });
    const nonArchitects = people.filter(person => person.tag === 'span').map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });

    return [architects,nonArchitects];
    
}

// returns an array containing 2 arrays of HTML elements:
// the first array contains the architects belonging to the classical class
// the second array contains the non-classical architects

export function getClassical(){
    console.log('Classical button clicked!');
    const classical = people.filter(person => 
        person.classe === 'classical' &&
        person.tag === 'a'
        ).map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });
    const nonClassical = people.filter(person => 
        person.classe !== 'classical' &&
        person.tag === 'a'
        ).map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });

    return [classical,nonClassical];
}

// returns an array containing 2 arrays of HTML elements:
//the first array contains the classical architects who are active in their class
//the second array contains the non-active classical architects

export function getActive(){
    console.log('Active button clicked!');
    const active = people.filter(person => person.classe === 'classical' && person.active).map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });
    const nonActive = people.filter(person => 
        person.classe === 'classical' && 
        !person.active 
        ).map(person =>{
            const element = document.createElement(person.tag); // Create the element
            element.id = person.id; // Set the ID
            element.textContent = 'Someone'; // Set text content
            return element; // Return the created element
    });

    return [active,nonActive];
}

//returns an array containing:
// the HTML element of the architect you're looking for, whose id is BonannoPisano
// an array which contains all the remaining HTML elements of active classical architects

export function getBonannoPisano(){
    console.log('BonannoPisano button clicked!');
    const bonanno = people.filter(person => person.id === 'BonannoPisano').map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });
    const activeClassArchitects = people.filter(person => 
        person.id !== 'BonannoPisano' &&
        person.tag === 'a' &&
        person.active === true &&
        person.classe === 'classical'
    ).map(person =>{
        const element = document.createElement(person.tag); // Create the element
        element.id = person.id; // Set the ID
        element.textContent = 'Someone'; // Set text content
        return element; // Return the created element
    });

    return [bonanno[0],activeClassArchitects];
}

// console.log(getBonannoPisano())

