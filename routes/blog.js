var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});
router.get('/add', function(req, res, next) {
  res.render('addblog', { title: 'Add Blog' });
});

module.exports = router;
