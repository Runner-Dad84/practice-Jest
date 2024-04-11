const calculator = require('./calculator')

test ('add numbers', () => {
    expect(calculator.add(5, 12)).toBe(17)
})

test ('subtract numbers', () => {
    expect(calculator.subtract(4, 5)).toBe(-1)
})

test ('multiply numbers', () => {
    expect(calculator.multiply(7, 11)).toBe(77)
})

test ('divide numbers', () => {
    expect(calculator.divide(16, 8)).toBe(2)
})

test ('divide by zero', () => {
    expect(calculator.divide(5, 0)).toBe(TypeError)
})

test ('letters add', () => {
    expect(calculator.add("k", 12)).toBe(TypeError)
})

test ('letters divide', () => {
    expect(calculator.divide(55, "g")).toBe(TypeError)
})

test ('subtract null', () => {
    expect(calculator.subtract(55, null)).toBe(TypeError)
})

test ('multiply undefined', () => {
    expect(calculator.multiply(undefined, 5)).toBe(TypeError)
})




