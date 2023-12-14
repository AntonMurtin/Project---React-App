const Tools = require('../models/Tools');

exports.create = (cardData) => Tools.create(cardData);

exports.getAll = () => Tools.find();

exports.getById = (cardId) => Tools.findById(cardId);

exports.update = (cardId, cardData) => Tools.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Tools.findByIdAndDelete(cardId);

exports.searchName = (searchName) => Tools.find({title:{$regex: searchName, $options: 'i'}});

exports.searchWish = (userId) => Tools.find({wish:{$elemMatch:{_id:userId}}});

exports.searchBuy = (userId) => Tools.find({buy:{$elemMatch:{_id:userId}}});
