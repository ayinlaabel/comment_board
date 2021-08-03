var express = require('express');
const wish = require('../models/wish');
var router = express.Router();

const Wish = require('../models/wish');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mummy Aderemi @ 80' });
});

router.post('/', (req, res, next) => {
  const wish = new Wish();

  wish.firstName = req.body.firstName;
  wish.lastName = req.body.lastName;
  wish.email = req.body.email;
  wish.phone = req.body.phone;
  wish.message = req.body.message;

    if (wish.firstName ==='' && wish.lastname ==='') {
      wish.firstName = 'Annonymous';
    } 

    wish.save().then(
      () => {
        res.redirect('/wishes');
      }
    );
  
});

router.get('/wishes', (req, res, next) => {
  res.render('wishes');
});

module.exports = router;
