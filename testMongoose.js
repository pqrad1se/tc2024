const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })

schema.methods.showPlanet = function() {
    console.log("Планета: " + this.name );
  };

const Planet = mongoose.model('Planet', schema);
const system = new Planet({ name: 'Юпитер' });
system.save().then(() => system.showPlanet());

