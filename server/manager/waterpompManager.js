const Waterpomp = require('../models/Waterpomps');

exports.create = (cardData) => Waterpomp.create(cardData);

exports.getAll = () => Waterpomp.find();

exports.getById = (cardId) => Waterpomp.findById(cardId);

exports.update = (cardId, cardData) => Waterpomp.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Waterpomp.findByIdAndDelete(cardId);

exports.searchWish = (userId) => Waterpomp.find({wish:{$elemMatch:{_id:userId}}});
// exports.searchName = (searchName) => Electronic.find({name:{$regex: searchName, $options: 'i'}});