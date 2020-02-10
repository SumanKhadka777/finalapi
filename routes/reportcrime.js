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

// router.put('/updatereport/:id', (req, res, next) => {
//     reportcrime.findByIdAndUpdate(req.params.id)
//         .then((Report) => {
            
//                 phonenumber: Report.phonenumber,
//                  crimedetails: Report.crimedetails, 
//                  location: Report.location,
//                  areapincode: Report.areapincode 

//             reportcrime.save()
//             .then((reportcrime)=>{
//                 res.json(reportcrime)
//         }).catch(next);
//     });

router.put('/updatereport/:id',  (req, res, next) => {
    console.log("chalyo")
 reportcrime.findById(req.params.id)  
 .then((reportcrime)=>{
    reportcrime._id=req.params.id
    reportcrime.phonenumber=req.body.phonenumber
    reportcrime.crimedetails=req.body.crimedetails
    // reportcrime.image=missingperson.image
    reportcrime.location=req.body.location
    reportcrime.areapincode=req.body.areapincode

    reportcrime.save()
    .then((reportcrime)=>{
        res.json(reportcrime)
    }).catch(next)
    })

    });

    router.delete('/deletereport/:id',  (req, res, next) => {
        reportcrime.findByIdAndDelete(req.reportid)
            .then((reportcrime) => {
                res.json({ status: 'Report deleted!', Report: reportcrime })
            }).catch(next);
    });


module.exports = router;