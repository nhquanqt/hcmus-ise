module.exports = (sequelize, Sequelize) => {
    const UserLog = sequelize.define('user_log', {
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        UserLogDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        UserLogDescription: {
            type: Sequelize.STRING
        }
    });

    return UserLog;
};