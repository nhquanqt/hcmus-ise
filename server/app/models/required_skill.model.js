module.exports = (sequelize, Sequelize) => {
	const RequiredSkill = sequelize.define("required_skill", {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        RecruitmentID: {
			type: Sequelize.UUID,
			allowNull: false
		},
		SkillSetID: {
			type: Sequelize.UUID
		},
		SkillName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Level: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 9
            }
        }
	});

	return RequiredSkill;
};