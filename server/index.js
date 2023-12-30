// import { Express } from 'express'
// import { CorsRequest } from 'cors'
// import { Mongoose } from 'mongoose'
// import { body } from 'body-parser'
// import { cookie } from 'cookie-parser'
// //import { Session } from 'express-session'
// //const express=require('express')


// const { BodyParser } = body;
// const { CookieParseOptions } = cookie;
//const projectdata = require('./models/projectmodel')
//sharath@houzbay123  tbsXtMImPmOLSYkL

//new password mongodb@atlas123

// IP Access List

// Description

// 182.71.137.235/32

// My IP Address


//password Eg8ZGIAMfvchpWEy

//username sharath


//mongodb+srv://sharath:<password>@cluster0.8aiakn4.mongodb.net/?retryWrites=true&w=majority




const express=require('express')
//const collection = require("./mongo")
const cors = require("cors")
const mongoose=require('mongoose')

const app=express()
app.use(express.json()) 
app.use(cors())

const bodyparser=require('body-parser')
const cookieparser=require('cookie-parser')
const session=require('express-session')

mongoose.connect("mongodb://localhost:27017/Bookstore")

const projectsdata = require('./models/projectmodel')
const apartmentdata = require('./models/apartmentmodel')
// const project = mongoose.model('projects', {
//     project_id: String,
//     project_name: String,
   
//   });
  
//   const apartment = mongoose.model('apartmentdata', {
//     project_id: String,
//     block_name: String,
//     apartment_name:String
//   });

app.get('/', (req,res)=>{

res.json({"users":['SHARATH','SANUJA']})
    
 })


app.get('/projectsrecords',(req,res)=>{
  projectsdata.find({}).limit(3).then(function(projects){
           res.json(projects)
    }).catch(function(err){
        res.json(err)
    })
   // res.send({'name':"javascript"})

} )


app.get('/apartmentprojectdata',async(req,res)=>{

    try {
        const result = await projectsdata.aggregate([
          {
            $lookup: {
              from: 'apartmentdata',
              localField: 'project_id',
              foreignField: 'project_id',
              as: 'apartprojectdata',
            },
          },

           {
            $unwind: "$apartprojectdata"
       
           },
          
          {
            $project: {
              //  _id: 0,
             project_name: 1,
              project_sfname: 1,
              project_id: 1,
              
              'apartprojectdata.apartment_name':1,
              'apartprojectdata.block_name':1,
              'apartprojectdata.apartment_status':1,
        //      'apartprojectdata': { $slice: ['$apartprojectdata', 5] }
           
            },
            
          },

            {
               $limit: 1800
             }

]);
    
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }

   
} )
   

 app.listen(5000, ()=>{
        console.log("helloworld")
    
    })
       
