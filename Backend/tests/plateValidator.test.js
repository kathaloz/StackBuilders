const PlateValidator = require('../Class/plateValidator')

const plateValidator = new PlateValidator()

test('Invalid plate', () => {
    expect(plateValidator.validate('TBH-54')).toBe(false)
})


test('Valid plate', () => {
    expect(plateValidator.validate('TBC-5432')).toBe(true)
})