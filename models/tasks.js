const { DataTypes, Model } = require('sequelize');
const User = require('./User');

class Tasks extends Model { }

Tasks.init({
    task: {
    type: DataTypes.STRING,
    allowNull: false
    },
    who: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    sequelize: require('../connection/connection'),
    modelName: 'project',
    hooks: {
    }
});

User.hasMany(Tasks);
Tasks.belongsTo(User, {foreignKey: User.id});

module.exports = Tasks;