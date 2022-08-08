const { DataTypes, Model } = require('sequelize');
const User = require('./User');
// const bcrypt = require('bcrypt');

class Project extends Model { }

Project.init({
    task: {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
    sequelize: require('../connection/connection'),
    modelName: 'project',
    hooks: {
        // async beforeCreate(user) {
        //     const secure_pass = await bcrypt.hash(user.password, 10);
        //     user.password = secure_pass;
        // }
    }
});

User.hasMany(Project);
Project.belongsTo(User);

module.exports = Project;