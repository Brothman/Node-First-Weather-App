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
    response.render('index', { weather: null, error: null });
});

app.post('/', (request1, response) => {
    const city = request1.body.city;
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

const env = process.env.NODE_ENV || 'dev';

//process.env.PORT lets the port be set by Heroku
//PORT will be undefined if run locally with node server.js
app.listen(process.env.PORT || 3000, () => {
    if (env == 'dev') {
        console.log('First Node app listening on port 3000!');
        opn('http://localhost:3000/');
    }
});