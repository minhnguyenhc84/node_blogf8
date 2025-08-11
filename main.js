const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/news', (req, res) => {
    res.send('Hello News!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
