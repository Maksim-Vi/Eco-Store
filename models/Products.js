const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {type: Number},
    sale:Boolean,
    salePrice:Number,
    name: String,
    type: String,
    price: Number, 
    image: {type: String, require: true},
    image1: {type: String, require: true},
    image2: {type: String, require: true},
    image3: {type: String, require: true},
    inStock: Boolean,
    description:{
        nameDescription:String,
        descriptionD: String,
    },
    descriptionTable:{
        typeName: String, 
        countPeople:String,
        features: String,
        Eco:String,
        color:
        [
            {
                id:Number, 
                name:String
            }
        ],
        equipment:
        [
            {
                id:Number, 
                name:String
            } 
        ]
    }
});

module.exports = mongoose.model('Product', ProductSchema);

