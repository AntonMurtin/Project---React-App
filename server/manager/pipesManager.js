const Pipes = require('../models/Pipes');

exports.create = (cardData) => Pipes.create(cardData);

exports.getAll = () => Pipes.find();

exports.getById = (cardId) => Pipes.findById(cardId);

exports.update = (cardId, cardData) => Pipes.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Pipes.findByIdAndDelete(cardId);