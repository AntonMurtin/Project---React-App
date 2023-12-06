const Machines = require('../models/Machines');

exports.create = (cardData) => Machines.create(cardData);

exports.getAll = () => Machines.find();

exports.getById = (cardId) => Machines.findById(cardId);

exports.update = (cardId, cardData) => Machines.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Machines.findByIdAndDelete(cardId);