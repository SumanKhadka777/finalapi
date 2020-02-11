const express = require('express');
const Missingperson = require('../models/missingperson');
const router = express.Router();
const missing = require('../auth')

// getmissing person id
router.get('/getmissing/:id', (req, res, next) => {
    Missingperson.findById(req.params.id)
        .then((Missingperson) => {
           
            res.json({ fullname: Missingperson.fullname, address: Missingperson.address, description: Missingperson.description,missingstatus: Missingperson.missingstatus });
        })
    });


//add missing person
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

//Update missing person data
    router.put('/updatemissing/:id',  (req, res, next) => {
        console.log("chalyo")
     Missingperson.findById(req.params.id)  
     .then((missingperson)=>{
        missingperson._id=req.params.id
        missingperson.fullname=req.body.fullname
        missingperson.address=req.body.address
        missingperson.image=missingperson.image
        missing.description=req.body.description
        missingperson.missingstatus=missingperson.missingstatus

        missingperson.save()
        .then((missingperson)=>{ 
            res.json(missingperson)
        }).catch(next)
        })

        });

//delete missing person

        router.delete('/deletemissing/:id',  (req, res, next) => {
            Missingperson.findByIdAndDelete(req.missingid)
                .then((Missingperson) => {
                    res.json({ status: 'Missing person deleted!', Missingperson: Missingperson })
                }).catch(next);
        });
});

module.exports = router;