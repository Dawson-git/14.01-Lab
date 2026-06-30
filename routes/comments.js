const express = require('express');
const router = express.Router();
const { dbMiddleware } = require('../bin/db');

function renderCommentsPage(req, res, errorMessage, statusCode = 200, formData = {}) {
  req.db.query('SELECT * FROM comments ORDER BY created_at DESC;', (err, results) => {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.status(statusCode).render('comments', {
        title: 'Comments',
        error: 'Could not load comments from the database.',
        items: [],
        form: formData
      });
    }

    res.status(statusCode).render('comments', {
      title: 'Comments',
      error: errorMessage || null,
      items: results,
      form: formData
    });
  });
}

/* GET comments page. */
router.get('/', dbMiddleware, function(req, res, next) {
  renderCommentsPage(req, res);
});

/* POST new comment. */
router.post('/', dbMiddleware, function(req, res, next) {
  const { name, comment } = req.body;
  const MAX_COMMENT_LENGTH = 250;

  if (!name || !comment) {
    return renderCommentsPage(req, res, 'Please enter both your name and a comment.', 400, { name: name || '', comment: comment || '' });
  }

  if (comment.length > MAX_COMMENT_LENGTH) {
    return renderCommentsPage(req, res, `Comment must be ${MAX_COMMENT_LENGTH} characters or fewer.`, 400, { name, comment });
  }

  req.db.query(
    'INSERT INTO comments (name, comment, created_at) VALUES (?, ?, NOW());',
    [name, comment],
    (err) => {
      if (err) {
        console.error('Error adding comment:', err);
        return renderCommentsPage(req, res, 'Could not save your comment right now, please try making it shorter or trying again later.', 500, { name, comment });
      }

      res.redirect('/comments');
    }
  );
});

module.exports = router;
