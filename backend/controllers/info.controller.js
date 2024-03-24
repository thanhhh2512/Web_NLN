const User = require('../models/user');

exports.getUser = async (req, res) => {
    try {
        const userId = req.body.user;
        if (!userId) throw new Error("User ID is required");
        const data = await User.findOne({ user: userId });
        return res.status(200).json(data);
    } catch (err) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const userId = req.body.user;
        const updatedData = req.body.updatedData; // This should contain the updated fields for the user

        const user = await User.findOneAndUpdate({ user: userId }, updatedData);
        await user.save();

        return res.status(200).send("User updated successfully");
    }
    catch { 
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}