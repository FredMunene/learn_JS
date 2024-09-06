function filter(array,func){
    const truthy = [];
    for (let index = 0; index < array.length;index++){
        if (func(array[index],index,array)){
            truthy.push(array[index])
        }
    }
    return truthy;
}
function reject(array,func){
    const falsey = [];
    for (let index = 0; index < array.length;index++){
        if (!func(array[index],index,array)){
            falsey.push(array[index])
        }
    }
    return falsey;

}
function partition(array,func){
    const truthy = [];
    const falsey = [];
    for (let index = 0; index < array.length;index++){
        if (func(array[index],index,array)){
            truthy.push(array[index])
        } else {
            falsey.push(array[index])
        }
    }
    return [truthy,falsey];

}

// var users = [
//     { 'user': 'barney',  'age': 36, 'active': false },
//     { 'user': 'fred',    'age': 40, 'active': true },
//     { 'user': 'pebbles', 'age': 1,  'active': false }
//   ];

// console.log(partition(users, num => num.active === true))
