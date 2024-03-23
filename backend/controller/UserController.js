const User = require('../model/userModel');

const UserController = {
    create: async (req, res) => {
        try {
            const { name, pass, email } = req.body;

            const existName = await User.findOne({ name });
            if (existName) {
                return res.status(400).json({
                    message: 'Tên người dùng đã được sủ dụng'
                })
            }

            const existEmail = await User.findOne({ email });
            if (existEmail) {
                return res.status(400).json({
                    message: 'Email đã được sủ dụng'
                })
            }
            
            if (!name || !pass || !email) {
                return res.status(400).json({
                    message: 'Vui long đầy đủ thông tin'
                })
            }
            
            const newUser = await User.create({
                name, 
                pass,
                email
            });

            // await newUser.save();
            
            return res.status(200).json({
                message: 'success',
                newUser
            });
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    },

    login: async (req, res) => {
        try {
            const { name, pass } = req.body;

            const user = await User.findOne({
                name
            })
            if (!user) {
                return res.status(400).json({
                    message: 'Ten nguoi dung khong ton tai',
                });
            }
            if (user.pass !== pass) {
                return res.status(400).json({
                    message: 'Sai mat khau',
                });
            }

            return res.status(200).json({
                message: 'Login successful',
                user
            });
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }

}

module.exports = UserController;