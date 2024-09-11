//  import { pick, omit } from "./pick-omit"
 function fusion(param1,param2){

    const newObj = {}
    // array
    // if (typeof param1 === typeof param2){


        const keys1 = Object.keys(param1)
        const keys2 = Object.keys(param2)

        //unique keys
        let allKeys = [...new Set([...keys1, ...keys2])];

    
        for (const key of allKeys) {
            const val1 = param1[key];
            const val2 = param2[key];

            // handle array
            if (Array.isArray(val1) && Array.isArray(val2)){
                newObj[key] = [...val1,...val2]
            } 

            // handle string concatenation with a space
            else if(typeof val1 === 'string' && typeof val2 === 'string') {
                newObj[key] = `${val1} ${val2}`;

            }
            // // handle number addition
            else if (typeof val1 === 'number' && typeof val2 === 'number' ){
                newObj[key] = val1 + val2

            }
            // handle recursive object merging
            else if (typeof val1 === 'object' && typeof val2 === 'object'){
                newObj[key] = fusion(val1,val2)
            }
            // handle mismatch types               
            else {
                newObj[key] = val2 !== undefined ? val2 : val1;
            }
        }

    //     let idKey = keys1[0]

    //     if ( param1[idKey] instanceof  Array){
    //         for (key of allKeys){
    //             if (keys1.includes(key) && keys2.includes(key)){
    //                 let arr = param1[key].concat(param2[key])
    //                 newObj[key] = arr
    //             } else{
    //                 if (param1[key]){
    //                     newObj[key] = param1[key]
    //                 }
    //                 if (param2[key]){
    //                     newObj[key] = param2[key]
    //                 }
    //             }
    //         }

    //         return newObj
    //     }
    //     if ( typeof param1[idKey] ===  'string' ){
    //         for (key of allKeys){
    //             if (keys1.includes(key) && keys2.includes(key)){
    //                 newObj[key] = param1[key] + ' ' +param2[key]
    //             } else{
    //                 if (param1[key]){
    //                     newObj[key] = param1[key]
    //                 }
    //                 if (param2[key]){
    //                     newObj[key] = param2[key]
    //                 }
    //             }
    //         }

    //         return newObj
    //     }
    //     if ( typeof param1[idKey] ===  'number'){
    //         for (key of allKeys){
    //             if (keys1.includes(key) && keys2.includes(key)){
    //                 newObj[key] = param1[key] +param2[key]
    //             } else{
    //                 if (param1[key]){
    //                     newObj[key] = param1[key]
    //                 }
    //                 if (param2[key]){
    //                     newObj[key] = param2[key]
    //                 }
    //             }
    //         }

            return newObj
    //     }
    //     if ( param2[idKey] instanceof  Map){
    //         return'map'
    //     }
    // }     
    // return 'ngori'
 }

 // array
console.log(fusion({ arr: [1, "2"] }, { arr: [2] }));
 // -> { arr: [ 1, '2', 2 ] }
console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); 
// ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

//strings; concate with a space
console.log(fusion({ str: "salem" }, { str: "alem" })); 
// -> { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "" })); 
// -> { str: 'salem ' }

// // numbers; add them
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); 
// -> { a: 20, b: 10, c: 1 }

//object; join recursively
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); 
// -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } })); 
// -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

//mismatch: replace value of first object with those of  second object 
console.log(fusion({ a: "hello", b: [] }, { a: 4 })); 
// -> { a: 4, b: [] }
