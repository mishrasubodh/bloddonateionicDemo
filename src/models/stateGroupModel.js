var mongoose = require('mongoose');

var stateGroupSchema = new mongoose.Schema({
    stateName: {
        type: String,
        required: true,
        trim: true
    },
     countryName: {
        type: String,
        required: true
    },
    stateID: {
        type:Object,
        required: true
    }
   
})

var stateGroup = mongoose.model("stateGroup", stateGroupSchema)


module.exports.stateGroup = stateGroup;