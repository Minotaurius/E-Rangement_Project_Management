const { Sequelize } = require('sequelize');

const connection = process.env.JAWSDB_URL ? new Sequelize (process.env.JAWSDB_URL) :
new Sequelize (
    'erangement_data',//database name
    'root', //username
    'Superfoxgarfmode22!', //pw
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;