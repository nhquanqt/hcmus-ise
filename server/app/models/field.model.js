module.exports = (sequelize, Sequelize) => {
	const Field = sequelize.define("field", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
		FieldName: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		Description: {
			type: Sequelize.STRING
		}
	});

	return Field;
};