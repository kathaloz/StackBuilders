const DateValidator = require('../Class/plateValidator')

const dateValidator = new DateValidator()

test('Valid date', () => {
    expect(dateValidator.validate('2022-05-15')).toBe(true)
})

test('Invalid date', () => {
    expect(dateValidator.validate('2022-31-1')).toBe(false)
})