const mongoose=require('mongoose');
const missingSchema=new mongoose.Schema({
        fullname:{
            type:String,
            required:true,

        },
        Address:{
            type:String,
            required:true,

        },
        missingImage:{
            type:String


        },
        Description:{
            type:String,
            required:true,
   

        },


})

module.exports=mongoose.model('Missing', missingSchema);