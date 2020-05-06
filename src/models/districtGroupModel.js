var mongoose = require('mongoose');

var districtGroupSchema = new mongoose.Schema({
    districtName: {
        type: String,
        required: true,
        trim: true
    },
    statename:{
        type:String,
        trim:true
    },
    countryname:{
        type:String,
        trim:true
    },
    districtID:{
        type:Object,
        trim:true
    }
})

var districtGroup = mongoose.model("districtGroup", districtGroupSchema) 


module.exports.districtGroup = districtGroup;