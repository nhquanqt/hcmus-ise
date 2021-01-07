const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const path = require('path')

const app = express();

var corsOptions = {
    origin: "*",
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

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:%s.', PORT);
});