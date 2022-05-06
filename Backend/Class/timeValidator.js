class TimeValidator {
    constructor(startTime1, endTime1, startTime2, endTime2) {
      this.startTime1 = startTime1;
      this.endTime1 = endTime1;
      this.startTime2 = startTime2;
      this.endTime2 = endTime2;
    }

    validate(time) {
        if(/^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/g.exec(time)){ // regular expression to validate the required time format 
            return time>=this.startTime1 && time<=this.endTime1 || time>=this.startTime2 && time<=this.endTime2
        }else{
            console.log('No vale tu huevada de tiempo')
        }
    }

}

module.exports = TimeValidator