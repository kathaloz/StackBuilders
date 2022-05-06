class DateValidator {
    constructor(startTime, endTime) {
      this.startTime = startTime;
      this.endTime = endTime;
    }

    validate(date) {
        if(/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/g.exec(date)){ // regular expression to validate the required date format 
            let parts =date.split('-');
            // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
            // January - 0, February - 1, etc.
            let dateFormat = new Date(parts[0], parts[1] - 1, parts[2]);
            switch(dateFormat.getDay()){
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    console.log(dateFormat.getDay())
                    break;
                default:
                    break;
            }
            
            console.log(date)
            return true
        }else{
            console.log('No vale tu huevada de fecha')
        }
    }
    

}

module.exports = DateValidator