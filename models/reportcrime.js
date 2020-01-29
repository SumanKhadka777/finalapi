const mongoose=require('mongoose');
const reportSchema=new mongoose.Schema({
    userid:{
        type:String,
        require:true,
        
    },
    Phonenumber:{
            type:String,
            require:true,
    },
    Crimedetails:{
        type:String,
            require:true,


    },
    Location:{
        type:String,
            require:true,


    },
    Areacode:{
        type:String,
        require:true,



    }

});
module.exports = mongoose.model('Reportcrime',reportSchema );