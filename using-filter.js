function filterShortStateName(array){
    return array.filter(word => word.length < 7);
};
function filterStartVowel(array){
    return array.filter( word => 'aeiou'.includes(word.charAt(0).toLowerCase()));
};
//: accepts an array of strings, 
// and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
function first5Vowels(array){
    return array.filter(word => {
        const vowels = word.match(/[aeiou]/gi)
        const vowelCount = vowels ? vowels.length : 0;
        return vowelCount >= 5;
    });
};

console.log(filter5Vowels( [
    'California',
    'Louisiana',
    'North Carolina',
    'South Carolina',
    'South Dakota',
    'West Virginia',
  ]));

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
            const cap = obj.capital.length
            const namy = 'aeiou'.includes(obj.name.charAt(0))
            const vowelPresent =  obj.tag.match(/[aeiou]/gi);
            const rgn = obj.region !== "South"


            return cap >= 8 && !namy && vowelPresent && rgn
        }
    )
}