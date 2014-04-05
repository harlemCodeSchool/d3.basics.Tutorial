// Required stuff
var express = require('express') 
  , routes = routes = require('./routes')
  , app = express();


// Application Config
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(express.compiler({ src : __dirname + '/public', enable: ['less']}));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.use('/public', express.static(__dirname + '/public'));
    app.use('/data',  express.static(__dirname + '/data'));

});

// Routes
app.get('/', routes.index);

// Localhost on port 5000
var server = app.listen(5000, function() {
    console.log('Listening on port %d', server.address().port);
});
