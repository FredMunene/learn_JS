// words takes a string, splits it by spaces, and returns an array of substrings
const  words = (str) => str.split(" ")
const sentence = (arry) => arry.join(" ")
const yell = (str) => str.toUpperCase()
const whisper = (str) => '*'+str.toLowerCase()+'*'

function capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}




// console.log(words("vag hello"))
// console.log(sentence([ 'vag', 'hello' ]))
// console.log(yell("upper"))
// console.log(whisper("lowercase"))
// console.log(capitalize("capitalaliSe"))