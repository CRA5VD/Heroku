// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 39.4K (gzipped: 12.8K)
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/mern_youtube', {
    useNewUrlParser: true,
    useUinfiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


// Step3
if(process.env.NODE_ENV==='production'){

}


app.listen(PORT, console.log('Server is starting at ${PORT}'));