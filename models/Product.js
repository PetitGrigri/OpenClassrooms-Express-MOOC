const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    inStock: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Product', productSchema);