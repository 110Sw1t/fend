var path = require('path')
const express = require('express')
const cors = require('cors')
const { getSentimentAnalysis } = require('./services/meaningCloud');
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.static('dist'))
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/sentiment', function (req, res) {
    const url = req.query.url;
    getSentimentAnalysis(url)
    .then(function (response) {
        let {status, data, headers: {['content-type']:contentType}} = response;
        res.status(status).contentType(contentType).send(data)
    })
    .catch(function (error) {
        console.error(error)
        res.status(500).send(error);
    })
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

