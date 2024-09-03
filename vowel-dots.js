let vowels = new RegExp("[aeiouAEIOU]");


function vowelDots (str){

    let res = ''
    for (let value of str){
        if (vowels.test(value)) {
            res+=value+'.'
        } else {
            res+=value
        }
    }

   return   res 
}

console.log( vowels.test('a') && !vowels.test('c'))