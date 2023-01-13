const express = require('express')
const router = express.Router()
const emp = require('../Controller/EmpController')
const middle = require('../middleware/zodMiddle1')

const validation = require('../util/zodValidation')
router.get('/emp', emp.getEmp)
router.post('/emp',emp.addemp)
router.get('/login', emp.login)
router.get('/token', emp.verifyToken)
module.exports = router
