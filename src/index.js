const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const morgan = require('morgan');
const db = require('./config/db');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(morgan('combined'));

app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//connect DB
db.connect();
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        heppers: {
            sum: (a, b) => a + b, //ở đây ta định nghĩa hàm sum để sử dụng

            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sort.type];
                return `<a href="?_sort&column=${field}&type=${type}">
                            
                        <span class="${icon}"></span>
                            </a>`;
            },
        },
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
