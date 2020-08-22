const mongoose = require('mongoose');

const TopSchema = new mongoose.Schema({
    id: {type: Number},
    image: {type: String, require: true},
    text1: String,
    text2: String,
    text3: String,
    
});

module.exports = mongoose.model('Top', TopSchema);