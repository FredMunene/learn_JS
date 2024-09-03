function split(str, del) {
    const array = [];
    
    if (del === '') {
        // When the del is an empty str, split the str into individual characters
        for (let i = 0; i < str.length; i++) {
            array.push(str[i]);
        }
    } else {
        let slice = '';
        for (let i = 0; i < str.length; i++) {
            if (str.slice(i, i + del.length) === del) {
                array.push(slice);
                slice = '';
                i += del.length - 1;
            } else {
                slice += str[i];
            }
        }
        array.push(slice); // Push the last chunk
    }
    return array;
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