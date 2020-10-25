const mongoose = require("../bin/mongoDB");
const errorMessage = require("../util/errorMessage");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,errorMessage.GENERAL.required_field]

    },
    description: String
});

categorySchema.statics.findBydIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"Category doesn´t exist"
        }
        
    }
    return document;
}
module.exports = mongoose.model("categories", categorySchema)