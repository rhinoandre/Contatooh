var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('User');

    passport.use(new GitHubStrategy({
        clientID: '092963ce64f5675e2c01',
        clientSecret: '8f5854c983c9938fa3dd2730f7c13597ab2bc5e9',
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
