const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
    secure: false
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get('/', (req, res) => {
    console.log('GET request');
    res.send('hello world');
});

require('./app/routes/job.routes')(app);
require('./app/routes/major.routes')(app);
require('./app/routes/company.routes')(app);
require('./app/routes/field.routes')(app);
require('./app/routes/recruitment.routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:%s.', PORT);
});