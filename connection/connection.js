const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'users',//database name
    'root', //username
    'Superfoxgarfmode22!', //pw
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;