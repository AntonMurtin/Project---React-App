const Machines = require('../models/Machines');

exports.create = (cardData) => Machines.create(cardData);

exports.getAll = () => Machines.find();

exports.getById = (cardId) => Machines.findById(cardId);

exports.update = (cardId, cardData) => Machines.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Machines.findByIdAndDelete(cardId);

exports.searchWish = (userId) => Machines.find({wish:{$elemMatch:{_id:userId}}});
// exports.searchName = (searchName) => Electronic.find({name:{$regex: searchName, $options: 'i'}});