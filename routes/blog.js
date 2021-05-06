var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});
router.get('/add', function(req, res, next) {
  res.render('addblog', { title: 'Add Blog' });
});
router.post('/add',
  body('name','กรุณาป้อนชื่อบทความ').not().isEmpty(),
  body('description','กรุณาป้อนรายละเอียด').not().isEmpty(),
  body('author','กรุณาป้อนชื่อผู้แต่ง').not().isEmpty(),

  function(req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
    if (!result.isEmpty()) {
        res.render('addblog',{errors: errors});
    }
    console.log(req.body.name);
    console.log(req.body.description);
    console.log(req.body.author);
});
module.exports = router;
