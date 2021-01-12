module.exports = (sequelize, Sequelize) => {
    const Apply = sequelize.define('apply', {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        RecruimentID: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        SeekerID: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        ApplyDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        ApplyCV: {
            type: Sequelize.STRING
        }
    });

    return Apply;
};