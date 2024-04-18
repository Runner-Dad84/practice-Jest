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

test ('run!!', () => {
    expect(ceasarCipher('run!!', 3)).toBe('ork!!')
})

test ('52 ray st.', () => {
    expect(ceasarCipher('52 ray st.', 5)).toBe('52 mvt no.')
})

test ('No shift', () => {
    expect(ceasarCipher('no shift!', 0)).toBe('no shift!')
})
