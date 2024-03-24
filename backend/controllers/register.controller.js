const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    //console.log(req.body);
    const { username, password, email } = req.body;
    // const { username, password, fullName, email,  phone, gender, address, birthday } = req.body;

    // Check if all required fields are present
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existing_user = await User.findOne({ username });
    if (existing_user) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create a new user
    const new_user = new User({
      username,
      password,
      email,
    });

    // const new_user = new User(
    //   username,
    //   password,
    //   email,
    //   username,
    //   phone,
    //   gender,
    //   address,
    //   birthday

    await new_user.save();

    // Return success response
    return res
      .status(201)
      .json({ message: "User registered successfully", user: new_user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};
