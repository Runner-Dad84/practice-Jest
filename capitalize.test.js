const capitalize = require('./capitalize')

test ('all lowercase', () => {
    expect(capitalize("sailboat")).toBe("Sailboat")
})

test ('uppercase except first', () => {
    expect(capitalize("hORSE")).toBe("HORSE")
})

test ('only first uppercase', () => {
    expect(capitalize("Paper")).toBe("Paper");
})

test ('numbers only', () => {
    expect(capitalize("12345")).toBe(TypeError);
})

test ('undefined value', () => {
    expect(capitalize(undefined)).toBe(TypeError);
})

test ('null value', () => {
    expect(capitalize(null)).toBe(TypeError);
})
