const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
    typeName: {
        type: String,
        required: true,
    },
});

const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = { ProductType };