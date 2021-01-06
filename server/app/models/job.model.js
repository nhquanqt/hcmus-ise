module.exports = (sequelize, Sequelize) => {
	const Job = sequelize.define("job", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
		RecruitmentID: {
            type: Sequelize.UUID
		},
		MajorID: {
            type: Sequelize.UUID
        },
        JobName: {
            type: Sequelize.STRING
        },
        JobType: {
            type: Sequelize.STRING
        },
        JobDescription: {
            type: Sequelize.STRING
        }
    });

	return Job;
};