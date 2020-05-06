var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var countryGroupSchema = new mongoose.Schema({
    countryName:{
        type: String,
        required: true,
        trim:true
    },
    bloodgroupName:{
        type:String,
        },
        bloodgroupID:{
            type:Object,
             required:true,
             trim:true
            },

})

var countryGroup = mongoose.model("countryGroup" , countryGroupSchema)


module.exports.countryGroup = countryGroup;