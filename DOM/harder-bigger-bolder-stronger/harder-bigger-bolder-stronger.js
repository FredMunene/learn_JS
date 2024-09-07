

export function generateLetters(){
    // create 120 div elements
    for (let count = 0; count < 120; count++){
        let body = document.querySelector('body')

        let div = document.createElement('div')
         // each div to contain a letter randomly picked through the UPPERCASE alphabet
        const uppercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
        // get a random letter index
        const letterIndex = Math.floor(Math.random()*26)
        div.textContent = uppercaseLetters[letterIndex]
        // each div style properties are incraesed

        // letter's font-size to grow from 11 to 130 pixels
        
        if (count < 40) {
            // font-weight has to be 300 for the first third of letters -> first 40 letters
            div.style.fontSize = `${11 + count}px`
            div.style.fontWeight = '300'

        } else if (count < 80){
            // font-weight to be 400 for 41-80 letters
            div.style.fontSize = `${11 + count}px`
            div.style.fontWeight = '400'
        } else {
            // font-weight to be 600 for 81 - 120
            div.style.fontSize = `${11 + count}px`
            console.log(count)
            div.style.fontWeight = '600'

        }
        body.append(div)
    }

    

  

        
}