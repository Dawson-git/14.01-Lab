const express = require('express');
const path = require('path');
const indexRouter    = require('./routes/index');    // handles "/"
const menuRouter     = require('./routes/menu');     // handles "/menu"
const aboutRouter    = require('./routes/about');    // handles "/about"
const commenmtsRouter = require('./routes/commenmts'); // handles "/commenmts"
//add more handlers here

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/commenmts', commenmtsRouter); // all /commenmts/* URLs
app.use('/menu',     menuRouter);     // all /menu/* URLs
app.use('/about',    aboutRouter);    // all /about/* URLs
app.use('/',         indexRouter);    // the homepage and any /* fallthrough
//add more routes here

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).render('error', {
    title:   'Page Not Found',
    message: 'We couldn\'t find that page.',
    detail:  'It may have been moved or deleted.'
  });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
 
  // err.status might be set by the route (e.g. 403 Forbidden).
  // If not, default to 500 (Internal Server Error).
  res.status(err.status || 500).render('error', {
    title:   'Something went wrong',
    message: 'An unexpected error occurred.',
    // Only show technical detail in development, not production.
    detail:  app.get('env') === 'development' ? err.message : ''
  });
});

module.exports = app;
