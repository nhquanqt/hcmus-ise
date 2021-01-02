module.exports = (sequelize, Sequelize) => {
	const Seeker = sequelize.define("seeker", {
		UserID: {
			type: Sequelize.INTEGER,
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
			type: Sequelize.UUID
		}
	});

	return Seeker;
};