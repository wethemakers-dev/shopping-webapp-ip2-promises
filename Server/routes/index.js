var express = require('express');
var router = express.Router();
const User = require('../modulesdB/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,condition: true})
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign Up' })
});

router.get('/login' , (req , res , next) =>{
  res.render('/login',{title : 'Login'})
})
  
module.exports = router;
