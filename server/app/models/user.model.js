module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        UserTypeID: {
            type: Sequelize.UUID
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