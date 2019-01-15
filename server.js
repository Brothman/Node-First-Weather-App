// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!')
// })

const express = require('express');
const app = express();
const opn = require('opn');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = '4a18751758537715284e99a961050404';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.render('index');
});

app.post('/', (request, response) => {
    const city = request.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    request(url, (error, weatherResponse, body) => {
        if (error) {
            response.render('index', { weather: null, error: 'Error, please try again' });
        }
        else {
            const weather = JSON.parse(body);
            if (weather.main == undefined) {
                response.render('index', { weather: null, error: 'Error, please try again' });
            }
            else {
                const weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                response.render('index', { weather: weatherText, error: null });
                 
            }
        }
    });
});

app.listen(3000, () => {
    console.log('First Node app listening on port 3000!');
    opn('http://localhost:3000/');
});
