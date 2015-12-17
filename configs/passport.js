var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function(){
    passport.use(new GitHubStrategy({
        clientID: 'YOUR CLIENT ID',
        clientSecret: 'YOUR CLIENT SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }), function(accessToken, refreshToken, profile, done){

    });
};
