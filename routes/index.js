var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Юпитера */
router.get('/jupiter', function(req, res, next) {
  res.render('planets', {
    title: "Юпитер",
    picture: "images/jupiter.jpg",
    desc: "Пятая планета от Солнца и самая большая в Солнечной системе."
    });
  });


/* Страница Марса */
router.get('/mars', function(req, res, next) {
  res.render('planets', {
      title: "Марс",
      picture: "images/mars.jpg",
      desc: "Четвёртая планета от Солнца, известна как 'Красная планета' из-за своего цвета."
    });
  });


  /* Страница Меркурия */
router.get('/mercury', function(req, res, next) {
  res.render('planets', {
      title: "Меркурий",
      picture: "images/mercury.jpg",
      desc: "Ближайшая планета к Солнцу и самая маленькая в Солнечной системе."
  });
});


  /* Страница Нептуна */
router.get('/neptune', function(req, res, next) {
  res.render('planets', {
      title: "Нептун",
      picture: "images/neptune.jpg",
      desc: "Восьмая и самая дальняя от Солнца планета, известная своими мощными ветрами."
});
});

  /* Страница Урана */
router.get('/uranus', function(req, res, next) {
  res.render('planets', {
    title: "Уран",
    picture: "images/uranus.jpg",
    desc: "Седьмая планета от Солнца, вращается с наклоном на бок."
});
});

module.exports = router;
