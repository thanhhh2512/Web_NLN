const User = require("../models/user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function generateAccessToken(username) {
  return jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2d",
  });
}

exports.createUser = async (req, res) => {
  try {
    //console.log(req.body);
    const {
      username,
      password,
      email,
      fullname,
      phone,
      gender,
      address,
      birthday,
    } = req.body;

    // Check if all required fields are present
    if (
      !username ||
      !email ||
      !password ||
      !fullname ||
      !phone ||
      !gender ||
      !address ||
      !fullname
    ) {
      return res.status(400).json({ error: "Vui lòng điền đầy đủ các trường" });
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
      fullname,
      phone,
      gender,
      address,
      birthday,
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

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ message: "Tài khoản chưa đăng ký." });
    }

    // const isPasswordValid = bcrypt.compareSync(password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(401).json("Invalid Password.");
    // }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid Password." });
    }

    const token = generateAccessToken(user.username);

    return res.status(200).send({
      access_token: token,
      user: {
        ...user._doc,
        password: "",
      },
    });
  } catch (e) {
    console.log(e);
    return next(new Error(500, "An error has occurred."));
  }
};

// const bcrypt = require("bcrypt");

// exports.login = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username: username });
//     if (!user) {
//       return res.status(400).json("Tài khoản chưa đăng ký.");
//     }

//     const isPasswordValid = bcrypt.compareSync(password, user.password);
//     if (!isPasswordValid) {
//       console.log("Mật khẩu người dùng:", password);
//       console.log("Mật khẩu trong cơ sở dữ liệu:", user.password);
//       return res.status(401).json("Mật khẩu không hợp lệ.");
//     }

//     const token = generateAccessToken(user); // Đảm bảo rằng bạn đã định nghĩa hàm generateAccessToken một cách chính xác.

//     return res.status(200).send({ access_token: token });
//   } catch (e) {
//     console.error(e);
//     return next(new Error(500, "Đã xảy ra lỗi."));
//   }
// };

exports.getUser = async (req, res) => {
  try {
    const userId = req.body.user;
    if (!userId) throw new Error("User ID is required");
    const data = await User.findOne({ user: userId });
    return res.status(200).json(data);
  } catch (err) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.body.user;
    const updatedData = req.body.updatedData; // This should contain the updated fields for the user

    const user = await User.findOneAndUpdate({ user: userId }, updatedData);
    await user.save();

    return res.status(200).send("User updated successfully");
  } catch {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
