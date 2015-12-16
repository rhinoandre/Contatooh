module.exports = function(app){
    var contactController = app.controllers.contato;
    app.route('/contacts')
        .get(contactController.list)
        .post(contactController.save);

    app.route('/contacts/:id')
        .get(contactController.get)
        .delete(contactController.remove);
};
