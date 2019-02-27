const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(morgan('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static files from client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// include routes
const routes = require('./routes/index');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (res, res, next) {
  let err = new Error('File not found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`${PORT} BECAUSE OF THE INTERNET`);
});