module.exports = (sequelize, Sequelize) => {
	const Recruitment = sequelize.define("recruitment", {
		id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
		CompanyID: {
			type: Sequelize.INTEGER,
		},
		RecruitmentDate: {
			type: Sequelize.DATE,
			allowNull: false
		},
		ExpiredDate: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				min: 1
			}
		},
		Description: {
			type: Sequelize.STRING
		},
		Salary: {
			type: Sequelize.INTEGER,
			validate: {
				min: 1
			}
		}
	});

	return Recruitment;
};