const express = require('express');
const mongoose = require('mongoose');
const AuthRoutes = require('./Routes/AuthRoutes');


const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

mongoose.connect('mongodb://localhost:27017/ahmed')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api', AuthRoutes); //singup and login


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
