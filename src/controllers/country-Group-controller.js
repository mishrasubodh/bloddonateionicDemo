const countryModel = require('../models/countryGroupModel');
const countryGroup = countryModel.countryGroup;
const country_group = {
    getcountryGroup: (req, res) => {
        try {
            countryGroup.find({bloodgroupName:req.body.bloodGroupName}).then((user, err) => {
                console.log(user,"user")
                res.status(200).json({ statusCode: 200, message: 'data successfully get from database', data: user })
            })
        } catch (e) {
            res.status(500).json({ statusCode: 500, error: e });
        }
    }


};

module.exports = country_group;