const bloodModel = require('../models/bloodGroupModel');
const bloodGroup = bloodModel.bloodGroup;
const blood_group = {
    getBloodGroup: async (req, res) => {
        try {
         let bloodgroupData = await bloodGroup.find()
         if(bloodgroupData){
             res.status(200).json({ statusCode: 200, message: 'data successfully get from database', data: bloodgroupData })

         }
        } catch (e) {
            res.status(500).json({ statusCode: 500, error: e });
        }
}
}

module.exports = blood_group;