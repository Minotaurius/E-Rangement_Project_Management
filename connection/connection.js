const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'erangement_data',//database name
    'root', //username
    'Empyre', //pw
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;