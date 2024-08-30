function reverse (str){
    let res = Array.isArray(str) ? [] : ''

    for ( let i = str.length - 1; i >= 0 ;i++){
        if (Array.isArray(str)){
            res.push(str[i])
        } else {
            res += str[i]
        }
    }

    return res
}

