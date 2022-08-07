const auth = require('express').Router();
const User = require('../models/User');
const { loggedIn } = require('./loggedin');

auth.post('/register')