const Pipes = require('../models/Pipes');

exports.create = (cardData) => Pipes.create(cardData);

exports.getAll = () => Pipes.find();

exports.getById = (cardId) => Pipes.findById(cardId);

exports.update = (cardId, cardData) => Pipes.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Pipes.findByIdAndDelete(cardId);

exports.searchWish = (userId) => Pipes.find({wish:{$elemMatch:{_id:userId}}});

exports.searchName = (searchName) => Pipes.find({title:{$regex: searchName, $options: 'i'}});
