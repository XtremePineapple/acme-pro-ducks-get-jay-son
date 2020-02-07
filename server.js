const express = require('express');
const path = require('path');
const app = express();

const readJSON = require('./db')

console.log(readJSON)

//const prods =  .then(ret => console.log(ret))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get('/api/products', (req, res, next) => {
    readJSON.readJSON('./products.json')
    .then( prods => res.send(prods))
}); 

app.listen(3002, () => {console.log('listening thru port 3002')})