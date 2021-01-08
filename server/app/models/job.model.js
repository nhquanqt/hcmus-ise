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
<<<<<<< HEAD
            type: Sequelize.INTEGER
=======
            type: Sequelize.UUID
>>>>>>> server
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