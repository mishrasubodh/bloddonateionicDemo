const userModel = require("../models/userGroupModel");
var nodemailer = require("nodemailer");
const encriptdcript = require("../utility/crypt");

const userGroup = userModel.userGroup;
const decpass = encriptdcript.getdecpret;
const user_group = {
  getEmailInformation: async (req, res) => {
    try {
      userGroup.find({ email: req.body.info }, (err, user) => {
        if (err)
          res
            .status(401)
            .json({ statusCode: 401, message: "not a valid email id" });
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "subodh.shipgig@gmail.com",
            pass: "Smishra@7878",
          },
        });
        var mailOptions = {
          from: "subodh.shipgig@gmail.com",
          to: req.body.info,
          text: "resend email",
          subject: "Sending Email using Node.js",

          html:
            "<p>Click</p> <h1>Hello sir/mam <p> Hope u are doing well. I need a blood group , Please help me.</p><br><h5>Thanks & Regards<br> By sender</h5></h1> ",
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            res.status(200).json({
              statusCode: 200,
              message: "email send to the registered user",
              data: user,
            });
            console.log("Email sent: " + info.response);
          }
        });
      });
    } catch (e) {
      res.status(500).json({ statusCode: 500, error: e });
    }
  },

  getRegisterEmail: async (req, res) => {

    
    let registerData = await userGroup.find({ email: req.body.email });
    if (registerData.length > 0) {
      let pass = await decpass(registerData[0].password);
      if (pass) {
        console.log(pass,"coming in  pass");
        
        if (pass.plainText == req.body.password) {
          var data = {
            _id:registerData[0]._id,
            userName: registerData[0].userName,
            email: registerData[0].email,
            phoneNumber: registerData[0].phoneNumber,
            bloodGroupName: registerData[0].bloodGroupName,
            districtname: registerData[0].districtname,
            stateName: registerData[0].stateName,
            countryName: registerData[0].countryName,
          };
          res.status(200).json({ statusCode: 200, data: data });
        } else {
          res.status(401).json({ statusCode: 401, message: "wrong Password" });
        }
      }
    } else {
      res.status(401).json({ statusCode: 401, message: "email is  not found" });
    }
  },
};

module.exports = user_group;
