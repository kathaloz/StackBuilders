const MONDAY = 1


class DateValidator {
    expDate = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/g

    validateWeekends(date) {
        if (this.expDate.exec(date)) { // regular expression to validate the required date format 
            const day = this.getNumberDay(date)
            const dayMaps = { 6: true, 0: true } // 6:Saturday && 0:Sunday
            return dayMaps[day] || false //output = true on Saturday and Sunday && false on the other days to evaluate Pico y Placa
        } else {
            throw new Error('Date not valid')
        }
    }

    validateDays(lastDigit, day) {
        const plateDayMaps = { 1: MONDAY, 2: MONDAY, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5 }
        return plateDayMaps[lastDigit] !== day
    }

    getNumberDay(date) { // funtion to get the number of the day with a date input
        const parts = date.split('-')
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        const dateFormat = new Date(parts[0], parts[1] - 1, parts[2])
        const day = dateFormat.getDay()
        return day
    }


}

module.exports = DateValidator