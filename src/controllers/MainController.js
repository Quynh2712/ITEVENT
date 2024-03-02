const Event = require('../models/Event')

const MainController = {
    //get Contact Us page
    getContactUs: (req, res) => {
        return res.render('contact');
    },
    //get About Page
    getAbout: (req, res) => {
        return res.render('about');
    },
    //get Event Page
    // getEvent: (req, res) => {
    //     return res.render('event');
    // },
    //get Login Page
    getLogin: (req, res) => {
        return res.render('login', { layout: 'submain' });
    },
    getAddEvent : (req, res) => {
        console.log('getaddevent')
        return res.render('event');
    },
    postAddEvent : (req, res, next) => {
        // const files = req.files
        const {eventName, startDate, endDate, location, description,eventType} = req.body;
        // let imgList = []
        Event.findOne({eventName: eventName}).then(event => {
            if(event) {
                console.log('addEvent')

                return res.send(`Event ${event.eventName} exists`)
            }
            else {
                // if(files.length == 0){
                //     return res.redirect('event-detail');
                // }
                // files.forEach(file => {
                //     let path= `/image/event`
                // })
                var addEvent = {
                    eid: Math.floor(Math.random() * 999999999),
                    eventName: eventName,
                    startDate: startDate,
                    endDate: endDate,
                    location: location,
                    description: description,
                    eventType:eventType,
                }
                console.log('addEvent')

                new Event(addEvent).save().then((event) => {
                    return res.redirect('/event-detail')
                })
                .catch((err) => {
                    console.log('chưa thêm được')
                    return res.redirect('/event')
                });
            }
        }).catch(next)
    },
}

module.exports = MainController;