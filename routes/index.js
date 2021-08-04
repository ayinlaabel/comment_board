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

  
  wish.lastName = req.body.lastName;
  wish.email = req.body.email;
  wish.phone = req.body.phone;
  wish.message = req.body.message;

    if (req.body.firstName ==='' && req.body.lastName==='') {
      wish.firstName = 'Annonymous';
      console.log(wish.firstName)
      wish.save().then(
        () => {
          res.redirect('/wishes');
        }
      );
    } else {
      wish.firstName = req.body.firstName;
      wish.save().then(
        () => {
          res.redirect('/wishes');
        }
      );
    }
  
});

router.get('/wishes', (req, res, next) => {
  Wish.find({}).then(
    (wishes) => {
      console.log(wishes)
     res.render('wishes', { 
       title: 'Mummy Aderemi @ 80',
       wishes });
  })
});

module.exports = router;
