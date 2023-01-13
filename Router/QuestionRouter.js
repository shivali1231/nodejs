const question = require('../Controller/QuestionController')
const express = require('express')
const router = express.Router()
router.post('/que', question.addQuestion)
module.exports = router