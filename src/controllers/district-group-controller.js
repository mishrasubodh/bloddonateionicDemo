const districtModel = require("../models/districtGroupModel");
const districtGroup = districtModel.districtGroup;
const district_group = {
  getdistrictGroup: async (req, res) => {
    try {
      let distData = await districtGroup.find({
        statename: req.query.statename,
      });
      if(distData.length>0){
          res
            .status(200)
            .json({
              statusCode: 200,
              message: "data successfully get from database",
              data: distData,
            });
      }
    } catch (e) {
      res.status(500).json({ statusCode: 500, error: e });
    }
  },
};

module.exports = district_group;
