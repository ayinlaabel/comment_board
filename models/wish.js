const mongoose = require('mongoose');

const wishSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    phone: String,
    message:{
        type: String,
        required: true
    }
});

let Wish = module.exports = mongoose.model('Wish', wishSchema);