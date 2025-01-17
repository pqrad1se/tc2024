var express = require('express');
var router = express.Router();
var Planet = require('../models/planet').Planet;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с planets');
});

/* Страница планет */
router.get("/:nick", async function(req, res, next) {
    var planets = await Planet.find({nick: req.params.nick});
    console.log(planets)
    if(!planets.length) return next(new Error("Нет такой планеты в Солнечной системе"))
    var planet = planets[0];
    res.render('planets', {
    title: planet.title,
    picture: planet.avatar,
    desc: planet.desc
    })
    });

module.exports = router;