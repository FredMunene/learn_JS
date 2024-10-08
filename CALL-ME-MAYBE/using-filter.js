function filterShortStateName(array){
    return array.filter(word => word.length < 7);
};
function filterStartVowel(array){
    return array.filter( word => 'aeiou'.includes(word.charAt(0).toLowerCase()));
};
//: accepts an array of strings, 
// and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
function filter5Vowels(array){
    return array.filter(word => {
        const vowels = word.match(/[aeiou]/gi)
        const vowelCount = vowels ? vowels.length : 0;
        return vowelCount >= 5;
    });
};

// console.log(first5Vowels( [
//     'California',
//     'Louisiana',
//     'North Carolina',
//     'South Carolina',
//     'South Dakota',
//     'West ',
//   ]));

function filter1DistinctVowel(array){
    return array.filter( word => {
        const vowels = word.match(/[aeiou]/gi);
        if(!vowels) return false;

        const uniqueVowels = new Set(vowels.map( v => v.toLowerCase()));

        return uniqueVowels.size === 1;
    });
};

function multiFilter(array){
    return array.filter(obj => {
            const cap = obj.capital.length >= 8
            const namy = 'aeiou'.includes(obj.name.charAt(0).toLowerCase())
            const vowelPresent =  /[aeiou]/i.test(obj.tag);
            const rgn = obj.region !== "South"


            return cap && !namy && vowelPresent && rgn
        }
    )
}
console.log(multiFilter( [
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ])
)