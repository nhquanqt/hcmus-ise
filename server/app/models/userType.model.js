module.exports = (sequelize, Sequelize) => {
    const UserType = sequelize.define('user_type', {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        UserTypeName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isIn: [['Seeker', 'Company']]
            }
        }
    });

    return UserType;
};