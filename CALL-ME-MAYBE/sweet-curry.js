// currying
// function add (a) {
//     return function (b) {
//         return a + b;
//     }
// }

// console.log(add(3)(4))


function mult2(a){
    return function(b){
        return a * b;
    }
}

function add3(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

function sub4(a){
    return function(b){
        return function(c){
            return function(d){
                return a - b - c - d;
            }
        }
    }
}

console.log(sub4(4)(7)(10)(30))