const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
const port = 3003

userRoutes(app)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
app.get('/', (req, res) => {
    res.send('Olá mundo!')
})