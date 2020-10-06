const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Entrega_final_DB', {useNewUrlParser: true, useUnifiedTopology: true}, function (error){
    if (error){
        throw error;
    }else{
        console.log("Conectando a MongoDB");
    }
});

module.exports = mongoose;

