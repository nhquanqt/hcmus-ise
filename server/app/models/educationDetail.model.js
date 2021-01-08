module.exports = (sequelize, Sequelize) => {
	const EducationDetail = sequelize.define("education_detail", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
		SeekerID: {
			type: Sequelize.UUID,
			allowNull: false
		},
		MajorID: {
			type: Sequelize.UUID
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