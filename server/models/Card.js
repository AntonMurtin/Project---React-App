const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;