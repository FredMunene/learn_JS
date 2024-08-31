function split(str, del) {
    let newstr = [];
    if (del === ''){

    } else {
        let chunky = '';


        for (let i = 0; i < str.length;i++){
            if (str.slice(i, i + del.length) === del){
                newstr.push(chunky);
                chunky = '';
                i += del.length -1;
            } else {
                chunky += str[i];
            }
        }
     newstr.push(chunky)
    }
    return newstr

}

function join(array, del =','){
    // let array = []
    let newstr = ''
    for (let i = 0; i < array.length;i++){
        newstr+=array[i]
        
        if(i < array.length-1){
            newstr+=del
        }
    }
    
    return newstr
}

console.log(split('ggg - ddd - b', ' - '))