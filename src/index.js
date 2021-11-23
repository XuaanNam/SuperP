const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const route = require('./routes');
const morgan = require('morgan');
const db = require('./config/db');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
require('dotenv').config();

var port = process.env.PORT || '3000';
app.set('port', port);
require('dotenv').config();

app.use(cookieParser());
app.use(morgan('combined'));
app.use(compression());
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//connect DB
db.connect();
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/me', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
