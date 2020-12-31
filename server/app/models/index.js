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

db.jobs = require("./job.model.js")(sequelize, Sequelize);
db.majors = require("./major.model.js")(sequelize, Sequelize);
db.companies = require("./company.model.js")(sequelize, Sequelize);
db.fields = require("./field.model.js")(sequelize, Sequelize);
db.recruitments = require("./recruitment.model.js")(sequelize, Sequelize);

db.jobs.belongsTo(db.majors, {foreignKey: "MajorID"});
db.jobs.belongsTo(db.recruitments, {foreignKey: "RecruitmentID"});
db.companies.belongsTo(db.fields, {foreignKey: "FieldID"});
db.recruitments.belongsTo(db.companies, {foreignKey: "CompanyID"});

module.exports = db;