var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    //enviroment configuration
    app.set('port', 3000);

    //adding view engine
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //middleware
    app.use(express.static('./public'));


    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    //initializing the home route
    load('models', {cwd: 'app'})
            .then('controllers')
            .then('routes')
            .into(app);

    return app;
};
