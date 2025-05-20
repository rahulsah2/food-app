const express = require('express');
const { testUserController } = require('../controllers/testController');

//router object
const router = express.Router()

//routes GET| POST | UPDATE | DELETE
 router.get('/text-user', testUserController);

//export
module.exports = router;