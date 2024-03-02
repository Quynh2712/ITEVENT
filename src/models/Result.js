const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationModel = new Schema({
    resultid:{
        type: String,
        unique: true,
        required:true
    },
    eid:{
        type: String,
        required:true
    },
    winnerteamid:{
        type: String,
        required:true
    },
});

module.exports = mongoose.model('Registration', RegistrationModel);