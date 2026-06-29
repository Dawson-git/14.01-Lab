const express = require('express');
const router = express.Router();
const { dbMiddleware } = require('../bin/db');

/* GET commenmts page. */
router.get('/', dbMiddleware, function(req, res, next) {
  req.db.query('SELECT * FROM todos;', (err, results) => {
    if (err) {
      console.error('Error fetching commenmts:', err);
      return res.render('commenmts', {
        title: 'Commenmts',
        error: 'Could not load commenmts from the database.',
        items: []
      });
    }

    res.render('commenmts', {
      title: 'Commenmts',
      items: results
    });
  });
});

module.exports = router;
