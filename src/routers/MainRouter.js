const express = require('express')
const router = express.Router()
const MainController = require('../controllers/MainController')

// Get Contact Us Page 
router.get('/contact-us', MainController.getContactUs)
// Get About Page
router.get('/about', MainController.getAbout)
// Get Event Page
router.get('/event', MainController.getAddEvent)
router.post('/event', MainController.postAddEvent)
// Get Login Page
router.get('/login', MainController.getLogin)

module.exports = router
