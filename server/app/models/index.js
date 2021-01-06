const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.job = require("./job.model.js")(sequelize, Sequelize);
db.major = require("./major.model.js")(sequelize, Sequelize);
db.company = require("./company.model.js")(sequelize, Sequelize);
db.field = require("./field.model.js")(sequelize, Sequelize);
db.recruitment = require("./recruitment.model.js")(sequelize, Sequelize);
db.apply = require("./apply.model.js")(sequelize, Sequelize);
db.seeker = require("./seeker.model.js")(sequelize, Sequelize);
db.education_detail = require("./educationDetail.model.js")(sequelize, Sequelize);
db.skill_detail = require("./skillDetail.model.js")(sequelize, Sequelize);
db.skill_set = require("./skillSet.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.account_detail = require("./accountDetail.model.js")(sequelize, Sequelize);
db.linked_site = require("./linkedSite.model.js")(sequelize, Sequelize);
db.user_type = require("./userType.model.js")(sequelize, Sequelize);
db.user_log = require("./userLog.model.js")(sequelize, Sequelize);
db.write_review_company = require("./writeReviewCompany.model.js")(sequelize, Sequelize);
db.write_review_seeker = require("./writeReviewSeeker.model.js")(sequelize, Sequelize);


db.user.belongsTo(db.user_type, {foreignKey: "UserTypeID"});
db.user_log.belongsTo(db.user, {foreignKey: "UserID"});

db.job.belongsTo(db.major, {foreignKey: "MajorID"});
db.job.belongsTo(db.recruitment, {foreignKey: "RecruitmentID"});
db.recruitment.belongsTo(db.company, {foreignKey: "CompanyID"});
db.company.belongsTo(db.field, {foreignKey: "FieldID"});
db.company.belongsTo(db.user, {foreignKey: "UserID"});

db.seeker.belongsTo(db.user, {foreignKey: "UserID"});
db.education_detail.belongsTo(db.seeker, {foreignKey: "SeekerID"});
db.skill_detail.belongsTo(db.seeker, {foreignKey: "SeekerID"});
db.education_detail.belongsTo(db.major, {foreignKey: "MajorID"});
db.skill_detail.belongsTo(db.skill_set, {foreignKey: "SkillSetID"});

db.apply.belongsTo(db.recruitment, {foreignKey: "RecruimentID"});
db.apply.belongsTo(db.seeker, {foreignKey: "SeekerID"});

module.exports = db;