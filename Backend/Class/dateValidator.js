class DateValidator {
    expDate=/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/g
    
    validate(date) {
        if(this.expDate.exec(date)){ // regular expression to validate the required date format 
            const day = this.getNumberDay(date)
            const dayMaps = {6:true, 0:true} // 6:Saturday && 0:Sunday
            return dayMaps[day] ||false //output true on Saturday and Sunday && false on the other days to evaluate Pico y Placa
        }else{
            throw new Error('Date not valid')
        }
    }

    getNumberDay(date){
        const parts =date.split('-')
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        const dateFormat = new Date(parts[0], parts[1] - 1, parts[2])
        const day=dateFormat.getDay()
        return day
    }
    

}

module.exports = DateValidator