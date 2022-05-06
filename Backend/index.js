const express = require('express')
const cors = require('cors')
const TimeValidator = require('./Class/timeValidator')
const DateValidator = require('./Class/dateValidator')
const PicoPlaca = require('./Class/picoPlaca')

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
    const picoPlaca = new PicoPlaca()
    const isValid = picoPlaca.predict()
    return res.send(isValid)
})

app.listen(port, () => {
    console.log(`Working in http://localhost:${port}`)
}) 

