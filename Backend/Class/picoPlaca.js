const DateValidator = require("./dateValidator")
const PlateValidator = require("./plateValidator")
const TimeValidator = require("./timeValidator")

class PicoPlaca {
    constructor() {
        this.plateValidator = new PlateValidator()
        this.dateValidator = new DateValidator()
        const timeValidator = new TimeValidator('7:00', '9:30')
        const timeValidator2 = new TimeValidator('16:00', '19:30')
        this.timeValidators = [timeValidator, timeValidator2]
    }
   

    predict(){
        const time= '9:00'
        const plate = 'TBH-6454'
        const date = '2022-05-10'
        const lastDigit = plate[plate.length-1]
        console.log(lastDigit)

        const isTimeValid = this.timeValidators.some(validator => validator.validate(time))
        const isDateValid = this.dateValidator.validate(date)
        const isPlateValid = this.plateValidator.validate(plate)

        if(isPlateValid){
            if(isDateValid){
                console.log('Car can be on the road')
            }else{
                    const day = this.dateValidator.getNumberDay(date)
                    switch(day){
                        case 1:
                            if(lastDigit==1 || lastDigit==2){
                                return isTimeValid
                            }else{
                                return false
                            }   
                        case 2:
                            if(lastDigit==3 || lastDigit==4){
                                return isTimeValid
                            }else{
                                return false
                            }   
                        case 3:
                            if(lastDigit==5 || lastDigit==6){
                                return isTimeValid
                            }else{
                                return false
                            }   
                        case 4:
                            if(lastDigit==7 || lastDigit==8){
                                return isTimeValid
                            }else{
                                return false
                            }   
                        case 5:
                            if(lastDigit==9 || lastDigit==0){
                                return isTimeValid
                            }else{
                                return false
                            }   
                        default:
                             break
                    }
                }
            }
            

        }
        


    }
const picoPlaca = new PicoPlaca()
console.log(picoPlaca.predict())

module.exports = PicoPlaca