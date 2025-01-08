const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
    {
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required : true
    },
    internship_details :{
        type: String,
        required : true
    },
    project_details :{
        type: String,
        required : true
    },
    skills_details :{
        type: String,
        required : true
    },
    education_details :{
        type: String,
        required : true
    },
    other_details :{
        type: String,
        required : true
    }


})

const Resume = mongoose.model('RESUME',resumeSchema);

module.exports = Resume;