module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        // UserTypeID: {
        //     type: Sequelize.UUID
        // },
        UserType: {
            type: Sequelize.STRING,
            validate: {
                isIn: [["company", "seeker"]]
            }
        },
        AccountEmail: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        // Username: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        //     unique: true
        // },
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