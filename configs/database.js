var mongoose = require('mongoose');

module.exports = function(uri){
    mongoose.connect(uri);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose! Connected at ' + uri);
    });
    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose! Disconnected from ' + uri);
    });
    mongoose.connection.on('error', function(){
        console.log('Mongoose!  Connection error: ' + uri);
    });

    process.on('SIGINIT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose! Disconnected by application ended');
            //0 = Ended occurred without errors
            process.exit(0);
        });
    });
};