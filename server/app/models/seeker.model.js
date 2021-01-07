module.exports = (sequelize, Sequelize) => {
	const Seeker = sequelize.define("seeker", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
		UserID: {
			type: Sequelize.UUID,
			allowNull: false,
			unique: true
		},
		FullName: {
			type: Sequelize.STRING,
			allowNull: false
		},
		DateOfBirth: {
			type: Sequelize.DATE,
			allowNull: false
		},
		PhoneNumber: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Location: {
			type: Sequelize.STRING,
			allowNull: false
		},
		CV: {
			type: Sequelize.STRING
		}
	});

	return Seeker;
};