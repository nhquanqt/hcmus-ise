module.exports = (sequelize, Sequelize) => {
	const SkillSet = sequelize.define("skill_set", {
		SkillSetName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        SkillSetDescription: {
            type: Sequelize.STRING,
            allowNull: false,
        }
	});

	return SkillSet;
};