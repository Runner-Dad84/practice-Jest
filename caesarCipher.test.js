const ceasarCipher = require('./caesarCipher')

test ('apple', () => {
    expect(ceasarCipher('apple', 5)).toBe('vkkgz')
})

test ('danger', () => {
    expect(ceasarCipher('danger', 28)).toBe('bylecp')
})

test ('DaNgEr', () => {
    expect(ceasarCipher('DaNgEr', 28)).toBe('bylecp')
})
