const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'erangement_data',//database name
    'root', //username
<<<<<<< HEAD
    'chps694530', //pw
=======
    'Empyre', //pw
>>>>>>> 6ae29af392585f1217cba8810900ef3b138d5d19
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;