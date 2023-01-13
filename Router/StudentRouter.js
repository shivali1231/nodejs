const express  = require('express')
const router = express.Router()
const student = require('../Controller/StudentController')
router.post('/st', student.addstudent)
module.exports = router