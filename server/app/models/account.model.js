module.exports = (sequelize, Sequelize) => {
	const Account = sequelize.define("account", {
		username: {
            type: Sequelize.STRING,
            unique: true
		},
		password: {
			type: Sequelize.STRING
		},
	});

	return Account;
};