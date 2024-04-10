function capitalize (string){
    if ((string === undefined) || (string === null)) {
        return TypeError;
    }

    const firstChar = string.charAt(0);
    const testType = /^[A-Za-z]*$/.test(firstChar);

    if (testType === false) {
        return TypeError;
    }

    return firstChar.toUpperCase() + string.slice(1);
}

module.exports = capitalize