module.exports = (sequelize, Sequelize) => {
	const Recruitment = sequelize.define("recruitment", {
		id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
		CompanyID: {
			type: Sequelize.UUID,
		},
		RecruitmentDate: {
			type: Sequelize.DATE,
			allowNull: false
		},
		ExpiredDate: {
			type: Sequelize.DATE,
			allowNull: false
		},
		Description: {
			type: Sequelize.STRING
		},
		Salary: {
			type: Sequelize.INTEGER,
			validate: {
				min: 1
			}
		},
		Requirement: {
			type: Sequelize.STRING
		}
	});

	return Recruitment;
};