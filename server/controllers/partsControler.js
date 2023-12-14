const router = require('express').Router();
const partsManager = require('../manager/partsManager');

router.get('/', async (req, res) => {
    try {
        const cards = await partsManager.getAll()

        res.json(cards)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

router.post('/create', async (req, res) => {

    try {
        const card = await partsManager.create(req.body);

        res.json(card)
    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        });
    }
});

router.put('/search', async(req,res)=>{
    const searchName=req.body.searchName;
    
    try {
        if(searchName!=''){
            const card=await partsManager.searchName(searchName);
            res.json(card);
        }else{
            const cards = await partsManager.getAll();
            res.json(cards);
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.get('/:cardId', async (req, res) => {
    const cardId = req.params.cardId
    try {
        const card = await partsManager.getById(cardId)

        res.json(card)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.put('/:cardId/edit', async (req, res) => {
    const cardId = req.params.cardId;
    const cardData = req.body

    try {
        const card = await partsManager.update(cardId, cardData);

        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

})

router.delete('/:cardId/delete', async (req, res) => {
    const cardId = req.params.cardId;


    try {
        await partsManager.delete(cardId);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});
router.put('/:cardId/wish', async (req, res) => {
    const cardId = req.params.cardId;
    const userId = req.body.userId;

    try {
        const card = await partsManager.getById(cardId);
        const isWish = card.wish.filter(x => x._id == userId);

        if (isWish.length > 0) {
            throw new Error('You awredi add the product to Favorit')
        }

        card.wish.push(userId);
        card.save();
        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});

router.get('/:userId/wish', async (req, res) => {
    const userId = req.params.userId;

    try {
        const card = await partsManager.searchWish(userId);

        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.put('/:cardId/remove', async (req, res) => {
    const cardId = req.params.cardId;
    const userId = req.body.userId;
    try {
        const card = await partsManager.getById(cardId);

        card.wish = card.wish.filter(x => x._id != userId);
        card.save();
        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});


module.exports = router;