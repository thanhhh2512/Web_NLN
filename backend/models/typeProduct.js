const mongoose = require('mongoose');

const typeProductSchema = new mongoose.Schema({
    typeName: {
        type: String,
        required: true,
    },
});

const TypeProduct = mongoose.model('TypeProduct', typeProductSchema);
module.exports = { TypeProduct };