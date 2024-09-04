let pattern  = /[a-z0-9_-]{3,5}/g
let pat = /the/g

function test(str){

    let res = []

    let found  = str.match(pattern)
    let fou = str.match(pat)

    if (fou){
        res = fou
    }

    return(res)

}

console.log(test("helthelo"))