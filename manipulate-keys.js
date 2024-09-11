function filterKeys(obj,func){

    const newObj = {}
    const items = Object.entries(obj)

    items.forEach(group => {
        if (func(group[0])){
            newObj[group[0]] = obj[group[0]]
        }
    });

    return newObj

}

function mapKeys(obj,func){

    // const item = Object.fromEntries(Object.entries(obj).map(([key,val]) => [`-${key}`, val]))

    const items = Object.entries(obj)

    items.forEach(group => {
        group[0] = func(group[0])
    });

    // console.log(item)
    const newObj = Object.fromEntries(items)
    return newObj

}

function reduceKeys(obj, func,initialValue =  ''){
    let total = initialValue

    const items = Object.entries(obj)
    items.forEach((group,index) => {

            total = index === 0? group[0] : func(total,group[0])
        
    });

    return total
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output: carbohydrates, protein, fat

console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ':'))
console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))