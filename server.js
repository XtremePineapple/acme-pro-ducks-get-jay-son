const express = require('express');
const path = require('path');
const app = express();
const readJSON = require('./db');

console.log(readJSON)

//const prods =  .then(ret => console.log(ret))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next) => {
    readJSON.readJSON('./products.json')
    .then( prods => res.send(prods))
    .catch(ex => next(ex))
});

app.listen(3002, () => {console.log('listening thru port 3002')})