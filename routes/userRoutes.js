const express= require("express");
const { getUserController, updateUser, updatePassword, deleteUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//GET USER ||GET
router.get('/getUser', authMiddleware, getUserController);
//update user
router.put('/update/:id',authMiddleware, updateUser);
//update password
router.put('/updatePassword',authMiddleware, updatePassword);
//delete user
router.delete('/deleteUser',authMiddleware, deleteUser);
module.exports = router;