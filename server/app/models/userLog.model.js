module.exports = (sequelize, Sequelize) => {
    const UserLog = sequelize.define('user_log', {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        UserID: {
            type: Sequelize.UUID,
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