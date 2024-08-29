const repeat = (str,numb) => {
    let count = 0
    let res = ''

    while (count < numb){
        res+=str
        count = count+1
    }

    return res
}

console.log(repeat("hello",4))