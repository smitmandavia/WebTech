var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Smit Mandavia' });
});

router.post('/contact_submission/', function(req, res) {
  console.log(req.body);
  res.redirect(301, '/');
});

router.get('/about/', function(req, res, next) {
  res.render('about', { title: 'Smit Mandavia' });
});

router.get('/projects/', function(req, res, next) {
  res.render('projects', { title: 'Smit Mandavia' });
});

router.get('/services/', function(req, res, next) {
  res.render('services', { title: 'Smit Mandavia' });
});


router.get('/contact/', function(req, res, next) {
  res.render('contact', { title: 'Smit Mandavia' });
});

module.exports = router;
