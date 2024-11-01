const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; 
const User = require('../models/user');

//
exports.singup = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.status(201).send(user);
        console.log(`user's info sent! ${user.name}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send('Invalid email or password.');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid email or password.');
        }

        const token = jwt.sign({ _id: user._id }, secretKey);
        res.send({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};