const express = require('express');
const reportcrime = require('../models/reportcrime');
const router = express.Router();

router.post("/addreport",(req,res,next) => {
    console.log('chalu')
    reportcrime.create({
       phonenumber:req.body.phonenumber,
       crimedetails:req.body.crimedetails,
       location:req.body.location,
       areapincode:req.body.areapincode
    }).then(() => {
      
        res.json({ status: "Crime  reported!"});
    }).catch(next);
});

router.put('/updatereport/:id', (req, res, next) => {
    reportcrime.findByIdAndUpdate(req.reportid, { $set: req.body }, { new: true })
        .then((Report) => {
            res.json({ phonenumber: Report.phonenumber, crimedetails: Report.crimedetails, location: Report.location,areapincode: Report.areapincode });
        }).catch(next);
    });

    router.delete('/deletereport/:id',  (req, res, next) => {
        reportcrime.findByIdAndDelete(req.reportid)
            .then((report) => {
                res.json({ status: 'Report deleted!', Report: report })
            }).catch(next);
    });


module.exports = router;