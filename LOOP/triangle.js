function triangle(str,num){
    let art = '';

    for (let i = 1; i <= num;i++){
        art += str.repeat(i);
        if (i !== num){
            art += '\n'
        }
    }
    return art
}

console.log(triangle("*",5))