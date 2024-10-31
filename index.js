const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Import the User model

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
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

