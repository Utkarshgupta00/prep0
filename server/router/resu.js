// const express = require('express');

// const souter = express.Router();
// require('../db/ronn');
// const Resume =   require('../model/resumeSchema');


// souter.post('/resume', async(req, res)=>{

//     const { name, email, phone, internship_details, project_details, skills_details, education_details, other_details } = req.body;

//     if( !name || !email || !phone ||  !internship_details || !project_details || !skills_details || !education_details || !other_details ){
//         return res.status(422).json({error:"plz fill all the details"});
//     }

//     try{

//             const resumeExist = await User.findOne({ email : email});

//             if(resumeExist){
//                 return res.status(422).json({error:"done"});
//             }

//             const resume =  new Resume({name, email, phone, internship_details, project_details, skills_details, education_details, other_details });

//             await resume.save();

//             res.status(201).json({message: "ok"});


//     } catch (err) {
//         console.log(err);
//     }
        
// })



// module.exports = souter;