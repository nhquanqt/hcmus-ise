module.exports = (sequelize, Sequelize) => {
    const WriteReviewCompany = sequelize.define('write_review_company', {
        UserID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        CompanyID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ReviewDate: {
            type: Sequelize.DATE
        },
        Rating: {
            type: Sequelize.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        },
        ReviewDescription: {
            type: Sequelize.STRING
        }
    });

    return WriteReviewCompany;
};