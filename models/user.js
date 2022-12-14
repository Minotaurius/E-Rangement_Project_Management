const { DataTypes, Model, INTEGER } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 3
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 6
        }
    }
}, {
    sequelize: require('../connection/connection'),
    modelName: 'user',
    hooks: {
        async beforeCreate(user) {
            const secure_pass = await bcrypt.hash(user.password, 10);
            user.password = secure_pass;
        }
    }
});

User.prototype.validatePassword = async function (password, stored_password) {
    return await bcrypt.compare(password, stored_password);
}

module.exports = User;