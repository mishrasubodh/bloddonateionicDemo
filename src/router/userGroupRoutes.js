const router = require('express').Router();
const groupCtrl = require('../controllers/user-group-controller');

router.post('/', groupCtrl.getuserGroup);
router.post('/getuser', groupCtrl.getuserData);
router.post('/edit', groupCtrl.updateuser);
router.post('/remove', groupCtrl.deleteuserData);

module.exports = router;