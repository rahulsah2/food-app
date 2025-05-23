const express= require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createResturantController, getAllResturant, deleteRestaurantController } = require("../controllers/resturantController");

const router = express.Router();

//routes
//CREATE RESTURANR || POST
router.post('/create',authMiddleware,createResturantController);

//getAll resturants ||GET
router.get('/getAll',getAllResturant);
//del resturant || delete
router.delete('/delete/:id',deleteRestaurantController);

module.exports = router;