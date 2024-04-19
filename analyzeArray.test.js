const analyzeArray = require('./analyzeArray.js')

test ('positive numbers', () => {
    expect(analyzeArray([2, 4, 6, 12])).toStrictEqual({ "average": 6, "min": 2, "max": 12, "length": 4 })
})

test ('positive numbers', () => {
    expect(analyzeArray([-3, 0, -12, -5])).toStrictEqual({ "average": -5, "min": -12, "max": 0, "length": 4 })
})

test ('letter and numbers', () => {
    expect(analyzeArray(["a", 5, 3, 2])).toBe(TypeError)
})

test ('numbers with null', () => {
    expect(analyzeArray([6, 5, null, 2])).toBe(TypeError)
})