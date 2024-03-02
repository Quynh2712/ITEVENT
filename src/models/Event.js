const mongoose=require('mongoose')
const Schema=mongoose.Schema

const EventModel=new Schema({
    eid: {
        type: String,
        unique: true,
    },
    eventName:{
        type: String,
       
    },
    startDate:{
        type:Date,
    },
    endDate:{
        type:Date,
    },
    location:{
        type: String,
    },
    eventType: {
        type: String
    },
    
    description: {
        type: String,
    }
}, {
    timestamps: true
});
module.exports=mongoose.model('event',EventModel);