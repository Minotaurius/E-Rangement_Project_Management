const express = require('express');
const path = require('path');
const { engine } = require ('express-handlebars');
const PORT = process.env.PORT || 3333;
const db = require ('./connection/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
const { view_routes, auth } = require('./routes/index')
const app = express();
app.use(express.static(path.join('front')));
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore ({ db }),
    saveUninitialized: false,
    resave: false,
    cookie: {

    }
}));

app.use('/', view_routes);
app.use('/auth', auth);

app.get('/', (req, res) => {
    res.render ("index")
})

db.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
    });

