const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from the server!');
})

mongoose.connect(process.env.DATABASE_CONNECTION, () => {
    console.log('connected to DB!');
})

app.listen(5000);