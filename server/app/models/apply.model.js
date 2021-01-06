module.exports = (sequelize, Sequelize) => {
    const Apply = sequelize.define('apply', {
        RecruimentID: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        SeekerID: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        ApplyDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        ApplyCV: {
            type: Sequelize.STRING
        }
    });

    return Apply;
};