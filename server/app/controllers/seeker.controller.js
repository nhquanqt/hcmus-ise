const db = require("../models");
const Seeker = db.seeker;

exports.uploadProfile = (req, res) => {

    const seeker = {
        UserID: req.body.UserID,
        FullName: req.body.FullName,
        DateOfBirth: req.body.DateOfBirth,
        PhoneNumber: req.body.PhoneNumber,
        Location: req.body.Location,
        CV: req.body.CV
    };

    Seeker.findAll({
        where: {
            UserID: seeker.UserID
        }
    })
    .then(data => {
        if(data.length == 1) {
            // Update
            var code = 89313124
            Seeker.update(seeker, {where: {id: data[0].id}})
            .then(() => {
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
        else {
            // Create
            Seeker.create(seeker)
            .then(() => {
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
        res.send({message: true});
    })
    .catch(err => {
        console.log(err.message);
        res.send({message: false});
    });
}