module.exports = (sequelize, Sequelize) => {
	const Field = sequelize.define("field", {
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