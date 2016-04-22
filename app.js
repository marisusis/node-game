var express = require('express');
var http = require('http');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//Create the app
var app = express();

//Create the server
var server = http.Server(app);

//Create the socket server
var io = require('socket.io')(server);

io.on('connection',function(socket) {
  console.log('a user connected.');
  socket.on('move',function(data) {
    socket.broadcast.emit('move',data);
  });
});

//Logger
app.use(logger('dev'));

//Routes
app.use('/',require('./routes/index.js'));
app.use('/user',require('./routes/user.js'));
app.use('/-',require('./routes/assets.js'));

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//Body and cookie parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Favicon
app.use(favicon(path.join(__dirname, 'build/img', 'favicon.ico')));

server.listen(3000, function(){
  console.log('listening on *:3000');
});
