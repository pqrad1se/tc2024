const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Planet = require('./models/planet.js').Planet

var planet = new Planet ({
    title: "Юпитер",
    nick: "jupiter",

})
planet.save (); 


