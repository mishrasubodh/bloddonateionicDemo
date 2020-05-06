var mongoose = require('mongoose');

var userGroupSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true,
        unique:true
    },
    password:{
        type: Object,
        trim: true
    },
    phoneNumber:{
        type:Number,
        maxlength:10,
    },
    bloodGroupName:{
        type: String
    },
    districtname:{
        type: String,
        required: true
    },
    stateName:{
        type: String,
        trim: true
    },
    countryName:{
        type: String,
        trim: true
    },
})

var userGroup = mongoose.model("userGroup", userGroupSchema)


module.exports.userGroup = userGroup;