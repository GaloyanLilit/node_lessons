var express = require('express');
var router = express.Router();
const { isEmail } = require('../utils/validate');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  
  res.render('index');
});

router.post('/', function(req, res, next) {
  if(!req.body) return res.sendStatus(400)
  console.log('req.body');

  
  
  
  res.render('test', {data: req.body});
});

module.exports = router;
