const router = require('express').Router();
const groupCtrl = require('../controllers/get-email-controller');

router.post('/', groupCtrl.getEmailInformation);
router.post('/login', groupCtrl.getRegisterEmail);

module.exports = router;