var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(){
    var app = express();

    //enviroment configuration
    app.set('port', 3000);

    //adding view engine with node managing all parts of website
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //middleware
    app.use(express.static('./public'));

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(session({
        secret: 'homem beringela',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    //initializing the home route
    load('models', {cwd: 'app'})
            .then('controllers')
            .then('routes')
            .into(app);

    return app;
};
