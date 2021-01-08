module.exports = (sequelize, Sequelize) => {
	const SkillDetail = sequelize.define("skill_detail", {
        SeekerID: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		SkillSetID: {
			type: Sequelize.INTEGER
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