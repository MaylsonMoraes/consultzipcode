
  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Cep', new Schema(
    {
       
        zipcode: {
            type: String,
            required: true,
            unique: true
        },
        
    },
    {
        //timestamps: true
    })
);