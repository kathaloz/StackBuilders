const express = require('express')
const cors = require('cors')
const TimeValidator = require('./Class/timeValidator')
const DateValidator = require('./Class/dateValidator')

const app = express()
const port = 3000


app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());


app.get('/validate', (req, res) => {
    const time = req.query.time
    const date = req.query.date
    const timeValidator = new TimeValidator('7:00','9:30','16:00', '19:30')
    const dateValidator = new DateValidator()
    const isValid = dateValidator.validate(date)
    return res.send(isValid)
})

app.listen(port, () => {
    console.log(`Working in http://localhost:${port}`)
}) 

