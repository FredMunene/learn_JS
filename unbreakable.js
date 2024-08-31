function split(str, del = '') {
    let array = [];
    let newstr = '';
    let i = 0;

    while (i < str.length) {
        // Check if the next part of the string matches the delimiter
        if (str.slice(i, i + del.length) === del) {
            array.push(newstr);
            newstr = '';
            i += del.length;  // Skip over the delimiter
        } else {
            newstr += str[i];
            i++;
        }
    }

    // Push the last part of the string if it's not empty
    if (newstr !== '') {
        array.push(newstr);
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