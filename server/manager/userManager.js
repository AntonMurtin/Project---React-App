const User = require('../models/User');
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')



exports.register = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (user) {
        throw new Error(error.userExists);
    };
    const createUser = await User.create(userData);
    const token = await generateToken(createUser);
    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    }
    return result;
};

exports.login = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (!user) {
        throw new Error(error.invalideUser);
    };
    const isValide = await bcrypt.compare(userData.password, user.password);
    if (!isValide) {
        throw new Error(error.invalideUser);
    };
    const token = await generateToken(user);
    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    }
    return result;
}