const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ParticipantModel=new Schema({
    pid: {
        type: String,
        unique: true,
        required: true
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    role:{
        type:String,
    },
}, {
    timestamps: true
});
module.exports=mongoose.model('Participant',ParticipantModel)