var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var ip = req.headers['x-real-ip'] ? req.headers['x-real-ip'] : req.ip.replace(/::ffff:/, '');

  var msg = "respond with a resouorce:"+ip;

  res.send(msg);
});

router.get('/list',function(req,res,next){
  res.send('return all users');
})

module.exports = router;
