const express  = require('express')
const router = express.Router()
const role = require('../Controller/RoleController')
router.post('/role', role.addRole)
router.get('/role', role.verifyId)

module.exports = router