module.exports = (sequelize, Sequelize) => {
	const SkillSet = sequelize.define("skill_set", {
        id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV1
		},
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