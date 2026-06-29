const express = require('express');
const router = express.Router();
const { dbMiddleware } = require('../bin/db');

/* GET comments page. */
router.get('/', dbMiddleware, function(req, res, next) {
  req.db.query('SELECT * FROM todos;', (err, results) => {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.render('comments', {
        title: 'Comments',
        error: 'Could not load comments from the database.',
        items: []
      });
    }

    res.render('comments', {
      title: 'Comments',
      items: results
    });
  });
});

module.exports = router;
