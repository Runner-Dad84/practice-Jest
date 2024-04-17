/*const { shouldUseFlatConfig } = require("eslint/lib/eslint/flat-eslint"); */

//Utility: create array of lowercase alphabet
const alphabet = [...Array(26)].map((_,i) => String.fromCharCode(i +97));

//Utility: baseline [('a', 1)..]
const baselineAlpha = alphabet.map((letter, value) => {
    let item = [letter, value + 1]
    return item;
})

function lowerCase (string){
    return string.toLowerCase();
};

//Utiltiy: convert original string from letters to numbers
let stringToNum = [];
function numbers (phrase){
    stringToNum = [];
    for (let i = 0; i < phrase.length; i++){

       let nums = baselineAlpha.find((element) => element[0] === phrase[i]);
       stringToNum.push(nums[1]);
    }
    return stringToNum;
}
 
//Utility create shift alpha
let shiftedAlpha;

function shift (rate){
shiftedAlpha = alphabet.map((letter, value) => {
    let newVal = (value + rate) % 26
    let newItem = [letter, newVal + 1]
    return newItem;
})}

//Take stringToNum and look up letters on the shiftAlpha, return new phrase

function cipher (numbers){
    let cipherPhrase = [];
    for (let i = 0; i < numbers.length; i++){

       let found = shiftedAlpha.find((element) => element[1] === numbers[i]);
       cipherPhrase.push(found[0]);
    }
    
    return cipherPhrase;
}

function ceasarCipher (phrase, factorRate){
    let string = lowerCase(phrase);
    let start = numbers(string);
    shift(factorRate);
    let ciphered = cipher(start);
    return ciphered.join('');
}
/*
shift(28);
console.log(shiftedAlpha);
console.log(numbers('danger'));
*/

/*
console.log(ceasarCipher ('Run', 2));
console.log(ceasarCipher('loW', 2));
*/

module.exports = ceasarCipher
