var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    label:{
        type: String,
        default: ""
    },
    price:{
        type: Currency,
        require: true
    }
    ,
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promottion', promoSchema);

// make this available to our Node applications
module.exports = Promotions;