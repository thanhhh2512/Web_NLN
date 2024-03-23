const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Nam', 'Nữ', 'Bê đê'],
        default: 'Bê đê'
    },
    address: {
        type: String,
    },
    birthday: {
        type: Date,
        default: Date.now()
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('User', UserSchema);