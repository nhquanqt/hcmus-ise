module.exports = (sequelize, Sequelize) => {
	const Major = sequelize.define("major", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
		MajorName: {
			type: Sequelize.STRING
		}
	});

	return Major;
};