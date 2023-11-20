const router=require('express').Router();

const userController=require('./controllers/userController')
const cardController=require('./controllers/cardsController')

router.use('/users',userController);
router.use('/cards',cardController)


module.exports = router;