const db = require("../models");
const Seeker = db.seeker;

exports.applyJob = (req, res) => {
    const apply = {
        RecruimentID: req.body.RecruimentID,
        SeekerID: req.body.SeekerID,
        ApplyDate: req.body.ApplyDate,
        ApplyCV: req.body.ApplyCV
    };

    const code = 84847435;

    Apply.create(apply)
    .then(data => {
        res.send(data);
        console.log("Apply sent");
    })
    .catch(err => {
        res.send({message: err.message});
        console.log('Error (' + code + '): ' + err.message);
    });
}

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
            .then(data => {
                res.send(data);
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
        else {
            // Create
            Seeker.create(seeker)
            .then(data => {
                res.send(data);
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
    })
    .catch(err => {
        console.log(err.message);
        res.send({message: err.message});
    });
}