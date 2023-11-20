const express = require('express');
const cors =require('cors')
// const cookie = require('cookie-parser');
const { auth } = require('../middlewares/authMiddlewares');

function expressConfig(app) {
    app.use( express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors())
    app.use(auth);
    // app.use(cookie());

}

module.exports = expressConfig;

