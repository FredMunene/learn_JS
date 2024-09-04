const citiesOnly= (array) => array.map( data => data.city )


// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
// ]))

function upperCasingStates(array){
    //array.map(function(currentValue, index,array))
    return array.map( state => state.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    );
}

// console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']

function fahrenheitToCelsius(array){
    return array.map(
        temp => Math.floor((Number(temp.slice(0,-2)) -32) * (5/9)).toString() + '°C'
        //(5/9).toString + '°C'
    );
}

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']

function trimTemp(array){
    return array.map(data =>{
        return {
            city: data.city,
            temperature: data.temperature.replace(/\s+/g,'')
        };
    });            
};

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ])); /* -> [
//     { city: 'Los Angeles', temperature: '101°F' },
//     { city: 'San Francisco', temperature: '84°F' },
//   ] */
  
  function tempForecasts(array){
    return array.map(data => {
        const temp = data.temperature.replace(/\s+/g,'').replace('°F', '');
        const tempCelsius = Math.round((temp - 32)* 5 / 9);
        const stateCapital = data.state.charAt(0).toUpperCase()+ data.state.slice(1).toLowerCase();

        return `${tempCelsius}°Celsius in ${data.city}, ${stateCapital}`
    });
  }
  
//   console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ])) // -> ['38°Celsius in Pasadena, California']