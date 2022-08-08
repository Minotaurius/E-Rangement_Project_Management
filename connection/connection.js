const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'users',//database name
    'root', //username
    'chps694530', //pw
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;