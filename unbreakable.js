function split(str, del = ''){
    let array = []
    let newstr = ''
    for (let i = 0; i < str.length;i++){

        if (str[i] !== del){
            newstr += str[i];
        } else {
            array.push(newstr);
            newstr = '';
        }        
    }
    if (newstr != '' ){
        array.push(newstr);
    }
    return array
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

// console.log(join(['Fire', 'Air', 'Water'],''))