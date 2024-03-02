const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamModel = new Schema({
    tid:{
        type: String,
    },
    name: {
        type: String,
    },
    //list member
    member: [{
        pid: String,
        name: String,
        email: String,
        phone: String,
        role: String
    }],
});

module.exports = mongoose.model('Team', TeamModel);