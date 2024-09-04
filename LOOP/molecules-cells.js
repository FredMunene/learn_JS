function DNA(str){
    let newstr = ''
    for (let value of str) {
        switch (value) {
            case "C":
                newstr+='G';
                break;
            case "G":
                newstr+='C';
                break;
            case "A":
                newstr+='T';
                break;
            case "U":   
                newstr+='A';
                break; 
                // default:
                // throw new Error('Invalid DNA character');
        }

    }
    return newstr

}

function RNA(str){
    let newstr = ''
    for (let value of str) {
        switch (value) {
            case "G":
                newstr+='C';
                break;
            case "C":
                newstr+='G';
                break;
            case "T":
                newstr+='A';
                break;
            case "A":   
                newstr+='U' ;
                break;
                // default:
                //     throw new Error('Invalid DNA character');
        }

    }
    return newstr;
    
}

console.log(RNA("GCTA")); 
console.log(DNA("CGAU"));