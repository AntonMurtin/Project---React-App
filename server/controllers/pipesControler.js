const router = require('express').Router();
const pipesManager = require('../manager/pipesManager');

router.get('/', async (req, res) => {
    try {
        const cards = await pipesManager.getAll()

        res.json(cards)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

router.post('/create', async (req, res) => {

    try {
        const card = await pipesManager.create(req.body);

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
            const card=await pipesManager.searchName(searchName);
            res.json(card);
        }else{
            const cards = await pipesManager.getAll();
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
        const card = await pipesManager.getById(cardId)

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
        const card = await pipesManager.update(cardId, cardData);

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
        await pipesManager.delete(cardId);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

})

router.put('/:cardId/wish', async (req, res) => {
    const cardId = req.params.cardId;
    const userId = req.body.userId;

    try {
        const card = await pipesManager.getById(cardId);
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
        const card = await pipesManager.searchWish(userId);

        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.put('/:cardId/removeWish', async (req, res) => {
    const cardId = req.params.cardId;
    const userId = req.body.userId;
    try {
        const card = await pipesManager.getById(cardId);

        card.wish = card.wish.filter(x => x._id != userId);
        card.save();
        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});

router.put('/:cardId/buyProduct', async (req, res) => {
    const cardId = req.params.cardId;
    const userId = req.body.userId;
    try {
        const card = await pipesManager.getById(cardId);

        const isWish = card.buy.filter(x => x._id == userId);

        if (isWish.length > 0) {
            throw new Error('You awredi buy the product')
        }

        card.buy.push(userId);
        card.save();
        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});


router.get('/:userId/buyProduct', async (req, res) => {
    const userId = req.params.userId;

    try {
        const card = await pipesManager.searchBuy(userId);

        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.put('/:cardId/removeBuy', async (req, res) => {
    const cardId = req.params.cardId;
    const userId = req.body.userId;
    try {
        const card = await pipesManager.getById(cardId);

        card.buy = card.buy.filter(x => x._id != userId);
        card.save();
        res.json(card);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});

module.exports = router;