const router = require('express').Router();
const cardManager = require('../manager/cardManager');

router.get('/', async (req, res) => {
    try {
        const cards = await cardManager.getAll();
        res.json(cards)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

router.post('/', async (req, res) => {

    try {
        const card = await cardManager.create({
            ...req.body,
            _ownerId: req.user._id,
        });
        res.json(card)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.get('/:cardId', async (req, res) => {
    const cardId = req.params.cardId
    try {
        const card = await cardManager.getById(cardId)

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
        const card=await cardManager.update(cardId,cardData);

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
        await cardManager.update(cardId);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    }

})

module.exports = router;