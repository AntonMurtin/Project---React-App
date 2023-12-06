const router = require('express').Router();
const systemsManager = require('../manager/systemsManager');

router.get('/', async (req, res) => {
    try {
        const cards = await systemsManager.getAll()
       
         res.json(cards)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

router.post('/create', async (req, res) => {

    try {
        const card = await systemsManager.create(req.body);

        res.json(card)
    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        });
    }
});

router.get('/:cardId', async (req, res) => {
    const cardId = req.params.cardId
    try {
        const card = await systemsManager.getById(cardId)

        res.json(card)
    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    }
});

router.put('/:cardId',async(req,res)=>{
    const cardId = req.params.cardId;
    const cardData=req.body

    try {
        const card=await systemsManager.update(cardId,cardData);

        res.json(card);
    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    }

})

router.delete('/:cardId',async(req,res)=>{
    const cardId = req.params.cardId;
   

    try {
        await systemsManager.update(cardId);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    }

})

module.exports = router;