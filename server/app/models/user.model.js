module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        UserTypeID: {
            type: Sequelize.INTEGER
        },
        AccountEmail: {
            type: Sequelize.INTEGER
        },
        Username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        LinkedAccount: {
            type: Sequelize.STRING
        }
    });

    return User;
};