function filterValues(obj, func){

    // returns obj with
    const newObj = {}
    // returns obj with
    const  keys  = Object.keys(obj)
    keys.forEach(key => {
        if (func(obj[key])){
            newObj[key] = obj[key]
        }
    });

    return newObj
}

function mapValues(obj, func){
    const newObj = {}
    // returns obj with
    const  keys  = Object.keys(obj)

    keys.forEach(key => {
        newObj[key] = func(obj[key])
        
    });

    return newObj

}

function reduceValues(obj, func,initialValue = 0){
    var sum = initialValue
    const  keys  = Object.keys(obj)

    keys.forEach(key => {
        sum =  func(sum,obj[key])  
    });

    return sum

}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// // output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v+1))
// // output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// // output: 37
console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3))

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }
