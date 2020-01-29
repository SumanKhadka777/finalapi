const express = require('express');
const Report = require('../models/reportcrime');
const router = express.Router();

router.post("/addreport",(req,res,next) => {
    console.log('chalu')
    Report.create({
       phonenumber:req.body.phonenumber,
       crimedetails:req.body.crimedetails,
       location:req.body.location,
       areapincode:req.body.areapincode
    }).then(() => {
      
        res.json({ status: "Crime  reported!"});
    }).catch(next);
});


module.exports = router;