const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    ID: {type: Number, required: true, unique: true},
    ItemName: {type: String, required: true, unique: true},
    Color: {type: String, required: true},
    Size: {type: String, required: true},
    Price: {type: Number, required: true},
    InStock: {type: Boolean, required: true},
    Images: [
        {type: String, 
        required: true}
    ],
})

module.exports = mongoose.model("Item", itemsSchema);