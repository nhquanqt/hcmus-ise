module.exports = (sequelize, Sequelize) => {
    const AccountDetail = sequelize.define('account_detail', {
        Email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        DisplayName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return AccountDetail;
};