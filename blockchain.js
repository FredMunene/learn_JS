const blockChain = (data,prev) => {
   

}

// genesis block
const genesis = {
    index : 0,
    hash : '0',
}
// hashCode returns a concatenation of the index, hash and stringified data
const hashCode = (index,hash,data) => {
    return (index+1) + hash + Object.values(data).toString().split(',').join(''); 
}

// chain accepts data as an argument and creates the nexy=t block with it.
blockChain.chain = (data) => {
    return 
}
// blockChain.hash = hashCode(index,hash,data)

// genesis -> another block -> blockchain

// const first = blockChain({a:1})

// const second = first.chain({hello : 'world'})

// const chain = second.chain()

console.log(hashCode(10,'0',{"a":1}))