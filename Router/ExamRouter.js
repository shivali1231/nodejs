const express  = require('express')
const router = express.Router()
const exam = require('../Controller/ExamController')
const middle = require('../middleware/ExamMiddle')
const validat = require('../util/examValidation')
const auth = require('../middleware/auth')
router.post('/exam',exam.addexam)
router.put('/exam/:id',middle.validate(validat),exam.addExamByid)
router.put('/exam/:id', exam.removeQuestion)
module.exports = router