const mongoose = require("../bin/mongoDB");
const errorMessage = require("../util/errorMessage");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,errorMessage.GENERAL.required_field]
    },
    sku:{
        type: String,
        unique: true,
        maxlength: [255,errorMessage.GENERAL.maxlength],
        trim: true,
        required: [true,errorMessage.GENERAL.required_field]
    },
    description:{
        type:String
    },
    status:{},
    category:{},
    price:{},
    quantity:{}
})