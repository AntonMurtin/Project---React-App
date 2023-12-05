const Tools = require('../models/Tools');

exports.create = (cardData) => Tools.create(cardData);

exports.getAll = () => Tools.find();

exports.getById = (cardId) => Tools.findById(cardId);

exports.update = (cardId, cardData) => Tools.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Tools.findByIdAndDelete(cardId);