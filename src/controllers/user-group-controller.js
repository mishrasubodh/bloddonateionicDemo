const userModel = require("../models/userGroupModel");
const contryModel = require("../models/countryGroupModel");
const stateModel = require("../models/stateGroupModel");
const distModel = require("../models/districtGroupModel");
const bloodModel = require("../models/bloodGroupModel");
const encriptdcript = require("../utility/crypt");

const encdec = encriptdcript.getencrypt;
const userGroup = userModel.userGroup;
const blodgroupModel = bloodModel.bloodGroup;
const distmodel = distModel.districtGroup;
const statemodel = stateModel.stateGroup;
const countrymodel = contryModel.countryGroup;
const user_group = {
  getuserGroup: async (req, res) => {
    try {
      let presendEmail = await userGroup.find({
        email: req.body.email,
      });
      if (presendEmail.length > 0) {
        res.status(401).json({
          statusCode: 401,
          message: "email allready taken by other user",
        });
      } else {
        let encpass = await encdec(req.body.password);
        if (encpass) {
          var data = {
            userName: req.body.name,
            email: req.body.email,
            password: encpass,
            phoneNumber: req.body.phoneNumber,
            bloodGroupName: req.body.bloodGroupName,
            districtname: req.body.districtName,
            stateName: req.body.StateName,
            countryName: req.body.countryname,
          };
          var myData = new userGroup(data);
          let savedata = await myData.save();
          if (savedata) {
            var bloodName = {
              bloodGroupName: savedata.bloodGroupName,
              userId: savedata._id,
            };
            var cdata = {
              countryName: savedata.countryName,
              bloodgroupID: savedata._id,
              bloodgroupName: savedata.bloodGroupName,
            };
            var sdata = {
              stateName: savedata.stateName,
              stateID: savedata._id,
              countryName: savedata.countryName,
            };

            let bdName = new blodgroupModel(bloodName);
            let countrydata = new countrymodel(cdata);
            let statedata = new statemodel(sdata);

            let bloodData = await bdName.save();
            let ctdata = await countrydata.save();
            let stdata = await statedata.save();
            var ddata = {
              districtName: savedata.districtname,
              statename: savedata.stateName,
              blodgroupName: savedata.bloodGroupName,
              districtID: savedata._id,
              stateID: stdata._id,
              countryname: ctdata.countryName,
            };
            if (ctdata && stdata) {
              let distdata = new distmodel(ddata);
              let District = await distdata.save();
            }
            res.status(200).json({
              statusCode: 200,
              message: "item saved to the database",
              result: savedata,
            });
          }
        }
      }
    } catch (e) {
      res.status(500).json({
        statusCode: 500,
        error: e,
      });
    }
  },

  getuserData: async (req, res) => {
    try {
      let userData = await userGroup.find({
        districtname: req.body.districtName,
        stateName: req.body.statename,
        countryName: req.body.countryname,
        bloodGroupName: req.body.blodGroup,
      });
      if (userData.length > 0) {
        res.status(200).json({
          statusCode: 200,
          message: "doner succesfull find",
          result: userData,
        });
      } else if (userData.length == 0) {
        res.status(200).json({
          statusCode: 200,
          message: "doner not found",
          result: userData,
        });
      }
    } catch (e) {
      res.status(500).json({
        statusCode: 500,
        error: e,
      });
    }
  },

  deleteuserData: async (req, res) => {
    console.log(req.body, "eeeeeeeeeeeeeeeeeee");
    try {
      var userData = await userGroup.findOneAndDelete({
        email: req.body.email,
      });
      if (userData.email) {
        var blodData = await blodgroupModel.findOneAndDelete({
          userId: userData._id,
        });

        if (blodData.userId) {
          var countryData = await countrymodel.findOneAndDelete({
            bloodgroupID: userData._id,
          });
        }
        if (countryData.bloodgroupID) {
          var stateData = await statemodel.findOneAndDelete({
            stateID: userData._id,
          });
        }
        if (stateData.stateID) {
          let distyData = await distmodel.findOneAndDelete({
            districtID: userData._id,
          });
        }
        if (distyData.districtID) {
          res.status(200).json({
            statusCode: 200,
            message: "item succesfull delete",
          });
        }
      } else if (!userData.email) {
        res.status(200).json({
          statusCode: 200,
          message: "item not found",
        });
      }
    } catch (e) {
      res.status(500).json({
        statusCode: 500,
        error: e,
      });
    }
  },

  updateuser: async (req, res) => {
   try {
      let editdata = await userGroup.findByIdAndUpdate({
        _id:req.body._id,
      },{$set:{
        userName: req.body.name,
        phoneNumber: req.body.phoneNumber,
        bloodGroupName: req.body.bloodGroupName,
        districtname: req.body.districtname,
        stateName: req.body.stateName,
        countryName: req.body.countryName,
      }});
      if (editdata) {
        let savedata = await userGroup.findOne({
          _id: editdata._id
        })
        if (savedata) {
          var bloodName = {
            bloodGroupName: savedata.bloodGroupName,
            userId: savedata._id,
          };
          var cdata = {
            countryName: savedata.countryName,
            bloodgroupID: savedata._id,
            bloodgroupName: savedata.bloodGroupName,
          };
          var sdata = {
            stateName: savedata.stateName,
            stateID: savedata._id,
            countryName: savedata.countryName,
          };

          let bdName = new blodgroupModel(bloodName);
          let countrydata = new countrymodel(cdata);
          let statedata = new statemodel(sdata);

          let bloodData = await bdName.save();
          let ctdata = await countrydata.save();
          let stdata = await statedata.save();
          var ddata = {
            districtName: savedata.districtname,
            statename: savedata.stateName,
            blodgroupName: savedata.bloodGroupName,
            districtID: savedata._id,
            stateID: stdata._id,
            countryname: ctdata.countryName,
          };
          if (ctdata && stdata) {
            let distdata = new distmodel(ddata);
            let District = await distdata.save();
          }
          res.status(200).json({
            statusCode: 200,
            message: "item saved to the database",
            result: savedata,
          });
        }
      }
    } catch (e) {
      res.status(500).json({
        statusCode: 500,
        error: e,
      });
    }
  },

};

module.exports = user_group;