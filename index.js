
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/conversation', (req,res) => {
    console.log(req.headers["authorization"])
    console.log(req.body)
    res.send('<b>Hi Bhavya</b>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})