const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'users',//database name
    'root', //username
    '', //pw
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;