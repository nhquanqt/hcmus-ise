module.exports = (sequelize, Sequelize) => {
	const Major = sequelize.define("major", {
		MajorName: {
			type: Sequelize.STRING
		}
	});

	return Major;
};