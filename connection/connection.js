const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'users',
    'root', //username
    'Superfoxgarfmode22!', //pw
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: true
    }
);

module.exports = connection;