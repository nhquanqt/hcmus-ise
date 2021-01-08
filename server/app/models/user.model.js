module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        UserTypeID: {
            type: Sequelize.INTEGER
        },
        AccountEmail: {
            type: Sequelize.STRING
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