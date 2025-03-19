const express = require('express');
const app = express();

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, how are you ${name}?`);
});

app.get('/roll/:number', (req, res) => { 
    const number = parseInt(req.params.number);
    if (number === number) {
    res.send(`${Math.floor(Math.random() * (number - 0 + 1)) + 0}`)
    } else {
        res.send('You must specify a number.')
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
  });