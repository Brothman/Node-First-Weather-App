<h1 align="center"> Node First Weather App </h1>
<p align="center">
  <a href="https://benji-node-weather-app.herokuapp.com/">
    <img alt="Funny Weather Picture" src=https://www.funny-jokes.com/fun_pictures/weather.jpg" />
  </a>
</p>

This is a barebones weather application to find the temperature of a city on the internet. The project is an exercise to learn the basics of an Express server built on top of Node.js. I used the OpenWeatherMap API to gather weather data. Users have the ability to choose Fahrenheit or Celsius to filter their choice of technology. This application is also my first experience with EJS, Embedded Javascript. 

# Setting up an Express Server
``` 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

```
# Find it Live
https://benji-node-weather-app.herokuapp.com/
