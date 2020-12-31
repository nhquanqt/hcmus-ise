module.exports = (sequelize, Sequelize) => {
	const Job = sequelize.define("job", {
		RecruitmentID: {
            type: Sequelize.INTEGER
		},
		MajorID: {
            type: Sequelize.INTEGER
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