const express= require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createResturantController } = require("../controllers/resturantController");

const router = express.Router();

//routes
//CREATE RESTURANR || POST
router.post('/create',authMiddleware,createResturantController);

module.exports = router;