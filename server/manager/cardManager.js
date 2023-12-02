const Products=require('../models/Products');

exports.create=(type,cardData)=> Products[type].create(cardData);

exports.getAll=(type)=>Products[type].find;

exports.getById=(type,cardId)=> Products[type].findById(cardId);

exports.update=(type,cardId, cardData)=> Products[type].findByIdAndUpdate(cardId, cardData);

exports.delete=(type,cardId)=>Products[type].findByIdAndDelete(cardId);