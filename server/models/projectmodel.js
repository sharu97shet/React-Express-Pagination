
const { mongoose } = require('mongoose');


const projectschema=new mongoose.Schema({
    project_id:{
        type:String,
        required:true,
       
     },
    // ref: 'User'
     project_name:{
        type:String,
        required:true
    },
    project_sfname:{
        type:String,
        required:true
    },
   
  })

const projectsdata = mongoose.model("projects",projectschema)

module.exports=projectsdata
  