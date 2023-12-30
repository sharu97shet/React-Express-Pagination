
const { mongoose } = require('mongoose');


const apartmentdataschema=new mongoose.Schema({
    project_id:{
        type:String,
        required:true,
     //   ref:'projects'
     },
     block_name:{
        type:String,
        required:true
    },
    apartment_name:{
        type:String,
        required:true
    },
    apartment_id:{
        type:String,
        required:true
    },
   
  })

const apartmentdata = mongoose.model("apartmentdata",apartmentdataschema)

module.exports=apartmentdata
  