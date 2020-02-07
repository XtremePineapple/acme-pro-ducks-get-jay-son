const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('hello world')
});

app.listen(3000, () => {console.log('listening thru port 3000')})