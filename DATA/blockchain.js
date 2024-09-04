// Create a function named blockChain that creates a block in your very own block chain. It takes 2 arguments:

//     data: any valid JSON data.
//     prev: the previous block, if no block are given it should use the genesis block: { index: 0, hash: '0' }.

// A block must have the following properties:

//     index
//     hash: a computed hash using the hashCode function provided. You will need to pass it a concatenation of the block's index, the previous block's hash and the block's stringified data.
//     data: any valid object.
//     prev: the previous block.
//     chain: a function that accepts data as an argument, and creates the next block with it.


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