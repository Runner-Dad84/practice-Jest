function reverseString (string){
    if ((string === null) || (string === undefined)){
        return TypeError;
    }

    let array = Array.from(string);
    return array.reverse().join("");
}


module.exports = reverseString