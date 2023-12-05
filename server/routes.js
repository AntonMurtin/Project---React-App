const router = require('express').Router();

const userController = require('./controllers/userController')
const waterpompController = require('./controllers/waterpompController')
const partsController = require('./controllers/partsControler')
const toolsController = require('./controllers/toolsManager')

router.use('/users', userController);
router.use('/waterpomps', waterpompController);
router.use('/parts', partsController);
router.use('/tools', toolsController);


module.exports = router