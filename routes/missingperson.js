const express = require('express');
const Missingperson = require('../models/missingperson');
const router = express.Router();


router.post("/addmissingperson",(req,res,next) => {
    Missingperson.create({
        fullname:req.body.fullname,
        address:req.body.address,
        image:req.body.image,
        description:req.body.description,
        missingstatus:req.body.missingstatus

    }).then(() => {

        res.json({ status: "Missing person reported!"});
    }).catch(next);

    router.put('/updatemissing', (req, res, next) => {
        Missingperson.findByIdAndUpdate(req.missingid, { $set: req.body }, { new: true })
            .then((Report) => {
                res.json({ fullname: Missingperson.fullname, address: Missingperson.address, description: Missingperson.description,missingstatus: Missingperson.missingstatus });
            })
        });

        router.delete('/deletemissing',  (req, res, next) => {
            Missingperson.findByIdAndDelete(req.missingid)
                .then((Missingperson) => {
                    res.json({ status: 'Missingperson deleted!', Missingperson: Missingperson })
                }).catch(next);
        });
});

module.exports = router;