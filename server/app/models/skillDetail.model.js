module.exports = (sequelize, Sequelize) => {
	const SkillDetail = sequelize.define("skill_detail", {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
        SeekerID: {
			type: Sequelize.UUID,
			allowNull: false
		},
		SkillSetID: {
			type: Sequelize.UUID
		},
		SkillName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
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

	return SkillDetail;
};