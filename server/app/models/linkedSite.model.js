module.exports = (sequelize, Sequelize) => {
    const LinkedSite = sequelize.define('linked_site', {
        LinkedSite: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        Email: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    });

    return LinkedSite;
};