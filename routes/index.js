var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Юпитера */
router.get('/jupiter', function(req, res, next) {
  res.send("<h1>Страница Юпитера</h1>")
});

/* Страница Марса */
router.get('/mars', function(req, res, next) {
  res.send("<h1>Страница Марса</h1>")
});

/* Страница Меркурия */
router.get('/mercury', function(req, res, next) {
  res.send("<h1>Страница Меркурия</h1>")
});

/* Страница Нептуна */
router.get('/neptune', function(req, res, next) {
  res.send("<h1>Страница Нептуна</h1>")
});

/* Страница Урана */
router.get('/uranus', function(req, res, next) {
  res.send("<h1>Страница Урана</h1>")
});

module.exports = router;
