const mongoose = require('mongoose');

const PipesShema = new mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Type is required!'],
        
    },
    title: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name shoud be at least 2 characters']
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required!'],
        match: [/^https?:\/\//, ' Invalid URL!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'Price must min 1 and max 100'],
        max: [100, 'Price must min 1 and max 100']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description shoud be at least 5 characters'],
        maxLength: [50, 'Description shoud be max 50 characters']
    },
    buy: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
    }],
    wish: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
    }],
});

const Pipes = mongoose.model('Pipes', PipesShema);

module.exports = Pipes;