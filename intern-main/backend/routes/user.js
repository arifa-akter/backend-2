const router = require('express').Router();

const { getUser ,getMzx} = require('../controllers/user');
const { isAuth } = require('../middlewares/authenticated');

router.get('/xyz', isAuth, getUser);
router.get ('/mxz', isAuth ,getMzx)

module.exports = router;
