function longWords(array){
    return array.every(
        str => typeof str === 'string'&& str.length >= 5 
    );

}

function oneLongWord(array){
    return array.some(
    str => typeof str === 'string' && str.length >= 10
);
    
}

function noLongWords(array){
    return array.every(
        str => typeof str === 'string' && str.length < 7
    );
}