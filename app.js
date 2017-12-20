const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = require('./routes/index');
// const users = require('./routes/users');
// const router = express.Router();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', router)
app.get('*', function(req, res, next){
    if(req.url == 'error'){
        res.status(404);
        res.sendFile(__dirname + '/public/404.html');    
    }
    else res.sendFile('index.html', {root: __dirname+'/src'})}
)

// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
var port = 8088
app.listen(port,function(){ console.log("listening on "+port) });
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log("error in getting file : ----", err)
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
