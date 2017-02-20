var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
   "designation":{
     type: String,
     required: true,
     required: true
   },
    "abbr":{
        type: String
    }
    ,
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

// make this available to our Node applications
module.exports = Leaders;