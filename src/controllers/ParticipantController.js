const Participants = require('../models/Participant')
const Event = require('../models/Event')
const Result = require('../models/Team')
const bcrypt = require('bcrypt')
const saltRounds = 10
const nodemailer = require('nodemailer')



module.exports = ParticipantController