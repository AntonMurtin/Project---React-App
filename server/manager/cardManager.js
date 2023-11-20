const Card=require('../models/Card');

exports.create=(cardData)=> Card.create(cardData);

exports.getAll=()=>Card.find;

exports.getById=(cardId)=> Card.findById(cardId);

exports.update=(cardId, cardData)=> Card.findByIdAndUpdate(cardId, cardData);

exports.delete=(cardId)=>Card.findByIdAndDelete(cardId);