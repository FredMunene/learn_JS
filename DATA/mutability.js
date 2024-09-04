// const person = {
//     name: 'Rick',
//     age:77,
//     country: 'US',
// }
// Method 1
const clone1 = {}
clone1.name = person.name
clone1.age = person.age
clone1.country = person.country

//Method 2
const clone2 = {name:person.name,age:person.age,country:person.country}

// method 3
// const clone3 = Object.assign({},person,{age:79}) // create a new object by copying from person
const samePerson = person

//increasing age of person by one and set country to 'FR'
person.age +=1
person.country = "FR"

// console.log(clone1.age)
// console.log(clone3.age)
// console.log(clone3.name)
// console.log(samePerson.name)
// console.log(samePerson.country)


// const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland']

// const start = 1
// let position = 0

// console.log(allowedCountries[start+position++])
// console.log(allowedCountries[start+position++])