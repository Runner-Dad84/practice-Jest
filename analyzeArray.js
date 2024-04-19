function average (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum/ array.length;
}

function min (array) {
    return Math.min(...array);
}

function max (array) {
    return Math.max(...array);

}

function length (array){
    return array.length;

}

function analyzeArray (array){
    const arrayFilter = array.filter(el => typeof el === "number");
    if (arrayFilter.length !== array.length) {
        return TypeError
    }

    let object = {
        average: average(array),
        min: min(array),
        max: max (array),
        length: length (array)
    }
    return object
};

/*
let object = analyzeArray([0, 4, 4, 6, 6, 10])
console.log(object);
*/


module.exports = analyzeArray