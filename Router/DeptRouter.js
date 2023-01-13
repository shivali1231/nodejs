const express = require('express')
const router  = express.Router()
const dept = require('../Controller/DeptController')
router.get('/dept', dept.getDepartment);
router.post('/dept', dept.addDepartment);
module.exports = router;

