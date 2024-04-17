const ceasarCipher = require('./caesarCipher')

test ('apple', () => {
    expect(ceasarCipher('apple', 5)).toBe('vkkgz')
})

test ('danger', () => {
    expect(ceasarCipher('danger', 28)).toBe('bylecp')
})
/*
test ('hi you', () => {
    expect(ceasarCipher('danger', 7)).toBe('bylecp')
})
*/