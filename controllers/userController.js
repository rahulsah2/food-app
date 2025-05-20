//GET USER INFO

const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const getUserController = async(req,res) =>{
      try {
    const user = await userModel.findById(req.userId).select('-password -phone'); // omit password
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//update

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;  // get user id from route params
    const { userName, email, password } = req.body;

    // 1. Find the user first
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 2. Update fields if provided
    console.log("Updating user with id:", userId);
console.log("Request body:", req.body);
   if (userName) user.userName = userName; 
    if (email) user.email = email;

    if (password) {
      // hash new password
      user.password = await bcrypt.hash(password, 10);
    }

    // 3. Save updated user
    await user.save();

    // 4. Return updated user without password
    const userObj = user.toObject();
    delete userObj.password;

    res.json({ message: 'User updated successfully', user: userObj });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update password
const updatePassword = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware
    const { oldPassword, newPassword } = req.body;
    console.log(oldPassword);
     console.log(newPassword);
    // 1. Find user
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // 2. Check old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Old password is incorrect' });

    // 3. Hash and update new password
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.userId; // From authMiddleware
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {getUserController, updateUser, updatePassword, deleteUser}; 