module.exports = (sequelize, Sequelize) => {
	const Major = sequelize.define("major", {
<<<<<<< HEAD
=======
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
>>>>>>> server
		MajorName: {
			type: Sequelize.STRING
		}
	});

	return Major;
};