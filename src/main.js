const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

// import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

// Set template engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// HTTP logger
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        flag: false
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
