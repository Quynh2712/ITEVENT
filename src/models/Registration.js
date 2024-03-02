const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationModel = new Schema({
    rid:{
        type: String,
        unique: true,
        required:true
    },
    pid:{
        type: String,
        required:true
    },
    eid:{
        type: String,
        required:true
    },
});

module.exports = mongoose.model('Registration', RegistrationModel);