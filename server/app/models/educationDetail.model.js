module.exports = (sequelize, Sequelize) => {
	const EducationDetail = sequelize.define("education_detail", {
		SeekerID: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		MajorID: {
			type: Sequelize.INTEGER
		},
		Degree: {
			type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: [['Bachelor', 'Master', 'Doctoral']]
            }
		},
		UniversityName: {
			type: Sequelize.STRING,
			allowNull: false
		},
		GPA: {
			type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                max: 10
            }
		}
	});

	return EducationDetail;
};