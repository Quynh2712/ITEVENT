// const Event = require('../models/Event')



// const EventController = {
//     getAddEvent : (req, res) => {
//         console.log('getaddevent')
//         return res.render('event');
//     },
//     postAddEvent : (req, res, next) => {
//         // const files = req.files
//         const {eventName, startDate, endDate, location, description,eventType} = req.body
//         // let imgList = []
//         console.log('postaddevent')
//         Event.findOne({eventName: eventName}).then(event => {
//             if(event) {
//                 return res.send(`Event ${event.e_name} exists`)
//             }
//             else {
//                 // if(files.length == 0){
//                 //     return res.redirect('event-detail');
//                 // }
//                 // files.forEach(file => {
//                 //     let path= `/image/event`
//                 // })
//                 var addEvent = {
//                     eid: Date.now(),
//                     eventName: eventName,
//                     startDate: startDate,
//                     endDate: endDate,
//                     location: location,
//                     description: description,
//                     eventType:eventType,
//                 }
//                 new Event(addEvent).save().then((event) => {
//                     return res.redirect('/create-event')
//                 })
//                 .catch((err) => {
//                     return res.redirect('/event')
//                 });
//             }
//         }).catch(next)
//     },
// }


// const Event = require("../models/Event");

// // [POST] /event/create
// const EventController = {
//     getaddEvent :(req,res) => {
//         return res.render('event');
//     },
//     postaddEvent : async (req, res, next) => {
//     	const { eventName, startDate, endDate, location, prize, description } = req.body;

//     	return await Event.create({
//     		eid: Math.floor(Math.random() * 999999999),
//             eventName,
//     		startDate,
//     		endDate,
//     		location,
//     		prize,
//     		description,
//     	})
//     		.then((event) => {
//     			// return res.status(200).json({
//     			// 	success: true,
//     			// 	event,
//     			// 	msg: "Event created",
//     			// });
//                 return res.redirect('/create-event')
//     		})
//     		.then((err) => {
//     			return res.redirect('/event')
//     		});
//     }

    // // [PUT] /event/update/:eid
    // module.exports.PUT_UpdateEvent = async (req, res, next) => {
    // 	const { eid } = req.params;

    // 	return await Event.findOneAndUpdate(
    // 		{ eid },
    // 		{ $set: { ...req.body } },
    // 		{ returnOriginal: false }
    // 	)
    // 		.then((event) => {
    // 			return res.status(200).json({
    // 				success: true,
    // 				event,
    // 				msg: "Event updated",
    // 			});
    // 		})
    // 		.catch((err) => {
    // 			return res.status(500).json({
    // 				success: false,
    // 				msg: "Error occured: " + err,
    // 			});
    // 		});
    // };

    // // [DELETE] /event/delete/:eid
    // module.exports.DELETE_DelEvent = async (req, res, next) => {
    // 	const { eid } = req.params;

    // 	return await Event.findOneAndDelete({ eid })
    // 		.then((event) => {
    // 			return res.status(200).json({
    // 				success: true,
    // 				event,
    // 				msg: "Event deleted",
    // 			});
    // 		})
    // 		.catch((err) => {
    // 			return res.status(500).json({
    // 				success: false,
    // 				msg: "Error occured: " + err,
    // 			});
    // 		});
    // };

    // // [GET] -> /event/detail/:eid
    // module.exports.GET_EventDetail = async (req, res, next) => {
    // 	const { eid } = req.params;

    // 	return await Event.findOne({ eid }).lean()
    // 		.then(event => {
    // 			return res.status(200).json({
    // 				success: true,
    // 				event,
    // 				msg: 'Event found'
    // 			})
    // 		})
    // 		.catch(err => {
    // 			return res.status(500).json({
    // 				success: false,
    // 				msg: 'Error occured: ' + err
    // 			})
    // 		})
    // }

    // // [GET] /event/search?key=...
    // module.exports.GET_SearchEvent = async (req, res, next) => {
    // 	const { key } = req.query;

    // 	return await Event.findOne({ "eid": { $regex: key, $options: 'i' } }).lean()
    // 		.then(event => {
    // 			return res.status(200).json({
    // 				success: true,
    // 				event,
    // 				msg: 'Event found'
    // 			})
    // 		})
    // 		.catch(err => {
    // 			return res.status(500).json({
    // 				success: false,
    // 				msg: 'Error occured: ' + err
    // 			})
    // 		})
    // }

    // // [GET] /event/list?page=...
    // module.exports.GET_ListEvent = async (req, res, next) => {
    // 	const { page } = req.query || 1;
    // 	const limit = 20;
    // 	const skip = limit * (page - 1);

    // 	return await Event.find({})
    // 		.limit(20)
    // 		.skip(skip)
    // 		.then(events => {
    // 			return res.status(200).json({
    // 				success: true,
    // 				events,
    // 				msg: 'Events found'
    // 			})
    // 		})
    // 		.catch(err => {
    // 			return res.status(500).json({
    // 				success: false,
    // 				msg: 'Error occured: ' + err
    // 			})
    // 		})
    // }
// }

// module.exports = EventController