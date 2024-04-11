const reverseString = require('./reverseString')

test ('all letters', () => {
    expect(reverseString("zebra")).toBe("arbez")
})

test ('all characters', () => {
    expect(reverseString("$&%*!!")).toBe("!!*%&$")
})

test ('no characters', () => {
    expect(reverseString("")).toBe("")
})

test ('value is null', () => {
    expect(reverseString(null)).toBe(TypeError)
})

test ('value is undefined', () => {
    expect(reverseString(undefined)).toBe(TypeError)
})