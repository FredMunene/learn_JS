function get (src,path){

    
    let slice = path.split(".")
    let res = src;

    for (let key of slice){
        res = res[key];
    }
    return res;
}

const src = { nested: {key: 'peekaboo'}};
const path = 'nested.key';
console.log(get(src, path));