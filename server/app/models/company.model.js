module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define("company", {
		UserID: {
			type: Sequelize.INTEGER,
			allowNull: false,
			unique: true
		},
		FieldID: {
<<<<<<< HEAD
			type: Sequelize.INTEGER
=======
			type: Sequelize.UUID
>>>>>>> server
		},
		CompanyName: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		Location: {
			type: Sequelize.STRING,
			allowNull: false
		},
		CompanyEmail: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		CompanyDescription: {
			type: Sequelize.STRING
		}
	});

	return Company;
};