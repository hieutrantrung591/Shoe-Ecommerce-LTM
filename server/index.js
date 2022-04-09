var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/cors', (req, res) => { 
    res.send('This has CORS enabled'); 
})

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`CORS-enabled web server listening on port ${PORT}`));
