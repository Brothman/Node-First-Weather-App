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

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.listen(3000, () => {
    console.log('First Node app listening on port 3000!');
})
