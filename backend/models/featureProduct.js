const mongoose = require('mongoose');

const featureProductSchema = new mongoose.Schema({
    featureName: {
        type: String,
        required: true,
    },
});

const FeatureProduct = mongoose.model('FeatureProduct', featureProductSchema);
module.exports = { FeatureProduct };