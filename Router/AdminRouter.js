const express  = require('express')
const router = express.Router()
const admin = require('../Controller/AdminController')
router.post('/admin', admin.addAdmin)
module.exports = router