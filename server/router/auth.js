const express = require('express');

const router = express.Router();
require('../db/conn');
const User =  require('../model/userSchema');


router.post('/register', async(req, res)=>{

    const { name, email, phone, password, projects, skills, education, others } = req.body;

    if( !name || !email || !phone || !password || !projects || !skills || !education || !others ){
        return res.status(422).json({error:"plz fill all the details"});
    }

    try{

            const userExist = await User.findOne({ email : email});

            if(userExist){
                return res.status(422).json({error:"you are already registered"});
            }

            const user = new User({name, email, phone, password, projects, skills, education, others});

            await user.save();

            res.status(201).json({message: "user registered successfully"});


    } catch (err) {
        console.log(err);
    }
        
})



module.exports = router;