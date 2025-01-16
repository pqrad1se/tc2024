const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Planet = mongoose.model('Planet', { name: String });
const system = new Planet({ name: 'Юпитер' });
system.save().then(() => console.log('Звезды'));

