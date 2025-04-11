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

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:itemIndex', (req, res) => {
    const itemIndex = parseInt(req.params.itemIndex);  // Parse itemIndex to an integer
    const collectible = collectibles[itemIndex];
    if (collectible) {
        res.send('So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!')
    }
    else {
      res.send(`This item is not yet in stock. Check back soon!`)
    }
  })

app.listen(3000, () => {
    console.log('Listening on port 3000');
  });