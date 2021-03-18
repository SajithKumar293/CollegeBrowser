const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
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
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    students:{
        type:String,
        required:true
    },
    courses:{
        type:[String],
        required:true
    }
});

const College = mongoose.model('College', CollegeSchema);

module.exports = College;