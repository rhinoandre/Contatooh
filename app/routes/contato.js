function authVerification(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.status(401).json('Not Authorized');
    }
};

module.exports = function(app){
    var contactController = app.controllers.contato;
    app.route('/contacts')
        .get(authVerification, contactController.list)
        .post(authVerification, contactController.save);

    app.route('/contacts/:id')
        .get(authVerification, contactController.get)
        .delete(authVerification, contactController.remove);
};
