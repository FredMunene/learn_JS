function get (src,path){

    
    let slice = path.split(".")
    let res = src;

    for (let key of slice){
        if (res === undefined || res[key] === undefined) {
            return undefined;
        }
        res = res[key];
    }
    return res;
}

const src = { nested: {key: 'peekaboo'}};
const path = 'nested.key';
console.log(get(src, path));