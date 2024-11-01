const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Import the User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key


const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

mongoose.connect('mongodb://localhost:27017/ahmed')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.status(201).send(user);
        console.log(`user's info sent! ${user.name}`)
    } catch (error) {
        res.status(400).send(error.message);
    }
});


app.post('/login', async (req, res) => {
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
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
