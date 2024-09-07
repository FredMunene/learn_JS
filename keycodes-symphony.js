


export function compose(){
    const body = document.querySelector('body')
    // make it fire every time a key is pressed
    const lowercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));

    document.addEventListener(
        "keydown",
        (event) => {
            const keyName = event.key;

            if (lowercaseLetters.includes(keyName)){
                // create a div with class note when a lower case letter is pressed
               const div = document.createElement('div');
                // div with a unique background color generated using the key of the event
                div.style.background = colorise(keyName)
                div.className = 'note'
                // display key pressed
                 div.textContent = `${keyName}`
                 body.append(div)
            }
            if (keyName === 'Backspace'){
                // clear last note
                const notes = Array.from(document.querySelectorAll('div'));
                if (notes.length > 0) {
                    const noteToRemove = notes[notes.length-1];
                    noteToRemove.remove();
                }
            }
            if (keyName === 'Escape'){
                //clear all notes.
                const notes = Array.from(document.querySelectorAll('div'));
                if (notes.length > 0) {
                    notes.forEach(note => {
                        note.remove();
                    });
                }
            }
           
        });
}

function colorise(key){
    const ascii = key.charCodeAt(0);

    let red = (ascii * 98) % 256;
    let green = (ascii * 85) % 256;
    let blue = (ascii * 127) % 256;

    return `rgb(${red}, ${green}, ${blue})`;
}