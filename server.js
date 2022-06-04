const express = require('express');
const mongoose = require('mongoose');

// const routes = require ('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));
// connection to MongoDB through Mongoose



mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:5oO9WQYngl47yd5z@social-network-api.xbxhz56.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
