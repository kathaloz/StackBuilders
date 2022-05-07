class PlateValidator {

    expPlate = /[a-zA-Z]{3}-[0-9]{3,4}/g

    validate(plate) {
        if (this.expPlate.exec(plate)) { // regular expression to validate the required plate format 
            return true
        } else {
            throw new Error('Plate not valid')
        }
    }
}

module.exports = PlateValidator