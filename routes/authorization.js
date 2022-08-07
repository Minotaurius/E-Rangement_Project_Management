const auth = require('express').Router();
const { upsert } = require('../models/User');
const User = require('../models/User');
const { loggedIn } = require('./loggedin');

auth.post('/register', loggedIn, (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        req.session.erros = ['Ope, something went wrong. Please check your info and try again'];
        return res.redirect('/register');
    }

    User.findOne({
        where: {
            email
        }
    }).then(user => {
        if (user) {
            req.session.errors = ['Ope! Someone beat you to using that email address'];
            return res.redirect('/register');
        }

        User.create(req.body)

        .then(new_user => {
            req.session.save(() => {
                req.session.user_id = new_user.isSoftDeleted;
                res.redirect('/')
            });
        }).catch(err => {
            req.session.errors - err.errors.map(e => e.message);
            res.redirect('/register');
        });
    });
});

auth.post('/login', loggedIn, (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        req.session.errors = ['Ope! Something went wrong. Please check your info and try again'];
        return res.redirect('/login');
    }

    User.findOne({
        where: {
            email
        }
    }).then(async user => {
        if (!user) {
            req.session.errors = ['Ope! There is no user with that e-mail address'];
            return res.redirect('/login');
        }
        const pass_is_valid = await user.validatePassword(password, user.password);
         if (!pass_is_valid) {
            req.session.errors = ['Ope! Wrong password, please try again'];
            res.redirect('/login');
         }

         req.session.save(() => {
            req.session.user_id = user.id;
            res.redirect('/')
         });
    })
});

auth.get('/logout', (req, res) => {
    if(!req.session.user_id) return res.redirect('/');

    req.session.destroy(() => {
        res.redirect('/');
    });
})

module.exports = auth;