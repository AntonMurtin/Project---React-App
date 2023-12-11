const Parts = require('../models/Parts');

exports.create = (cardData) => Parts.create(cardData);

exports.getAll = () => Parts.find();

exports.getById = (cardId) => Parts.findById(cardId);

exports.update = (cardId, cardData) => Parts.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Parts.findByIdAndDelete(cardId);

exports.searchWish = (userId) => Parts.find({wish:{$elemMatch:{_id:userId}}});
// exports.searchName = (searchName) => Electronic.find({name:{$regex: searchName, $options: 'i'}});