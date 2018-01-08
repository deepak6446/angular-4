const express       = require('express');
      path          = require('path'),
      favicon       = require('serve-favicon'),
      morgan        = require('morgan'),
      cookieParser  = require('cookie-parser'),
      bodyParser    = require('body-parser'),
      setting       = require('./config/setting'),
      router        = require('./routes/index'),
      session       = require('express-session'),
      redis   = require("redis"),
      redisStore = require('connect-redis')(session),
      client  = redis.createClient();


const app = express();
global.user_sessions = {};

// app.use(session({ secret: 'foodappsecretkey00182889', cookie: { maxAge : 1000*60*60 }})) 
app.use(session({
    secret: 'foodappsecretkey00182889',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  1000*60*60}),//inseconds
    cookie: { maxAge : 1000*60*60 }
}));

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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router)

app.get('*', function(req, res, next){
    if(req.url == 'error'){
        res.status(404);
        res.sendFile(__dirname + '/public/404.html');    
    }
    else res.sendFile('index.html', {root: __dirname+'/src'})}
)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var port = process.env.port|| 8088
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

//handle uncaughtException
process.on('uncaughtException', function(e) {
 console.log("uncaughtException: Node NOT Exiting..."+e);
});

module.exports = app;
