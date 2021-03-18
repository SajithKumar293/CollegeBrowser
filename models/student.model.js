const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    id:{
        type:String,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    college_id:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        required:true
    }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;