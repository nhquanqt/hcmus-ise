const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
=======
const multer = require('multer')
const path = require('path')
>>>>>>> server

const app = express();

var corsOptions = {
<<<<<<< HEAD
    origin: "http://localhost:8081",
=======
    origin: "*",
>>>>>>> server
    secure: false
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get('/', (req, res) => {
<<<<<<< HEAD
    // res.json({message: 'Welcome to my website.'});
=======
>>>>>>> server
    console.log('GET request');
    res.send('hello world');
});

<<<<<<< HEAD
require('./app/routes/account.routes')(app);
=======
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '/' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage});

app.post('/api/image/upload', upload.single('image'), (req, res) => {
    res.send(req.file);
});

app.post('/api/resume/upload', upload.single('resume'), (req, res) => {
    res.send(req.file);
});

app.use('/public', express.static('public'))

require('./app/routes/routes')(app);
>>>>>>> server

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:%s.', PORT);
});