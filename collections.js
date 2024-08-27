const superTYpeOf = () => {

} 
// Array to Set.
const arrToSet = (arr) => new Set(arr);
// Array to string.
const arrToStr = (arr) => arr.toString().split(',').join(''); 
// Set to Array.
const setToArr = (set) => Array.from(set)
// Set to string.
const setToStr = (set) => {
    var str = ''
    for( const item of set.values()){
        str+=item
    }
    return str
}
// string to Array.
const strToArr = (str) => str.split("")
// string to Set.
const strToSet = (str) => new Set(str)
// Map to Object.
const mapToObj = (map) => {} 
// Object to Array.
const objToArr = (obj) => {} 
// Object to Map.
const objToMap = (obj) => {} 
// Array to Object.
const arrToObj = (arr) => {}
// string to Object. 
const strToObj = (str) => {} 



const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y : 75, radius: 24 }
const set = new Set() //sets
const map = new Map()  // map

set.add(1)
set.add(2)
set.add(1)
set.add(3)

map.set('a',1)
map.set('b',2)
map.set(3,'c')
map.set(4,'d')

console.log (arrToSet(arr)) // -> Set {1, 2, 3}
console.log(arrToStr(arr)) // -> '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)) // -> [45, 75, 24]
console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }