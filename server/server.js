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
    // res.json({message: 'Welcome to my website.'});
    console.log('GET request');
    res.send('hello world');
});

<<<<<<< HEAD
require('./app/routes/account.routes')(app);
=======
require('./app/routes/job.routes')(app);
require('./app/routes/major.routes')(app);
require('./app/routes/company.routes')(app);
require('./app/routes/field.routes')(app);
>>>>>>> add major + field + company

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:%s.', PORT);
});