module.exports = (sequelize, Sequelize) => {
    const UserType = sequelize.define('user_type', {
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