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
//if a character is not a number return character as string
let stringToNum = [];
function numbers (phrase){
    stringToNum = [];
    for (let i = 0; i < phrase.length; i++){
    
      let nums;
      if (baselineAlpha.find((element) => element[0] === phrase[i])){
        nums = baselineAlpha.find((element) => element[0] === phrase[i])
        stringToNum.push(nums[1]);
      } else {
        stringToNum.push(phrase[i]);
      }
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
//NEED to account for string characters!!
function cipher (numbers){
    let cipherPhrase = [];
    for (let i = 0; i < numbers.length; i++){
        let found;
        if (shiftedAlpha.find((element) => element[1] === numbers[i])) {
        found = shiftedAlpha.find((element) => element[1] === numbers[i]);
        cipherPhrase.push(found[0]);
        } else {
            cipherPhrase.push(numbers[i]);
        }
       
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

console.log(shiftedAlpha);
console.log(ceasarCipher ('Run!!', 2));
*/
/*
console.log(baselineAlpha);
shift(5)
console.log(shiftedAlpha);
*/


module.exports = ceasarCipher
