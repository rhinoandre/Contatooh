var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('User');

    passport.use(new GitHubStrategy({
        clientID: 'c338dd3648a5f6da1abb',
        clientSecret: '3175b7223ed159ba3bd8c03376c385ac4b332454',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done){
        console.log('profile', profile);
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);

        User.findOrCreate(
            {login: profile.username},
            {name: profile.username},
            function(error, user){
                if(error){
                    console.error(error);
                    return done(error);
                }
                return done(null, user);
            });
    }));

    passport.serializeUser(function(user, done){
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id).exec()
            .then(function(user){
                done(null, user);
            }
        );
    });
};
