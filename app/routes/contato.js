module.exports = function(app){
    var controller = app.controllers.contato;
    app.route('/contacts')
        .get(controller.listContacts)
        .post(controller.saveContact);

    app.route('/contacts/:id')
        .get(controller.getContacts)
        .delete(controller.removeContact);
};
