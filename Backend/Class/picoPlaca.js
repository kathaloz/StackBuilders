const DateValidator = require("./dateValidator")
const PlateValidator = require("./plateValidator")
const TimeValidator = require("./timeValidator")

class PicoPlaca {
    constructor() {
        this.plateValidator = new PlateValidator()
        this.dateValidator = new DateValidator()
        const timeValidator = new TimeValidator('07:00', '09:30')
        const timeValidator2 = new TimeValidator('16:00', '19:30')
        this.timeValidators = [timeValidator, timeValidator2]
    }


    predict(data) {

        const isWeekend = this.dateValidator.validateWeekends(data.date)
        const isPlateValid = this.plateValidator.validate(data.plate)

        if (isPlateValid) {
            if (isWeekend) return true

            const lastDigit = data.plate[data.plate.length - 1]
            const day = this.dateValidator.getNumberDay(data.date)
            if (this.dateValidator.validateDays(lastDigit, day)) return true

            return !this.timeValidators.some(validator => validator.validate(data.time))
        }




    }



}

module.exports = PicoPlaca