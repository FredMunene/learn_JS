function hasCity(country, array) {
    return function(city){
        if (array.includes(city)){
            return `${city} is a city from ${country}`
        } else{
            return `${city} is not a city from ${country}`
        }
    }
}

// console.log(hasCity('Kenya',['Nai','Kis'])('Nali'))