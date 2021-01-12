module.exports = (sequelize, Sequelize) => {
    const WriteReviewSeeker = sequelize.define('write_review_seeker', {
        UserID: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        SeekerID: {
            type: Sequelize.UUID,
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

    return WriteReviewSeeker;
};