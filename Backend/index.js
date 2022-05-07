const express = require('express')
const cors = require('cors')
const TimeValidator = require('./Class/timeValidator')
const DateValidator = require('./Class/dateValidator')
const PicoPlaca = require('./Class/picoPlaca')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {

    res.send('Hello World!')
});

app.post('/validate', (req, res) => {
    const picoPlaca = new PicoPlaca()
    const isValid = picoPlaca.predict(req.body)
    return res.json({ isValid })
})

app.listen(port, () => {
    console.log(`Working in http://localhost:${port}`)
})

