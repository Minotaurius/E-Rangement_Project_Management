const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'erangement_data',//database name
    'root', //username
<<<<<<< HEAD
    'Superfoxgarfmode22!', //pw
=======
    'Empyre', //pw
>>>>>>> 7c61e2190cac97adfabb06e69f539ea516527260
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;