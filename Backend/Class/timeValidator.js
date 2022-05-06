class TimeValidator {
    constructor(startTime, endTime) {
      this.startTime = startTime
      this.endTime = endTime
    }
    
    expTime = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/g
    
    validate(time) {
        if(this.expTime.exec(time)){ // regular expression to validate the required time format 
            return time >= this.startTime && time <= this.endTime // control to determine if the time provided is between Pico y Placa hours
        }else{
            throw new Error('Time not valid')
        }
    }

}

module.exports = TimeValidator