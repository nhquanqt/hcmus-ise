module.exports = (sequelize, Sequelize) => {
    const AccountDetail = sequelize.define('account_detail', {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        Email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        DateOfCreating: {
            type: Sequelize.DATE,
            allowNull: false
        },
        DisplayName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return AccountDetail;
};