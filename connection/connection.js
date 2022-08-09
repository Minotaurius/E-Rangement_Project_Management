const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'erangement_data',//database name
    'root', //username
<<<<<<< HEAD
    'chps694530', //pw
=======
    'Empyre', //pw
>>>>>>> 42f9962d4e5a9c17cb80dc941c99708d8563917e
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;