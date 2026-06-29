const express = require('express');
const router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('menu', { title: 'Menu' });
});

module.exports = router;
