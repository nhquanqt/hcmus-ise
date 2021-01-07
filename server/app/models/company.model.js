module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define("company", {
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
		FieldID: {
			type: Sequelize.UUID
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