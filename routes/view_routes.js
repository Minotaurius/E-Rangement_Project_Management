const view_router = require('express').Router();
const { loggedIn } = require('./loggedin');
const fs = require('fs')
const User = require('../models/User');

view_router.get('/', loggedIn, (req, res) => {
    const user_id = req.session.user_id;

    if (user_id) {
        return User.findAll({

            attributes: ['id', 'email', 'username']
        })
        .then(users => {
            // user = {
            //     username: user.username,
            //     email: user.email
            // };
            users = users.map(user => {
                return {
                    id: user.id,
                    username: user.username,
                }
            })
            res.render('index', { users });
        });
    }

    res.render('index');
});

view_router.get('/login', loggedIn, (req, res) => {
    res.render('login', { errors: req.session.errors});
});

view_router.get('/register', loggedIn, (req, res) => {
    res.render('register', { errors: req.session.errors });
});

module.exports = view_router;